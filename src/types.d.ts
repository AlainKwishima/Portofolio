export interface AvatarProps {
  name: string
  initials: string
}

export interface AboutProps {
  title: string
  description: string
}

export interface LinksProps {
  title: string
  url: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export interface ContactEmailTemplateProps {
  firstName: string
  lastName: string
  email: string
  message: string
}

export interface JobsProps {
  title: string
  start: string
  end: string
  description: string[]
}

export interface CareerProps {
  slug?: string
  company: string
  link?: string
  badges: string[]
  jobs: JobsProps[]
}

export interface TagsProps {
  name: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export interface ProjectLinkProps {
  github?: string
  preview?: string
}

export interface ProjectProps {
  slug?: string
  title: string
  tags: TagsProps[]
  description: string
  link: ProjectLinkProps
  image?: string
  video?: string
  lastUpdated?: string
}

export interface BlogPost {
  slug?: string
  title: string
  date: string
  category: string
  description: string
  readTime: string
  content: string[]
}
