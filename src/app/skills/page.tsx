import { Section } from '@/components/ui/section'
import { Skills } from '@/components/skills'

export default function SkillsPage() {
    return (
        <div className="flex flex-col flex-1 items-center px-4">
            <Section id="skills" className="pb-24 w-full max-w-5xl">
                <Skills />
            </Section>
        </div>
    )
}
