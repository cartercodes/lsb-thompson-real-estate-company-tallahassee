import type { Metadata } from 'next'
import { Cinzel, Josefin_Sans } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Thompson Real Estate Company | Tallahassee, FL',
  description:
    'Thompson Real Estate Company is the trusted real estate agent in Tallahassee, FL. Expert guidance for buying, selling, and investing in residential and luxury properties. Schedule your free consultation today.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${josefinSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}