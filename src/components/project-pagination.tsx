'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export function ProjectPagination({
  page,
  totalPages,
  updatePage,
}: {
  page: number
  totalPages: number
  updatePage: (page: number) => void
}) {
  const isFirst = page === 1
  const isLast = page === totalPages

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <Pagination>
        <PaginationContent className='flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl rounded-xl py-3 px-4 shadow-md border border-border/40'>
          {/* Previous Button */}
          <PaginationItem>
            <PaginationPrevious
              className={clsx(
                'transition-all duration-200 hover:scale-105 rounded-full bg-transparent border-none shadow-none text-primary/80 hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary',
                isFirst ? 'pointer-events-none opacity-50' : ''
              )}
              isActive={!isFirst}
              onClick={() => {
                if (!isFirst) updatePage(page - 1)
              }}
              href={!isFirst ? `?page=${page - 1}` : '#'}
              tabIndex={isFirst ? -1 : 0}
              aria-disabled={isFirst}
              aria-label='Previous Page'
            />
          </PaginationItem>

          {/* Page Numbers */}
          {pageNumbers.map((num) => (
            <PaginationItem key={num}>
              <button
                onClick={() => updatePage(num)}
                className={clsx(
                  'px-4 py-2 rounded-full text-sm font-mono transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary outline-none',
                  num === page
                    ? 'bg-primary text-white dark:text-black shadow-lg scale-105 font-bold border border-primary'
                    : 'bg-transparent text-primary/80 hover:bg-primary/10 hover:text-primary border border-primary/20'
                )}
                aria-current={num === page ? 'page' : undefined}
              >
                {num}
              </button>
            </PaginationItem>
          ))}

          {/* Next Button */}
          <PaginationItem>
            <PaginationNext
              className={clsx(
                'transition-all duration-200 hover:scale-105 rounded-full bg-transparent border-none shadow-none text-primary/80 hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary',
                isLast ? 'pointer-events-none opacity-50' : ''
              )}
              isActive={!isLast}
              onClick={() => {
                if (!isLast) updatePage(page + 1)
              }}
              href={!isLast ? `?page=${page + 1}` : '#'}
              tabIndex={isLast ? -1 : 0}
              aria-disabled={isLast}
              aria-label='Next Page'
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </motion.div>
  )
}
