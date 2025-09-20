'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ArrowRightIcon } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import { type CareerProps } from '@/types'

export function CareerItem({ link, company, jobs, badges }: CareerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative ps-8 border-s-2 border-border pb-12 last:pb-0 group"
    >
      {/* Animated Timeline Dot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="absolute size-4 rounded-full bg-gradient-to-tr from-primary to-primary/70 shadow-lg ring-4 ring-primary/20 mt-[10px] -start-[10px] border-2 border-white dark:border-neutral-950 group-hover:ring-8 group-hover:ring-primary/30 transition-all duration-300"
      />

      {/* Glassy Card Effect */}
      <div className="bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl rounded-2xl shadow-lg border border-border/40 px-6 py-6">
        {/* Company Name & Badge */}
        <div className="flex gap-x-3 mb-4 items-center">
          <motion.h3
            className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent drop-shadow"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {company}
          </motion.h3>
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <Badge
              variant="secondary"
              className="rounded-full shadow bg-primary/10 text-primary font-semibold px-3 py-1 text-xs border border-primary/20 backdrop-blur"
            >
              {badges}
            </Badge>
          </motion.div>
        </div>

        {/* Job Roles */}
        {jobs.map((job, index) => (
          <div key={index} className="mb-5">
            <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <TypeAnimation
                sequence={[job.title, 5000, '']}
                speed={40}
                repeat={Infinity}
                cursor={true}
                wrapper="span"
              />
            </h4>
            <time className="text-xs font-mono leading-none text-primary/80 block mb-1 mt-0.5">
              {job.start} — {job.end}
            </time>
            <ul className="mt-1 text-sm font-mono text-neutral-700 dark:text-neutral-300 space-y-1 pl-4 list-disc">
              {job.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Optional External Link */}
        {link && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="inline-block mt-2"
          >
            <Button
              variant="default"
              size={null}
              className="group shadow-md px-5 py-2 rounded-full bg-primary text-white dark:text-black hover:bg-primary/90 dark:hover:bg-primary/80 font-semibold flex items-center gap-2 transition-all duration-300"
              asChild
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <span>View more</span>
                <motion.span
                  className="ms-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <ArrowRightIcon className="size-4" />
                </motion.span>
              </a>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
