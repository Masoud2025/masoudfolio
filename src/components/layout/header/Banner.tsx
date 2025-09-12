'use client'

import { useState, useEffect } from 'react'

const Navbar = () => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    if (dark) html.classList.add('dark')
    else html.classList.remove('dark')
  }, [dark])

  const buttons = [
    { id: 0, name: 'Download CV', href: '/#' },
    { id: 1, name: 'Blog', href: '/#' },
  ]

  return (
    <nav
      className={`w-full px-6 py-4 flex items-center justify-between transition-colors
        ${
          dark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
        } shadow-md`}
    >
      {/*  */}
      <div className='text-xl font-semibold'>
        Code<span className='text-red-500 text-4xl font-extrabold'>.</span>{' '}
        Create
        <span className='text-green-500 text-4xl font-extrabold'>.</span>{' '}
        Innovate
      </div>

      {/* منو دکمه‌ها */}
      <div className='flex items-center space-x-6'>
        {/* زبان */}
        <div
          className={`px-3 py-1 rounded border ${
            dark
              ? 'border-gray-600 text-gray-200'
              : 'border-gray-300 text-gray-700'
          } hover:bg-amber-50 hover:text-gray-900 transition-colors cursor-pointer`}
        >
          FA | EN
        </div>

        {/* حالت تاریک */}
        <button
          onClick={() => setDark(!dark)}
          className={`w-8 h-8 rounded-full flex items-center justify-center border ${
            dark ? 'border-gray-400 bg-white' : 'border-gray-700 bg-gray-800'
          } text-sm transition-colors hover:opacity-80`}
        >
          {dark ? '☀️' : '🌙'}
        </button>

        {/* لینک‌ها */}
        <div className='flex space-x-4'>
          {buttons.map((btn) => (
            <a
              key={btn.id}
              href={btn.href}
              className={`px-4 py-2 font-medium rounded-md border ${
                dark
                  ? 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600'
                  : 'bg-amber-100 border-amber-300 text-gray-900 hover:bg-amber-200'
              } transition-colors`}
            >
              {btn.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
