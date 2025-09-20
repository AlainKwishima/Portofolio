'use client'

import { CareerItem } from './career-item'
import { FileTextIcon } from 'lucide-react'
import { data } from '@/constants'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export function Career() {
  const { career } = data

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className='relative w-full py-12 px-2 md:px-0 space-y-12 overflow-hidden'
    >

      {/* Header animation with typing effect */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='flex gap-x-4 items-center justify-center md:justify-start mb-6'
      >
        <FileTextIcon className='size-7 animate-pulse stroke-[1.5] text-primary' />
        <TypeAnimation
          sequence={['Professional Journey', 5000, '']}
          speed={50}
          repeat={Infinity}
          cursor={true}
          wrapper='h2'
          className='text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent drop-shadow'
        />
      </motion.div>

      <ol className='ml-[11.5px] flex flex-col gap-y-12'>
        {career.map((item, index) => (
          <motion.li
            key={index}
            className='ms-[30px]'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <CareerItem {...item} />
          </motion.li>
        ))}
      </ol>
    </motion.section>
  )
}
