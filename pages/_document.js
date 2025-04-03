import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Resource hints for critical resources */}
        <link 
          rel="preload" 
          href="/Siddharth_Resume.pdf" 
          as="document" 
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Specify content security policy for better security and performance */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; img-src 'self' data: blob: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; connect-src 'self' https://*.vercel.app https://*.vercel.com;"
        />
        
        {/* Add DNS prefetch for third-party domains */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Add theme color for browser UI */}
        <meta name="theme-color" content="#0c0c0c" />
        
        {/* Add viewport control for better mobile rendering */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 