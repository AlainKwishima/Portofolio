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
import { ReactIcon } from '@/components/icons/tags/react'
import { ShadcnIcon } from '@/components/icons/tags/shadcn-ui'
import { VercelIcon } from '@/components/icons/tags/vercel'
import { VitestIcon } from '@/components/icons/tags/vitest'
import { PythonIcon } from '@/components/icons/tags/python'
import { PHPIcon } from '@/components/icons/tags/php'
import { VueIcon } from '@/components/icons/tags/vue'
import { LaravelIcon } from '@/components/icons/tags/laravel'
import { PostgreSqlIcon } from '@/components/icons/tags/postgresql'
import { MySqlIcon } from '@/components/icons/tags/mysql'
import { MongoDbIcon } from '@/components/icons/tags/mongodb'
import { RedisIcon } from '@/components/icons/tags/redis'
import { JwtIcon } from '@/components/icons/tags/jwt'
import { NestJsIcon } from '@/components/icons/tags/nest-js'
import { NumpyIcon } from '@/components/icons/tags/numpy'
import { PandasIcon } from '@/components/icons/tags/pandas'
import { ScikitLearnIcon } from '@/components/icons/tags/scikit-learn'
import { TensorFlowIcon } from '@/components/icons/tags/tensorflow'
import { ArduinoIcon } from '@/components/icons/tags/arduino'
import { Esp32Icon } from '@/components/icons/tags/esp32'
import { MailIcon, FileText, LayoutIcon, NetworkIcon, BrainIcon, Code2Icon, FlaskConicalIcon, UserCheckIcon, UsersIcon, TrophyIcon, HelpCircleIcon } from 'lucide-react'

const AVATAR = {
  name: 'ALAIN',
  initials: 'HR'
}

const ABOUT = {
  title: `Full-Stack Developer & DevOps Engineer | Building Scalable Solutions That Drive Business Growth`,
  description: `I design and build robust web applications, mobile solutions, and intelligent systems that solve real-world problems. With expertise spanning frontend development, backend architecture, mobile app creation, AI integration, and cloud infrastructure, I deliver end-to-end solutions that scale. I specialize in modern web technologies, cross-platform mobile development, machine learning applications, and automated DevOps pipelines. My passion lies in creating efficient, maintainable code and implementing cutting-edge technologies that enhance user experiences and business outcomes.`
}

const LINKS = [
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
  }
]

const CAREER = [
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
    company: 'Empirical Tours&Travel',
    link: 'https://empiricaltour.com',
    badges: ['Remote'],
    jobs: [
      {
        title: 'Frontend Lead Engineer',
        start: 'Jun, 2022',
        end: 'Present',
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
        start: 'Jan, 2024',
        end: 'May, 2025',
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
    company: 'Rwanda Coding Academy (RCA)',
    link: 'https://rca.ac.rw/',
    badges: ['On-Site', 'Elite'],
    jobs: [
      {
        title: 'Software Engineering Candidate',
        start: 'Sep, 2023',
        end: 'Jul, 2026',
        description: [
          'Selected among the top 1% of students nationwide for an elite, specialized software engineering program initiated by the Government of Rwanda.',
          'Intensive focus on modern software development stacks, including full-stack web development, DevOps automation, and embedded systems.',
          'Built production-grade applications as part of the curriculum, mastering collaborative development via Git and Agile methodologies.',
          'Strong emphasis on problem-solving, algorithms, and cybersecurity fundamentals in a project-based learning environment.'
        ]
      }
    ]
  }
];

const TAGS = {
  // Languages
  JAVASCRIPT: { name: 'JavaScript', icon: JavaScriptIcon },
  TYPESCRIPT: { name: 'TypeScript', icon: TypeScriptIcon },
  PYTHON: { name: 'Python', icon: PythonIcon },
  PHP: { name: 'PHP', icon: PHPIcon },
  SQL: { name: 'SQL', icon: Code2Icon },
  BASH: { name: 'Bash', icon: LinuxIcon },

  // Frontend
  REACT: { name: 'React', icon: ReactIcon },
  NEXTJS: { name: 'Next.js', icon: NextJSIcon },
  VUE: { name: 'Vue', icon: VueIcon },
  NUXT: { name: 'Nuxt', icon: LayoutIcon },
  HTML5: { name: 'HTML5', icon: CSSIcon },
  CSS3: { name: 'CSS3', icon: CSSIcon },
  TAILWIND: { name: 'Tailwind CSS', icon: TailwindCSSIcon },
  SHADCN: { name: 'Shadcn/UI', icon: ShadcnIcon },

  // Backend
  NODEJS: { name: 'Node.js', icon: NodeJSIcon },
  EXPRESS: { name: 'Express', icon: NodeJSIcon },
  NESTJS: { name: 'NestJS', icon: NestJsIcon },
  LARAVEL: { name: 'Laravel', icon: LaravelIcon },
  REST_API: { name: 'REST APIs', icon: NetworkIcon },
  TRPC: { name: 'tRPC', icon: TypeScriptIcon },

  // Databases & Infrastructure
  POSTGRESQL: { name: 'PostgreSQL', icon: PostgreSqlIcon },
  MYSQL: { name: 'MySQL', icon: MySqlIcon },
  SQLITE: { name: 'SQLite', icon: Code2Icon },
  MONGODB: { name: 'MongoDB', icon: MongoDbIcon },
  REDIS: { name: 'Redis', icon: RedisIcon },

  // DevOps & Tools
  DOCKER: { name: 'Docker', icon: DockerIcon },
  KUBERNETES: { name: 'Kubernetes', icon: KubernetesIcon },
  GITHUB_ACTIONS: { name: 'GitHub Actions', icon: GitHubActionsIcon },
  JENKINS: { name: 'Jenkins', icon: JenkinsIcon },
  ANSIBLE: { name: 'Ansible', icon: AnsibleIcon },
  TERRAFORM: { name: 'Terraform', icon: TerraformIcon },
  LINUX: { name: 'Linux', icon: LinuxIcon },
  GIT: { name: 'Git', icon: GitHubIcon },
  VERCEL: { name: 'Vercel', icon: VercelIcon },
  NGINX: { name: 'Nginx', icon: LinuxIcon },

  // Security & Auth
  JWT: { name: 'JWT', icon: JwtIcon },
  OAUTH2: { name: 'OAuth2', icon: UserCheckIcon },

  // Testing
  JEST: { name: 'Jest', icon: FlaskConicalIcon },
  VITEST: { name: 'Vitest', icon: VitestIcon },
  CYPRESS: { name: 'Cypress', icon: FlaskConicalIcon },
  PLAYWRIGHT: { name: 'Playwright', icon: FlaskConicalIcon },

  // AI & Data Science
  NUMPY: { name: 'NumPy', icon: NumpyIcon },
  PANDAS: { name: 'Pandas', icon: PandasIcon },
  SCIKIT_LEARN: { name: 'scikit-learn', icon: ScikitLearnIcon },
  TENSORFLOW: { name: 'TensorFlow', icon: TensorFlowIcon },

  // Hardware/IoT
  ARDUINO: { name: 'Arduino', icon: ArduinoIcon },
  ESP32: { name: 'ESP32', icon: Esp32Icon },

  // Soft Skills
  COMMUNICATION: { name: 'Communication', icon: UsersIcon },
  TEAMWORK: { name: 'Teamwork', icon: UsersIcon },
  LEADERSHIP: { name: 'Leadership', icon: TrophyIcon },
  PROBLEM_SOLVING: { name: 'Problem Solving', icon: BrainIcon },
  DOCUMENTATION: { name: 'Documentation', icon: FileText },

  // Backward compatibility mappings
  GITHUB: { name: 'GitHub', icon: GitHubIcon },
  CSS: { name: 'CSS3', icon: CSSIcon },
  JOI: { name: 'Joi', icon: NodeJSIcon },
  MORGAN: { name: 'Morgan', icon: NodeJSIcon },
  HELMET: { name: 'Helmet', icon: NodeJSIcon },
  DOTENV: { name: 'Dotenv', icon: NodeJSIcon },
  PRISMA: { name: 'Prisma', icon: NodeJSIcon }
}

const CERTIFICATIONS = [
  {
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation (CNCF)',
    date: '2025',
    link: 'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/'
  },
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: '2024',
    link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/'
  },
  {
    title: 'PostgreSQL Professional Certification',
    issuer: 'PostgreSQL Global Development Group',
    date: '2024',
    link: '#'
  },
  {
    title: 'Professional DevOps Engineer',
    issuer: 'Google Cloud Training',
    date: '2023',
    link: '#'
  }
];

const BLOG_POSTS = [
  {
    title: 'The Future of Machine Learning in 2026',
    date: 'Jan 24, 2026',
    category: 'Machine Learning',
    description: 'Exploring the shift from large language models to specialized agentic architectures. How smaller, more efficient models are revolutionizing edge computing and personalized AI experiences.',
    readTime: '5 min read',
    content: [
      'As we move into 2026, the landscape of Artificial Intelligence is undergoing a fundamental shift. While 2023-2025 focused on the raw power of Large Language Models (LLMs), the current era is defined by Agency and Efficiency.',
      'We are seeing a move away from "chatbots" towards "agents"—systems that don\'t just talk, but act. These agents use specialized, smaller models that are fine-tuned for specific tasks like code generation, system architecture, or logical reasoning.',
      'One of the biggest breakthroughs has been in Edge AI. Models that once required massive GPU clusters can now run locally on specialized NPU (Neural Processing Unit) chips. This provides unprecedented privacy, lower latency, and offline capabilities.',
      'For developers, this means the focus is shifting from prompt engineering to agentic orchestration—designing systems where multiple specialized models cooperate to solve complex problems autonomously.',
      'The focus is no longer just on what AI can say, but what it can do efficiently and ethically in our daily workflows.'
    ]
  },
  {
    title: 'Modern DevOps: Infrastructure as Code with Pulumi',
    date: 'Jan 20, 2026',
    category: 'DevOps',
    description: 'Moving beyond YAML. Why using general-purpose programming languages for infrastructure management provides better abstraction, testing capabilities, and developer experience.',
    readTime: '7 min read',
    content: [
      'The DevOps world reached "YAML exhaustion" in 2025. While declarative configuration served us well, the complexity of modern cloud systems often outgrew the capabilities of static text files.',
      'Infrastructure as Software (IaS) is the natural evolution. By using Pulumi with TypeScript or Python, we gain access to loops, conditionals, and standard software engineering practices like unit testing and IDE autocompletion.',
      'This isn\'t just about convenience. It allows for better abstraction. You can create true "component resources" that encapsulate complex multi-cloud architectures (like a serverless Postgres instance with VPC and IAM) as a single class.',
      'Testing infrastructure has also been revolutionized. Instead of waiting for a 20-minute deployment to fail, we can now run policy-as-code checks and unit tests in milliseconds during the CI phase.',
      'The boundary between "Application Developer" and "Infrastructure Engineer" continues to blur as our tools become unified under the same languages and paradigms.'
    ]
  },
  {
    title: 'Clean Code in TypeScript: Beyond the Basics',
    date: 'Jan 15, 2026',
    category: 'Programming',
    description: 'Practical tips for writing maintainable TypeScript. Understanding advanced union types, exhaustiveness checking, and when to favor composition over inheritance.',
    readTime: '6 min read',
    content: [
      'Writing clean TypeScript isn\'t just about type-safety; it\'s about creating a living documentation of your system\'s intent.',
      'One of the most powerful patterns is Exhaustiveness Checking. By using discriminated unions and the `never` type, you can ensure that your system is resilient to future changes. If you add a new "type" to a union, the compiler will literally point you to every place in your codebase that needs updating.',
      'Favoring Composition over Inheritance remains a cornerstone of good design. In TypeScript, this is easily achieved through functional patterns and high-order components, leading to code that is easier to test and harder to break.',
      'Utility types like `Pick`, `Omit`, and `Partial` should be used sparingly but effectively to maintain a "Single Source of Truth" for your domain models.',
      'Remember: your types should describe what your data *is*, not just what it *looks like*.'
    ]
  },
  {
    title: 'Visual Hierarchy in UI Design',
    date: 'Jan 10, 2026',
    category: 'Design',
    description: 'How to guide your users eyes through effective use of scale, color, and spacing. Mastering the Z-pattern and F-pattern for high-conversion landing pages.',
    readTime: '4 min read',
    content: [
      'Visual hierarchy is the difference between a cluttered screen and a clear story. It\'s the psychological arrangement of elements to signal importance.',
      'Scale is your most powerful tool. A headline isn\'t just larger text—it\'s a visual anchor. But scale only works in contrast; if everything is large, nothing is important.',
      'Color and Contrast guide the eye towards "Call to Action" (CTA) buttons. Using a consistent primary color for interactive elements builds muscle memory for your users.',
      'Whitespace (or Negative Space) isn\'t empty space—it\'s a design element. It provides breathing room and prevents cognitive overload, allowing the user to focus on one concept at a time.',
      'The goal of visual hierarchy is to make the interface feel intuitive, where the user knows what to do next without having to think.'
    ]
  },
  {
    title: 'Automating Security with DevSecOps Pipelines',
    date: 'Jan 05, 2026',
    category: 'DevOps',
    description: 'Integrating automated vulnerability scanning and secret detection into your CI/CD workflows without slowing down your deployment velocity.',
    readTime: '8 min read',
    content: [
      'Security can no longer be a final hurdle before production. It must be "Shifted Left"—integrated into the very beginning of the development lifecycle.',
      'Modern DevSecOps pipelines automatically scan for secrets in every commit. Tools like Gitleaks or TruffleHog can prevent a catastrophic leak of AWS keys or database passwords before they even hit your git server.',
      'Dynamic Analysis Security Testing (DAST) and Static Analysis (SAST) are now fully integrated. We can automatically check for OWASP Top 10 vulnerabilities like SQL Injection or XSS with every pull request.',
      'The key to successful DevSecOps is automation without friction. Security checks should be fast and their results should be presented where developers already are—in the PR comments.',
      'A secure system is not one with no bugs, but one with a robust process to find and fix them automatically as part of the normal development flow.'
    ]
  }
];

const PROJECTS = [
  {
    title: 'SecureTrade',
    tags: [TAGS.TYPESCRIPT, TAGS.CSS3, TAGS.JAVASCRIPT],
    description: 'A secure, modern web application for trading digital assets with a focus on privacy, speed, and reliability. Features real-time market data, secure authentication, and intuitive user interface designed for both beginners and experienced traders.',
    link: {
      github: 'https://github.com/AlainKwishima/SecureTrade',
      preview: 'https://secure-trade.vercel.app'
    },
  },
  {
    title: 'Tactical Command Hub',
    tags: [TAGS.TYPESCRIPT, TAGS.CSS3, TAGS.JAVASCRIPT],
    description: 'A next-generation web platform designed as a centralized mission control system for coordinating operations, managing resources, and monitoring intelligence workflows in real-time. Built with modern web technologies for high-performance data visualization and management.',
    link: {
      github: 'https://github.com/AlainKwishima/Tactical-Command-Hub',
    },
  },
  {
    title: 'AI & Automation Hub',
    tags: [TAGS.TYPESCRIPT, TAGS.CSS3, TAGS.JAVASCRIPT],
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
    tags: [TAGS.TYPESCRIPT, TAGS.NEXTJS, TAGS.TAILWIND, TAGS.PRISMA, TAGS.CSS3, TAGS.JAVASCRIPT],
    description: 'A modern, responsive job board built with Next.js focusing on DevOps, SRE, and Cloud roles. Features smart filtering, user authentication, elegant UI design with Tailwind CSS, and robust database management with Prisma ORM for seamless job search and application experience.',
    link: {
      github: 'https://github.com/NotHarshha/JobsPortal.Tech',
      preview: 'https://jobsportal.tech'
    },
  }
];

export {
  AVATAR,
  ABOUT,
  LINKS,
  CAREER,
  TAGS,
  CERTIFICATIONS,
  BLOG_POSTS,
  PROJECTS
}
