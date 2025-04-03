import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'sonner';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Siddharth Meena',
  description: 'Portfolio of Siddharth Meena - Experienced full-stack developer specializing in React, Next.js, and UI/UX design. Available for freelance and full-time opportunities.',
  keywords: ['Siddharth Meena', 'Full-Stack Developer', 'Web Developer', 'React Developer', 'Next.js Developer', 'UI/UX Designer', 'Tailwind CSS', 'Node.js', 'Frontend Engineer', 'JavaScript Expert'],
  authors: [{ name: 'Siddharth Meena', url: 'https://siddz.com' }],
  creator: 'Siddharth Meena',
  publisher: 'Siddharth Meena',
  metadataBase: new URL('https://siddz.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://siddz.com',
    title: 'Siddharth Meena | Portfolio - Full-Stack Developer & UI/UX Designer',
    description: 'Siddharth Meena is a full-stack developer with expertise in React, Next.js, Node.js, and UI/UX design. Browse portfolio and projects.',
    siteName: 'Siddharth Meena Portfolio',
    images: [
      {
        url: 'https://siddz.com/me.webp',
        width: 1200,
        height: 630,
        alt: 'Siddharth Meena - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siddharth Meena | Full-Stack Developer',
    description: 'Siddharth Meena is a skilled full-stack developer with expertise in React, Next.js, Node.js, and UI/UX design. Browse portfolio and projects.',
    creator: '@epicsidd',
    images: ['https://siddz.com/me.webp'],
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script
          id="schema-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Person',
                  '@id': 'https://siddz.com/',
                  name: 'Siddharth Meena',
                  givenName: 'Siddharth',
                  familyName: 'Meena',
                  url: 'https://siddz.com',
                  image: 'https://siddz.com/me.webp',
                  description: 'Siddharth Meena is a full-stack developer specializing in React, Next.js, Node.js, and UI/UX design.',
                  sameAs: [
                    'https://github.com/SiddDevZ',
                    'https://x.com/epicsidd',
                    'https://discordapp.com/users/273352781442842624',
                  ],
                  jobTitle: 'Full Stack Developer',
                  worksFor: {
                    '@type': 'Organization',
                    name: 'Luvo Web',
                    url: 'https://luvoweb.com'
                  },
                  knowsAbout: [
                    'React',
                    'Next.js',
                    'JavaScript',
                    'Web Development',
                    'UI/UX Design',
                    'Node.js',
                    'Tailwind CSS',
                    'Full-Stack Development'
                  ]
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://siddz.com',
                  url: 'https://siddz.com',
                  name: 'Siddharth Meena | Full-Stack Developer',
                  description: 'Personal portfolio website of Siddharth Meena, an experienced full-stack developer specializing in React, Next.js, Node.js, and UI/UX design.',
                  publisher: { '@id': 'https://siddz.com/' },
                  inLanguage: 'en-US'
                },
                {
                  '@type': 'WebPage',
                  '@id': 'https://siddz.com',
                  url: 'https://siddz.com',
                  name: 'Siddharth Meena | Full-Stack Developer | Portfolio',
                  isPartOf: { '@id': 'https://siddz.com' },
                  about: { '@id': 'https://siddz.com' },
                  description: 'Portfolio of Siddharth Meena, an experienced full-stack developer specializing in React, Next.js, Node.js, and UI/UX design. Available for freelance and full-time opportunities.',
                  inLanguage: 'en-US',
                  mainEntity: { '@id': 'https://siddz.com/' }
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster richColors position="bottom-right" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}