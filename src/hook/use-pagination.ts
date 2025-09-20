import { useState, useMemo, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import type { ProjectProps } from '@/types'

export function usePagination({ projects }: { projects: ProjectProps[] }) {
  const searchParams = useSearchParams()
  const [page, setPage] = useState<number>(
    Number(searchParams.get('page') ?? 1)
  )

  const limit = 10
  
  // Memoize expensive calculations
  const { totalPages, currentProjects } = useMemo(() => {
    const totalPages = Math.ceil(projects.length / limit)
    const offset = (page - 1) * limit
    const currentProjects = projects.slice(offset, offset + limit)
    
    return { totalPages, currentProjects }
  }, [projects, page, limit])

  // Memoize the update function
  const updatePage = useCallback((newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setPage(newPage)
    }
  }, [totalPages])

  return { currentProjects, page, totalPages, updatePage }
}
