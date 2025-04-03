import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'sonner';

// Optimize font loading by specifying display strategy
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Ensures text remains visible during font load
  preload: true
})

export const metadata = {
  title: 'Siddharth Meena',
  description: 'Full-Stack Web Developer, Designer, and Software Tinkerer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Preload critical assets */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0c0c0c" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster richColors position="bottom-right" />
        {/* Defer non-critical third-party scripts */}
        <Analytics strategy="afterInteractive" />
        <SpeedInsights strategy="afterInteractive" />
      </body>
    </html>
  )
}