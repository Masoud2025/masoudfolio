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
  title: 'Masoud Jafari',
  description:
    'personal website create by Masoud Jafari & publish by Vercel & Thanks to next.js Tailwind Eslint ',
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
