'use client'

import { motion } from 'framer-motion'
import { data } from '@/constants'
import { Badge } from './ui/badge'
import { TypeAnimation } from 'react-type-animation'
import { SparklesIcon } from 'lucide-react'

export function Skills() {
    const { tags } = data

    // Manually group the exhaustive list of tags for better UI
    const categorizedSkills = [
        {
            category: 'Languages',
            skills: [tags.TYPESCRIPT, tags.JAVASCRIPT, tags.PYTHON, tags.PHP, tags.SQL, tags.BASH]
        },
        {
            category: 'Frontend Architecture',
            skills: [tags.NEXTJS, tags.REACT, tags.VUE, tags.NUXT, tags.HTML5, tags.CSS3, tags.TAILWIND, tags.SHADCN]
        },
        {
            category: 'Backend & APIs',
            skills: [tags.NODEJS, tags.EXPRESS, tags.NESTJS, tags.LARAVEL, tags.REST_API, tags.TRPC]
        },
        {
            category: 'Infrastructure & DevOps',
            skills: [tags.DOCKER, tags.KUBERNETES, tags.GITHUB_ACTIONS, tags.JENKINS, tags.ANSIBLE, tags.TERRAFORM, tags.LINUX, tags.GIT, tags.VERCEL, tags.NGINX]
        },
        {
            category: 'Databases & Auth',
            skills: [tags.POSTGRESQL, tags.MYSQL, tags.SQLITE, tags.MONGODB, tags.REDIS, tags.JWT, tags.OAUTH2]
        },
        {
            category: 'Quality Assurance',
            skills: [tags.JEST, tags.VITEST, tags.CYPRESS, tags.PLAYWRIGHT]
        },
        {
            category: 'AI & IoT',
            skills: [tags.NUMPY, tags.PANDAS, tags.SCIKIT_LEARN, tags.TENSORFLOW, tags.ARDUINO, tags.ESP32]
        },
        {
            category: 'Soft Power',
            skills: [tags.COMMUNICATION, tags.TEAMWORK, tags.LEADERSHIP, tags.PROBLEM_SOLVING, tags.DOCUMENTATION]
        }
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <div className="space-y-24">
            {/* Skills Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative w-full space-y-12"
            >
                <div className="flex items-center gap-x-4 justify-center md:justify-start">
                    <SparklesIcon className="size-8 animate-pulse text-primary" />
                    <TypeAnimation
                        sequence={['Elite Stack', 5000, 'Technical Arsenal', 5000]}
                        wrapper="h2"
                        cursor={true}
                        repeat={Infinity}
                        className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                    />
                </div>

                <div className="grid grid-cols-1 gap-10">
                    {categorizedSkills.map((category, catIndex) => (
                        <motion.div
                            key={category.category}
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/60 px-1 border-l-2 border-primary/30 ml-1">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={item}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="group"
                                    >
                                        <Badge
                                            variant="secondary"
                                            className="px-5 py-3 text-sm md:text-base flex items-center gap-3 bg-white/5 dark:bg-neutral-900 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all rounded-2xl shadow-sm"
                                        >
                                            {skill.icon && <skill.icon className="size-5 text-primary/80 group-hover:text-primary transition-colors" />}
                                            <span className="font-bold text-foreground/70 group-hover:text-foreground transition-colors">
                                                {skill.name}
                                            </span>
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    )
}
