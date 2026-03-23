import { Section } from '@/components/ui/section'
import { Blog } from '@/components/blog'

export default function BlogPage() {
    return (
        <div className="flex flex-col flex-1 items-center px-4">
            <Section id="blog" className="pb-24 w-full max-w-5xl">
                <Blog />
            </Section>
        </div>
    )
}
