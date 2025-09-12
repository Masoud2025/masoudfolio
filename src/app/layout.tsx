import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Footer from '@/components/layout/footer/Footer'
import HeaderBanner from '@/components/layout/header/Banner'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Masoud',
  description: 'Portfolio of Masoud',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
    <html lang='en' className=''>
      <body className={`${poppins.variable} antialiased`}>
        <HeaderBanner />
        {children}
        <Footer />
      
      </body>
    </html>
  )
}
