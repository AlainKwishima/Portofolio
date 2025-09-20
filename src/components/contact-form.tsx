'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Loader2 } from 'lucide-react'

export function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showErrors, setShowErrors] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setShowErrors(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { firstName, email, message } = form

    if (!firstName || !email || !message) {
      setShowErrors(true)
      toast.error('Please fill in all required fields.')
      return
    }

    try {
      setIsSubmitting(true)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast.success('Message sent successfully!')
      setForm({ firstName: '', lastName: '', email: '', message: '' })
    } catch (error) {
      toast.error('Something went wrong. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputStyles = `w-full px-4 py-3 border border-neutral-200 dark:border-neutral-800 
    rounded-xl bg-white/50 dark:bg-neutral-900/50 text-black dark:text-white 
    placeholder:text-neutral-400 dark:placeholder:text-neutral-500 
    transition-all duration-300 ease-in-out
    focus:ring-2 focus:ring-primary/50 focus:border-primary
    hover:border-primary/50 focus:outline-none
    backdrop-blur-sm`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl mx-auto"
    >
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white/80 dark:bg-black/40 backdrop-blur-xl border border-border/50 rounded-2xl shadow-lg p-8 space-y-6 transition-all duration-300 hover:shadow-xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
            Get in Touch
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Please fill out the form below and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
              First Name<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Your first name"
              className={inputStyles}
            />
            <AnimatePresence>
              {showErrors && !form.firstName && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-sm text-red-500 mt-1.5"
                >
                  First name is required
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Your last name"
              className={inputStyles}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
            Email<span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputStyles}
          />
          <AnimatePresence>
            {showErrors && !form.email && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-sm text-red-500 mt-1.5"
              >
                Email is required
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
            Message<span className="text-red-500 ml-1">*</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your message here..."
            rows={4}
            className={inputStyles}
          />
          <AnimatePresence>
            {showErrors && !form.message && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-sm text-red-500 mt-1.5"
              >
                Message is required
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2
            ${isSubmitting
              ? 'bg-neutral-200 dark:bg-neutral-800 cursor-not-allowed text-neutral-500 dark:text-neutral-400'
              : 'bg-primary text-white dark:text-black hover:bg-primary/90 shadow-lg hover:shadow-primary/25 dark:hover:bg-primary/80'
            }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  )
}
