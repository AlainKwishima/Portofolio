import { GitHubIcon } from '@/components/icons/github'
import { XIcon } from '@/components/icons/x'
import { InstagramIcon } from '@/components/icons/instagram'
import { WhatsAppIcon } from '@/components/icons/whatsapp'
import { GitHubActionsIcon } from '@/components/icons/tags/githubActions'
import { ZomatoIcon } from '@/components/icons/tags/zomato'
import { UberIcon } from '@/components/icons/tags/uber'
import { PrometheusIcon } from '@/components/icons/tags/prometheus'
import { AWSEKSIcon } from '@/components/icons/tags/awsEKS'
import { LinuxIcon } from '@/components/icons/tags/linux'
import { JenkinsIcon } from '@/components/icons/tags/jenkins'
import { KubernetesIcon } from '@/components/icons/tags/kubernetes'
import { DockerIcon } from '@/components/icons/tags/docker'
import { AzureIcon } from '@/components/icons/tags/azure'
import { AWSIcon } from '@/components/icons/tags/aws'
import { TerraformIcon } from '@/components/icons/tags/terraform'
import { AnsibleIcon } from '@/components/icons/tags/ansible'
import { AzureDevOpsIcon } from '@/components/icons/tags/azureDevOps'
import { DevOpsIcon } from '@/components/icons/tags/devops'
import { TypeScriptIcon } from '@/components/icons/tags/typescript'
import { CSSIcon } from '@/components/icons/tags/css'
import { JavaScriptIcon } from '@/components/icons/tags/javascript'
import { NodeJSIcon } from '@/components/icons/tags/nodejs'
import { NextJSIcon } from '@/components/icons/tags/nextjs'
import { TailwindCSSIcon } from '@/components/icons/tags/tailwind-css'
import { MailIcon } from 'lucide-react'

export const AVATAR = {
  name: 'ALAIN',
  initials: 'HR'
}

export const ABOUT = {
  title: `Full-Stack Developer & DevOps Engineer | Building Scalable Solutions That Drive Business Growth`,
  description: `I design and build robust web applications, mobile solutions, and intelligent systems that solve real-world problems. With expertise spanning frontend development, backend architecture, mobile app creation, AI integration, and cloud infrastructure, I deliver end-to-end solutions that scale. I specialize in modern web technologies, cross-platform mobile development, machine learning applications, and automated DevOps pipelines. My passion lies in creating efficient, maintainable code and implementing cutting-edge technologies that enhance user experiences and business outcomes.`
}

export const LINKS = [
  {
    title: 'GitHub',
    url: 'https://github.com/AlainKwishima',
    icon: GitHubIcon
  },
  {
    title: 'X (Twitter)',
    url: 'https://x.com/AlainKwishima',
    icon: XIcon
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/pro.devguy/',
    icon: InstagramIcon
  },
  {
    title: 'WhatsApp',
    url: 'https://wa.me/0795437012',
    icon: WhatsAppIcon
  },
  {
    title: 'Email',
    url: 'mailto:alainkwishima@gmail.com',
    icon: MailIcon
  }
]

export const CAREER = [
  {
    company: 'Independent Developer / Freelancer',
    link: 'https://github.com/AlainKwishima',
    badges: ['Remote', 'Freelance'],
    jobs: [
      {
        title: 'Full-Stack Developer & Technical Consultant',
        start: 'Jan, 2023',
        end: 'Present',
        description: [
          'Delivered end-to-end solutions for diverse clients across web development, mobile applications, and AI integration projects.',
          'Built scalable web applications using modern frameworks including Next.js, React, and Node.js with TypeScript.',
          'Developed mobile applications and backend APIs, implementing secure authentication and robust data validation.',
          'Created AI-powered platforms and automation tools, helping businesses streamline operations and improve efficiency.',
          'Contributed to open-source projects and maintained active GitHub presence with 50+ repositories and 1000+ contributions.'
        ]
      }
    ]
  },
  {
    company: 'TechFlow Solutions',
    link: 'https://techflow-solutions.com',
    badges: ['Remote'],
    jobs: [
      {
        title: 'Frontend Lead Engineer',
        start: 'Jun, 2022',
        end: 'Dec, 2022',
        description: [
          'Led frontend development efforts for a fast-growing startup, building responsive and performant user interfaces.',
          'Architected and implemented reusable UI component libraries using TypeScript and modern CSS frameworks.',
          'Optimized application performance, achieving 40% faster load times and improved user experience metrics.',
          'Collaborated closely with backend and product teams to deliver seamless full-stack solutions.',
          'Mentored junior developers and established coding standards and best practices for the engineering team.'
        ]
      }
    ]
  },
  {
    company: 'AC Group',
    link: 'https://acgroup.com',
    badges: ['On-Site'],
    jobs: [
      {
        title: 'Software Development Intern',
        start: 'Jan, 2022',
        end: 'May, 2022',
        description: [
          'Gained hands-on experience with real-world software development challenges and industry best practices.',
          'Worked on multiple projects spanning web development, database design, and API integration.',
          'Built strong fundamentals in software engineering, version control, and collaborative development workflows.',
          'Participated in code reviews, testing procedures, and agile development methodologies.',
          'Developed problem-solving skills and learned to work effectively in a professional development environment.'
        ]
      }
    ]
  },
  {
    company: 'JNTUH',
    link: 'https://jntuh.ac.in',
    badges: ['OnCampus'],
    jobs: [
      {
        title: 'Bachelor of Technology in Computer Science',
        start: 'Jul, 2018',
        end: 'Jun, 2022',
        description: [
          'Graduated with distinction, specializing in software engineering and computer science fundamentals.',
          'Completed advanced coursework in algorithms, data structures, web development, and mobile application design.',
          'Led multiple technical projects and hackathons, demonstrating strong problem-solving and leadership skills.',
          'Developed expertise in multiple programming languages and modern development frameworks.'
        ]
      }
    ]
  }
];

const TAGS = {
  GITHUB: {
    name: 'GitHub',
    icon: GitHubIcon
  },
  GITHUB_ACTIONS: {
    name: 'GitHub Actions',
    icon: GitHubActionsIcon
  },
  ZOMATO: {
    name: 'Zomato',
    icon: ZomatoIcon
  },
  UBER: {
    name: 'Uber',
    icon: UberIcon
  },
  PROMETHEUS: {
    name: 'Prometheus',
    icon: PrometheusIcon
  },
  AWS_EKS: {
    name: 'AWS EKS',
    icon: AWSEKSIcon
  },
  LINUX: {
    name: 'Linux',
    icon: LinuxIcon
  },
  JENKINS: {
    name: 'Jenkins',
    icon: JenkinsIcon
  },
  KUBERNETES: {
    name: 'Kubernetes',
    icon: KubernetesIcon
  },
  DOCKER: {
    name: 'Docker',
    icon: DockerIcon
  },
  AZURE: {
    name: 'Azure',
    icon: AzureIcon
  },
  AWS: {
    name: 'AWS',
    icon: AWSIcon
  },
  TERRAFORM: {
    name: 'Terraform',
    icon: TerraformIcon
  },
  ANSIBLE: {
    name: 'Ansible',
    icon: AnsibleIcon
  },
  AZURE_DEVOPS: {
    name: 'Azure DevOps',
    icon: AzureDevOpsIcon
  },
  DEVOPS: {
    name: 'DevOps',
    icon: DevOpsIcon
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    icon: TypeScriptIcon
  },
  CSS: {
    name: 'CSS',
    icon: CSSIcon
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    icon: JavaScriptIcon
  },
  NODEJS: {
    name: 'Node.js',
    icon: NodeJSIcon
  },
  EXPRESS: {
    name: 'Express',
    icon: NodeJSIcon
  },
  MONGODB: {
    name: 'MongoDB',
    icon: NodeJSIcon
  },
  JWT: {
    name: 'JWT',
    icon: NodeJSIcon
  },
  JOI: {
    name: 'Joi',
    icon: NodeJSIcon
  },
  MORGAN: {
    name: 'Morgan',
    icon: NodeJSIcon
  },
  HELMET: {
    name: 'Helmet',
    icon: NodeJSIcon
  },
  DOTENV: {
    name: 'Dotenv',
    icon: NodeJSIcon
  },
  NEXTJS: {
    name: 'Next.js',
    icon: NextJSIcon
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    icon: TailwindCSSIcon
  },
  PRISMA: {
    name: 'Prisma',
    icon: NodeJSIcon
  }
}

export const PROJECTS = [
  {
    title: 'SecureTrade',
    tags: [TAGS.TYPESCRIPT, TAGS.CSS, TAGS.JAVASCRIPT],
    description: 'A secure, modern web application for trading digital assets with a focus on privacy, speed, and reliability. Features real-time market data, secure authentication, and intuitive user interface designed for both beginners and experienced traders.',
    link: {
      github: 'https://github.com/AlainKwishima/SecureTrade',
      preview: 'https://secure-trade.vercel.app'
    },
  },
  {
    title: 'Tactical Command Hub',
    tags: [TAGS.TYPESCRIPT, TAGS.CSS, TAGS.JAVASCRIPT],
    description: 'A next-generation web platform designed as a centralized mission control system for coordinating operations, managing resources, and monitoring intelligence workflows in real-time. Built with modern web technologies for high-performance data visualization and management.',
    link: {
      github: 'https://github.com/AlainKwishima/Tactical-Command-Hub',
    },
  },
  {
    title: 'AI & Automation Hub',
    tags: [TAGS.TYPESCRIPT, TAGS.CSS, TAGS.JAVASCRIPT],
    description: 'A comprehensive platform for discovering AI tools, mastering automation, and joining a community of AI builders. Helps create intelligent workflows, encourages hands-on learning, and supports both no-code and advanced AI development with interactive tutorials and real-world examples.',
    link: {
      github: 'https://github.com/AlainKwishima/ai-automation-hub',
      preview: 'https://ai-automation-hub.vercel.app'
    },
  },
  {
    title: 'Dovio-Backend',
    tags: [TAGS.NODEJS, TAGS.JAVASCRIPT, TAGS.EXPRESS, TAGS.MONGODB, TAGS.JWT, TAGS.JOI, TAGS.MORGAN, TAGS.HELMET, TAGS.DOTENV],
    description: 'Robust backend API for the Durkheim mobile application built with Node.js and Express. Features secure JWT authentication, comprehensive data validation with Joi, security middleware with Helmet, request logging with Morgan, and environment configuration management.',
    link: {
      github: 'https://github.com/AlainKwishima/Dovio-Backend',
    },
  },
  {
    title: 'JobsPortal.Tech',
    tags: [TAGS.TYPESCRIPT, TAGS.NEXTJS, TAGS.TAILWIND, TAGS.PRISMA, TAGS.CSS, TAGS.JAVASCRIPT],
    description: 'A modern, responsive job board built with Next.js focusing on DevOps, SRE, and Cloud roles. Features smart filtering, user authentication, elegant UI design with Tailwind CSS, and robust database management with Prisma ORM for seamless job search and application experience.',
    link: {
      github: 'https://github.com/NotHarshha/JobsPortal.Tech',
      preview: 'https://jobsportal.tech'
    },
  }
];
