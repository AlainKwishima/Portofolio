'use client'

import { useState, useMemo, useEffect, useCallback } from 'react'
import { usePagination } from '@/hook/use-pagination'
import { Button } from '@/components/ui/button'
import { ProjectCard } from './project-card'
import { ProjectPagination } from './project-pagination'
import { TerminalIcon, SearchIcon, XIcon, Loader2Icon } from 'lucide-react'
import { data } from '@/constants'
import { TypeAnimation } from 'react-type-animation'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from './ui/input'
import { fetchGithubProjects } from '@/lib/github'
import type { ProjectProps } from '@/types'

function normalizeGithubUrl(url?: string) {
  if (!url) {
    return undefined
  }

  try {
    const parsedUrl = new URL(url)
    const normalizedPath = parsedUrl.pathname
      .replace(/\.git$/i, '')
      .replace(/\/$/, '')
      .toLowerCase()
    return `https://github.com${normalizedPath}`
  } catch {
    return url
      .trim()
      .replace(/\.git$/i, '')
      .replace(/\/$/, '')
      .toLowerCase()
  }
}

function toTimestamp(date?: string) {
  if (!date) {
    return 0
  }
  const parsedDate = Date.parse(date)
  return Number.isNaN(parsedDate) ? 0 : parsedDate
}

export function Projects() {
  const { projects: featuredProjects } = data
  const [searchQuery, setSearchQuery] = useState('')
  const [allProjects, setAllProjects] = useState<ProjectProps[]>(featuredProjects)
  const [isLoading, setIsLoading] = useState(true)
  const t = useTranslations('Projects')

  useEffect(() => {
    async function loadProjects() {
      setIsLoading(true)
      const githubRepos = await fetchGithubProjects()

      const githubByUrl = new Map<string, ProjectProps>()
      for (const repo of githubRepos) {
        const repoUrl = normalizeGithubUrl(repo.link.github)
        if (repoUrl) {
          githubByUrl.set(repoUrl, repo)
        }
      }

      const featuredWithActivity = featuredProjects.map((project) => {
        const projectUrl = normalizeGithubUrl(project.link.github)
        if (!projectUrl) {
          return project
        }

        const githubMatch = githubByUrl.get(projectUrl)
        if (!githubMatch) {
          return project
        }

        return {
          ...project,
          lastUpdated: githubMatch.lastUpdated ?? project.lastUpdated
        }
      })

      const featuredUrls = new Set(
        featuredWithActivity
          .map((project) => normalizeGithubUrl(project.link.github))
          .filter((url): url is string => Boolean(url))
      )

      // Filter out duplicates (if any featured projects are also in github)
      const githubOnly = githubRepos.filter(
        (repo) => {
          const repoUrl = normalizeGithubUrl(repo.link.github)
          if (repoUrl && featuredUrls.has(repoUrl)) {
            return false
          }

          return !featuredWithActivity.some(
            (fp) => fp.title.toLowerCase() === repo.title.toLowerCase()
          )
        }
      )

      const newestFirst = [...featuredWithActivity, ...githubOnly].sort(
        (a, b) => toTimestamp(b.lastUpdated) - toTimestamp(a.lastUpdated)
      )

      setAllProjects(newestFirst)
      setIsLoading(false)
    }
    loadProjects()
  }, [featuredProjects])

  const filteredProjects = useMemo(() => {
    // Note: Search still works on the original title/description for now
    return allProjects.filter((project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [allProjects, searchQuery])

  const { currentProjects, page, totalPages, updatePage } = usePagination({
    projects: filteredProjects
  })

  // Reset to first page on search
  useEffect(() => {
    if (searchQuery) {
      updatePage(1)
    }
  }, [searchQuery, updatePage])

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative w-full py-12 px-2 md:px-0 space-y-10 overflow-hidden"
    >

      <div className='flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className='flex items-center gap-x-4'
        >
          <TerminalIcon className='size-7 animate-pulse stroke-[1.5] text-primary' />
          <TypeAnimation
            sequence={[t('title'), 5000, '',]}
            wrapper='h2'
            cursor={true}
            repeat={Infinity}
            speed={50}
            className='text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent drop-shadow'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative w-full md:max-w-xs group"
        >
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            placeholder={t('searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10 py-5 bg-white/50 dark:bg-black/20 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all rounded-xl"
          />
          <AnimatePresence>
            {searchQuery && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full transition-colors"
              >
                <XIcon className="size-3.5 text-muted-foreground" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-6 p-12 border-2 border-dashed border-border/20 rounded-[2.5rem] bg-white/5 dark:bg-black/5 backdrop-blur-sm">
          <div className="relative">
            <Loader2Icon className="size-16 animate-spin text-primary opacity-20" />
            <TerminalIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-6 text-primary animate-pulse" />
          </div>
          <div className="text-center space-y-2">
            <p className="font-mono text-sm font-bold tracking-widest uppercase text-primary/60">{t('fetching')}</p>
            <p className="text-muted-foreground text-xs animate-pulse">Syncing with GitHub repositories...</p>
          </div>
        </div>
      ) : filteredProjects.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center min-h-[400px] gap-8 p-12 border-2 border-dashed border-border/30 rounded-[2.5rem] bg-white/10 dark:bg-black/20 backdrop-blur-md"
        >
          <div className="p-6 bg-primary/5 rounded-3xl ring-1 ring-primary/20">
            <SearchIcon className="size-12 text-primary/40" />
          </div>
          <div className="text-center space-y-3">
            <h3 className="text-2xl font-bold tracking-tight">{t('noResults')}</h3>
            <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed">No projects matched your current search parameters. You might want to try different keywords or reset the filter.</p>
          </div>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setSearchQuery('')}
            className="rounded-2xl px-8 border-primary/20 hover:bg-primary/5 transition-all active:scale-95"
          >
            {t('reset')}
          </Button>
        </motion.div>
      ) : (
        <>
          <ProjectCard projects={currentProjects} />
          <div className="flex justify-center pt-8">
            <ProjectPagination
              page={page}
              totalPages={totalPages}
              updatePage={updatePage}
            />
          </div>
        </>
      )}
    </motion.section>
  )
}
