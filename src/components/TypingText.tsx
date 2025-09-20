// components/TypingText.tsx
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TypingTextProps {
  text: string
  speed?: number
  className?: string
}

export const TypingText = ({ text, speed = 80, className = '' }: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, currentIndex + 1))
      currentIndex++
      if (currentIndex === text.length) clearInterval(interval)
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <h1
      className={`inline-flex items-center gap-1 font-bold text-3xl md:text-4xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent tracking-tight ${className}`}
    >
      <AnimatePresence initial={false}>
        {displayedText.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03, duration: 0.2 }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
      <motion.span
        className="ml-0.5 animate-blink bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent drop-shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
      >
        |
      </motion.span>
    </h1>
  )
}
