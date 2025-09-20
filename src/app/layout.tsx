'use client'

import type React from 'react'
import { ViewTransitions } from 'next-view-transitions'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Head } from '@/components/head'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner'
import { Toaster as ToasterProvider } from '@/components/ui/toaster'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { cn } from '@/lib/utils'
import './globals.css'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const metadata = {
  title: 'Portfolio | HARSHHAA',
  description: 'My Personal Portfolio - Showcasing my Work and Skills.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <html
      lang='en'
      className={cn(
        'min-h-screen bg-background font-sans antialiased overflow-y-scroll',
        GeistSans.variable,
        GeistMono.variable
      )}
      suppressHydrationWarning
    >
      <Head metadata={metadata} />
      <body className='w-full'>
        <ViewTransitions>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
          >
            <TooltipProvider>
              <Header />
              <AnimatePresence mode='wait'>
                {mounted && (
                  <motion.main
                    key={pathname}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 sm:px-6 lg:px-8 pt-[200px] md:pt-[130px] pb-8 isolate overflow-hidden
                               before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
                               before:from-purple-400/30 before:via-violet-400/10 before:to-transparent before:blur-3xl"
                  >
                    {children}
                    <Footer />
                  </motion.main>
                )}
              </AnimatePresence>
            </TooltipProvider>
            <Toaster />
            <ToasterProvider />
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </ViewTransitions>
      </body>
    </html>
  )
}
