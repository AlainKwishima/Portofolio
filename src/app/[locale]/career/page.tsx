import { Section } from '@/components/ui/section'
import { Career } from '@/components/career'

export default function CareerPage() {
  return (
    <div className='flex flex-col flex-1 items-center px-4'>
      <Section id='career' className='pb-24 w-full max-w-5xl'>
        <Career />
      </Section>
    </div>
  )
}
