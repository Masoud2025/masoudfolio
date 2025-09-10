'use client'
import { useState, useEffect } from 'react'

const Banner = () => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    if (dark) html.classList.add('dark')
    else html.classList.remove('dark')
  }, [dark])

  return (
    <div
      className={`w-full py-3 px-6 flex items-center justify-center space-x-4 transition-colors
        ${dark ? 'bg-[#121a21] text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      {/* <span className='font-bold text-lg md:text-xl'>Software Engineer</span> */}
      <span
        className={`${
          dark ? 'text-gray-300' : 'text-gray-600'
        } text-base md:text-lg`}
      >
        | Code. Create. Innovate.  | 
      </span>
      <button
        onClick={() => setDark(!dark)}
        className={`w-6 h-6 rounded-full border-2 border-black transition-colors hover:cursor-pointer
          ${dark ? 'bg-white' : 'bg-[#121a21]'}`}
      />
    </div>
  )
}

export default Banner
