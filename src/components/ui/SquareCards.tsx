'use client'

import Image from 'next/image'
import pic from '../../../public/computer-programmer-icon-simple-vector-illustration_404166-285-Photoroom.png'

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-24 px-4 z-10">
      {[1, 2, 3].map((_, i) => (
        <div
          key={i}
          className="
            relative w-44 h-44 rounded-2xl
            bg-white/20 backdrop-blur-xl border border-white/30
            shadow-lg flex flex-col items-center justify-center gap-4
            transition-all duration-500 hover:scale-105 hover:shadow-2xl
          "
        >
          <div className="w-24 h-24">
            <Image
              alt={`Card ${i + 1}`}
              src={pic}
              width={96}
              height={96}
              className="object-contain"
              priority
            />
          </div>
          <p className="text-gray-900 font-semibold text-lg">
            کارت {i + 1}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Cards
