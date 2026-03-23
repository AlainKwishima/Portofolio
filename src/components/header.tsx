'use client'

import { Link, usePathname } from '@/navigation'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'
import { LanguageSwitcher } from './language-switcher'
import clsx from 'clsx'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useIsMobile } from '@/hook/use-mobile'

export function Header() {
  const pathname = usePathname()
  const t = useTranslations('Common.nav')
  const isMobile = useIsMobile()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isMobile) {
      setIsMobileMenuOpen(false)
    }
  }, [isMobile])

  const navLinks = [
    { label: 'home', title: t('home'), url: '/' },
    { label: 'career', title: t('career'), url: '/career' },
    { label: 'projects', title: t('projects'), url: '/projects' },
    { label: 'skills', title: t('skills'), url: '/skills' },
    { label: 'blog', title: t('blog'), url: '/blog' },
    { label: 'contact', title: t('contact'), url: '/contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 px-6 md:px-8"
    >
      <div className="mx-auto w-full max-w-7xl rounded-2xl bg-white/80 dark:bg-black/40 backdrop-blur-xl shadow-lg border border-border/50 px-4 md:px-6 py-4 transition-all duration-300 hover:shadow-xl hover:bg-white/90 dark:hover:bg-black/50">
        <div className="flex items-center justify-between">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-8 flex-wrap">
            <Link
              href="/"
              aria-label="Logo"
              className="group flex items-center gap-3 transition-all duration-300 ease-in-out hover:scale-105"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={36}
                  height={36}
                  className="rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300"
                />
              </motion.div>
              <span className="hidden sm:inline font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                ALAIN KWISHIMA
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="relative">
                  <Link
                    href={link.url}
                    aria-label={link.label}
                    className={clsx(
                      'px-4 py-2 text-sm font-semibold transition-all duration-300 ease-in-out relative group',
                      {
                        'text-primary': pathname === link.url,
                        'text-foreground/70 hover:text-primary': pathname !== link.url
                      }
                    )}
                  >
                    {link.title}
                    <span
                      className={clsx(
                        'absolute bottom-1.5 left-4 right-4 h-0.5 bg-primary transform origin-left transition-transform duration-300 ease-out',
                        {
                          'scale-x-100': pathname === link.url,
                          'scale-x-0 group-hover:scale-x-100': pathname !== link.url
                        }
                      )}
                    />
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ModeToggle />
            </motion.div>
            {isMobile && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            )}
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isMobile && isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="mt-4 grid lg:hidden grid-cols-2 gap-2 border-t border-border/60 pt-3"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.url}
                  aria-label={link.label}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={clsx(
                    'rounded-lg px-3 py-2 text-center text-xs font-semibold transition-all duration-300 ease-in-out',
                    {
                      'bg-primary/15 text-primary': pathname === link.url,
                      'text-foreground/70 hover:text-primary hover:bg-primary/10':
                        pathname !== link.url
                    }
                  )}
                >
                  {link.title}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
