// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Manrope } from 'next/font/google'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import './globals.css'
import Head from 'next/head'

const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})
export const metadata = {
  title: "Noriel Gecolea",


};
const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})
interface LayoutProps {
  children: ReactNode
}
export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <Head>
        <title>Noriel Gecolea</title>
        <meta name="google-adsense-account" content="ca-pub-3738297787059683"></meta>
      </Head>
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
