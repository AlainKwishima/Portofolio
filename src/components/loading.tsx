'use client'

import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

export function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center space-y-4"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Loader2 className="h-8 w-8 text-primary mx-auto" />
        </motion.div>
        <p className="text-sm text-muted-foreground">Loading...</p>
      </motion.div>
    </div>
  )
}

export function LoadingSpinner({ size = "default" }: { size?: "sm" | "default" | "lg" }) {
  const sizeClasses = {
    sm: "h-4 w-4",
    default: "h-6 w-6", 
    lg: "h-8 w-8"
  }

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="flex items-center justify-center"
    >
      <Loader2 className={`${sizeClasses[size]} text-primary`} />
    </motion.div>
  )
}
