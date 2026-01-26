import { AVATAR, ABOUT, LINKS, CAREER, PROJECTS, BLOG_POSTS, CERTIFICATIONS, TAGS } from '@/data'
import type {
  AvatarProps,
  AboutProps,
  LinksProps,
  CareerProps,
  ProjectProps
} from '@/types'

export const data = {
  avatar: AVATAR as AvatarProps,
  about: ABOUT as AboutProps,
  links: LINKS as LinksProps[],
  career: CAREER as CareerProps[],
  projects: PROJECTS as ProjectProps[],
  blog: BLOG_POSTS,
  certifications: CERTIFICATIONS,
  tags: TAGS
}

export const navLinks = [
  { title: 'About', label: 'about', url: '/' },
  { title: 'Skills', label: 'skills', url: '/skills' },
  { title: 'Career', label: 'career', url: '/career' },
  { title: 'Projects', label: 'projects', url: '/projects' },
  { title: 'Blog', label: 'blog', url: '/blog' },
  { title: 'Contact', label: 'contact', url: '/contact' }
]
