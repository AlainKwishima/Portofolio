'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { data } from '@/constants'
import { Badge } from './ui/badge'
import { CalendarIcon, ClockIcon, ArrowRightIcon, XIcon, UserIcon } from 'lucide-react'
import { Button } from './ui/button'
import type { BlogPost } from '@/types'

export function Blog() {
    const { blog } = data
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl mx-auto space-y-12"
        >
            <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Intelligence Log
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Deep dives into modern software architecture, AI agents, and high-fidelity product design.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blog.map((post, index) => (
                    <motion.div
                        key={post.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -5 }}
                        className="group relative flex flex-col p-6 rounded-[2rem] bg-white/5 dark:bg-black/20 border border-border/40 backdrop-blur-xl shadow-xl hover:shadow-primary/5 transition-all"
                    >
                        {/* Category / Badge */}
                        <div className="flex items-center justify-between mb-6">
                            <Badge variant="secondary" className="rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary border-primary/20">
                                {post.category}
                            </Badge>
                            <div className="flex items-center gap-2 text-muted-foreground/60 text-xs font-mono">
                                <ClockIcon className="size-3" />
                                {post.readTime}
                            </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                            {post.title}
                        </h2>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                            {post.description}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-6 border-t border-border/20">
                            <div className="flex items-center gap-2 text-muted-foreground/60 text-xs font-medium">
                                <CalendarIcon className="size-3" />
                                {post.date}
                            </div>
                            <Button
                                variant="link"
                                size="sm"
                                className="p-0 h-auto group/btn text-primary/80 hover:text-primary font-bold"
                                onClick={() => setSelectedPost(post)}
                            >
                                Read Abstract <ArrowRightIcon className="ml-2 size-3.5 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </motion.div>
                ))}
            </div>

            {/* Newsletter / CTA */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="p-10 rounded-[2.5rem] bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 backdrop-blur-md text-center space-y-6 mt-16"
            >
                <h3 className="text-2xl font-bold">Want more insights?</h3>
                <p className="text-muted-foreground max-w-md mx-auto italic">"The best way to predict the future is to automate it."</p>
                <Button
                    variant="default"
                    className="rounded-2xl px-10 py-6 text-base font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform active:scale-95"
                    asChild
                >
                    <a href="https://x.com/AlainKwishima" target="_blank" rel="noopener noreferrer">
                        Follow for Updates
                    </a>
                </Button>
            </motion.div>

            {/* Full Article Modal */}
            <AnimatePresence>
                {selectedPost && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedPost(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        />
                        <motion.div
                            layoutId={selectedPost.title}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white dark:bg-neutral-950 border border-border/50 rounded-[2.5rem] shadow-2xl no-scrollbar"
                        >
                            <div className="sticky top-0 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md p-6 flex items-center justify-between border-b border-border/20 z-20">
                                <Badge variant="outline" className="rounded-full px-4 text-xs font-bold uppercase tracking-wider text-primary border-primary/30">
                                    {selectedPost.category}
                                </Badge>
                                <button
                                    onClick={() => setSelectedPost(null)}
                                    className="p-2 hover:bg-muted rounded-full transition-colors"
                                >
                                    <XIcon className="size-5 text-muted-foreground" />
                                </button>
                            </div>

                            <div className="p-8 sm:p-12 space-y-8">
                                <div className="space-y-4">
                                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.1]">
                                        {selectedPost.title}
                                    </h2>
                                    <div className="flex items-center gap-6 text-muted-foreground font-mono text-[10px] uppercase tracking-widest pt-2">
                                        <span className="flex items-center gap-2"><CalendarIcon className="size-3" /> {selectedPost.date}</span>
                                        <span className="flex items-center gap-2"><ClockIcon className="size-3" /> {selectedPost.readTime}</span>
                                        <span className="flex items-center gap-2"><UserIcon className="size-3" /> Alain Kwishima</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {selectedPost.content.map((paragraph, i) => (
                                        <p key={i} className="text-lg leading-relaxed text-foreground/80 first-letter:text-4xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                <div className="pt-10 border-t border-border/20 text-center">
                                    <p className="text-sm text-muted-foreground mb-6">Found this insightful? Share your thoughts on X.</p>
                                    <Button variant="outline" className="rounded-xl px-8" asChild>
                                        <a href="https://x.com/AlainKwishima" target="_blank" rel="noopener noreferrer">
                                            Discuss on X
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </motion.section>
    )
}
