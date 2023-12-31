import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import HomeHeader from './home-header'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shopping',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HomeHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
