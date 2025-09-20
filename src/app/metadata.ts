import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alain Kwishima | Full-Stack Developer & DevOps Engineer',
  description: 'Experienced full-stack developer and DevOps engineer specializing in web applications, mobile development, AI integration, and cloud infrastructure. Building scalable solutions that drive business growth.',
  keywords: ['Full-Stack Developer', 'DevOps Engineer', 'Web Development', 'Mobile Development', 'AI Integration', 'Cloud Infrastructure', 'AWS', 'Azure', 'Kubernetes', 'Terraform', 'React', 'Node.js', 'Portfolio'],
  authors: [{ name: 'Alain Kwishima' }],
  creator: 'Alain Kwishima',
  publisher: 'Alain Kwishima',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://notharshhaa.site'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Alain Kwishima | Full-Stack Developer & DevOps Engineer',
    description: 'Experienced full-stack developer and DevOps engineer specializing in web applications, mobile development, AI integration, and cloud infrastructure. Building scalable solutions that drive business growth.',
    url: 'https://notharshhaa.site',
    siteName: 'Alain Kwishima Portfolio',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Alain Kwishima - Full-Stack Developer & DevOps Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alain Kwishima | Full-Stack Developer & DevOps Engineer',
    description: 'Experienced full-stack developer and DevOps engineer specializing in web applications, mobile development, AI integration, and cloud infrastructure.',
    images: ['/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
