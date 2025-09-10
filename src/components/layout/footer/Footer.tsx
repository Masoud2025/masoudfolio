'use client'

import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className=' px-6 py-12 absolute  w-full'>
      {/* Top Section */}
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 border-b border-dashed border-gray-300 pb-6'>
        {/* Logo */}
        <div className='text-2xl font-bold'>M.</div>
        {/* Social */}
        <div className='flex gap-4'>
          <a href='#' className='hover:text-gray-900 transition'>
            <Github size={20} />
          </a>
          <a href='#' className='hover:text-gray-900 transition'>
            <Linkedin size={20} />
          </a>
          <a href='#' className='hover:text-gray-900 transition'>
            <Twitter size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='mt-6 text-center text-gray-500 text-sm'>
        &copy; {new Date().getFullYear()} MyPortfolio. made with love❤️
      </div>
    </footer>
  )
}

export default Footer
