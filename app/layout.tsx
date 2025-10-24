import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Probaho Solutions – Innovate. Build. Deliver. | Software Development Bangladesh',
  description: 'Probaho Solutions - Innovate. Build. Deliver. Professional software development services in Bangladesh. Modern web apps, mobile solutions, and custom software development.',
  keywords: 'Probaho Solutions, software development Bangladesh, web development Dhaka, mobile app development, React Next.js developer, custom software solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}