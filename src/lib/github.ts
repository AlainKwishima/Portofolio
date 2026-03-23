import { TAGS } from '@/data'
import type { ProjectProps, TagsProps } from '@/types'
import { GithubIcon } from 'lucide-react'

const GITHUB_USERNAME = 'AlainKwishima'

const LANGUAGE_MAP: Record<string, TagsProps> = {
    TypeScript: TAGS.TYPESCRIPT,
    JavaScript: TAGS.JAVASCRIPT,
    CSS: TAGS.CSS,
    'Node.js': TAGS.NODEJS,
    'Next.js': TAGS.NEXTJS,
    Tailwind: TAGS.TAILWIND,
    Python: { name: 'Python', icon: GithubIcon }, // Defaulting to GithubIcon if not found
    Go: { name: 'Go', icon: GithubIcon },
    Java: { name: 'Java', icon: GithubIcon },
}

interface GithubRepo {
    name: string
    description: string | null
    language: string | null
    topics?: string[]
    html_url: string
    homepage: string | null
    pushed_at: string | null
    updated_at: string | null
    created_at: string | null
    fork: boolean
    archived: boolean
}

export async function fetchGithubProjects(): Promise<ProjectProps[]> {
    try {
        const response = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
            {
                headers: {
                    Accept: 'application/vnd.github+json'
                },
                next: { revalidate: 3600 } // Cache for 1 hour
            }
        )

        if (!response.ok) {
            throw new Error('Failed to fetch GitHub repositories')
        }

        const repos = (await response.json()) as GithubRepo[]

        return repos
            .filter((repo) => !repo.fork && !repo.archived) // Filter out forks and archived repos
            .map((repo) => {
                const tags: TagsProps[] = []

                // Add primary language
                if (repo.language) {
                    const mappedTag = LANGUAGE_MAP[repo.language]
                    if (mappedTag) {
                        tags.push(mappedTag)
                    } else {
                        tags.push({ name: repo.language, icon: GithubIcon })
                    }
                }

                // Add topics as tags
                if (repo.topics) {
                    repo.topics.forEach((topic: string) => {
                        const normalizedTopic = topic.charAt(0).toUpperCase() + topic.slice(1)
                        // Try to match topics too
                        const mappedTopic = LANGUAGE_MAP[normalizedTopic]
                        if (mappedTopic) {
                            if (!tags.find(t => t.name === mappedTopic.name)) {
                                tags.push(mappedTopic)
                            }
                        } else {
                            if (!tags.find(t => t.name === normalizedTopic)) {
                                tags.push({ name: normalizedTopic, icon: GithubIcon })
                            }
                        }
                    })
                }

                return {
                    title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
                    description: repo.description || 'No description available.',
                    tags: tags.slice(0, 5), // Limit tags
                    link: {
                        github: repo.html_url,
                        preview: repo.homepage || undefined
                    },
                    lastUpdated:
                        repo.pushed_at ?? repo.updated_at ?? repo.created_at ?? undefined
                }
            })
    } catch (error) {
        console.error('Error fetching GitHub projects:', error)
        return []
    }
}
