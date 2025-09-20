import { Suspense } from 'react'
import { Section } from '@/components/ui/section'
import { Loader } from '@/components/ui/loader'
import { Projects } from '@/components/projects'

export default function ProjectsPage() {
  return (
    <div className='flex flex-col flex-1 w-full items-center'>
      <Section id='projects' className='pb-24 w-full px-4 md:px-0'>
        <Suspense fallback={<Loader />}>
          <Projects />
        </Suspense>
      </Section>
    </div>
  )
}
