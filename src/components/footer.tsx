'use client'

import { Link } from 'next-view-transitions'
import { navLinks } from '@/constants'
import { ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full px-4 py-8 md:py-12"
    >
      <div className="container mx-auto max-w-7xl bg-white/80 dark:bg-black/40 backdrop-blur-xl border border-border/50 shadow-lg rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-300 hover:shadow-xl hover:bg-white/90 dark:hover:bg-black/50">
        {/* Left Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center md:text-left text-sm font-medium"
        >
          <p className="text-neutral-700 dark:text-neutral-300">
            © {year}
            <span className="mx-2 text-primary/50">•</span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent font-semibold hover:opacity-80 transition-all duration-300"
            >
             A L A I N  K W I S H I M A
            </a>
            <span className="mx-2 text-primary/50">—</span>
            <span className="text-neutral-600 dark:text-neutral-400">All rights reserved.</span>
          </p>
        </motion.div>

        {/* Center Section: Navigation Links */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm"
        >
          {navLinks.map((link, index) => (
            <div key={link.label} className="flex items-center">
              <Link
                href={link.url}
                aria-label={link.label}
                className="text-neutral-600 dark:text-neutral-300 hover:text-primary transition-all duration-300 hover:scale-105"
              >
                {link.title}
              </Link>
              {index < navLinks.length - 1 && (
                <span className="mx-2 text-primary/30">•</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Right Section: Scroll to Top */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
        >
          <ArrowUp className="w-4 h-4" />
          <span className="text-sm font-medium">Back to top</span>
        </motion.button>
      </div>
    </motion.footer>
  )
}
