import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import FluidBackground from '@/components/ui/FluidBackground'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: '404 not found ➠ 302 Found',
  description: 'Portfolio of Masoud',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className=''>
      <body className={`${poppins.variable} antialiased relative`}>
        {/* fixed background */}
        <FluidBackground />
        {/* Main content */}
        <main className='relative z-10'>{children}</main>
      </body>
    </html>
  )
}
