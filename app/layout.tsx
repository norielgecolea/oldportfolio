// app/layout.tsx
import './globals.css'
import { Manrope } from 'next/font/google'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Script from 'next/script'

const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata = {
  title: 'Noriel Gecolea',
  description: 'Personal portfolio of Noriel Gecolea',
  other: {
    'google-adsense-account': 'ca-pub-3738297787059683',
  },
}

interface LayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager / Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DCYQY8NRNP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DCYQY8NRNP');
          `}
        </Script>
      </head>
      <body
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
