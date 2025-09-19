'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Lalezar } from 'next/font/google'
import { ExternalLink } from 'lucide-react'

// import Lalezar font from google
const lalezar = Lalezar({
  subsets: ['arabic'],
  weight: '400',
})

import pic from '../../../public/p2.png'
import pic1 from '../../../public/p3.png'
import pic2 from '../../../public/p4.png'

const projects = [
  {
    title: 'فروشگاه اینترنتی کامل',
    desc: 'یک فروشگاه آنلاین با امکان ثبت سفارش، سبد خرید و پرداخت اینترنتی.',
    tech: 'Next.js, Tailwind',
    img: pic,
    link: '#',
  },
  {
    title: 'پیام رسان آنلاین',
    desc: 'چت آنلاین با قابلیت ارسال پیام و نمایش وضعیت کاربران.',
    tech: 'React, Node.js',
    img: pic1,
    link: '#',
  },
  {
    title: 'مدیریت صف نانوایی',
    desc: 'سیستم مدیریت نوبت برای نانوایی‌ها با پنل ادمین.',
    tech: 'TypeScript, Express',
    img: pic2,
    link: '#',
  },
]

const Project_Cards = () => {
  return (
    <div className={`${lalezar.className} p-10 relative top-[50em]`}>
      {/* Section Title */}
      <h1 className='text-4xl md:text-5xl text-center mb-10 font-bold '>
        پروژه‌ها
      </h1>

      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className='relative group border rounded-2xl overflow-hidden shadow-lg cursor-pointer h-96 flex items-center justify-center bg-white'
          >
            {/* First Text  */}
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center p-6 transition-opacity duration-500 group-hover:opacity-0'>
              <h2 className='text-2xl font-bold'>{project.title}</h2>
              <p className='mt-3 text-gray-600'>{project.desc}</p>
              <p className='mt-2 text-sm text-gray-500'>{project.tech}</p>
            </div>

            {/* Picture on hover */}
            <motion.div
              initial={{ scale: 1.1 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              className='w-full h-full'
            >
              <Image
                src={project.img}
                alt={project.title}
                fill
                className='object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500'
              />

              {/* Live button on images */}
              <a
                href={project.link}
                target='_blank'
                className='absolute bottom-5 right-5 flex items-center gap-2 bg-black/70 text-white px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500'
              >
                <ExternalLink size={18} />
                <span>نمایش زنده</span>
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Project_Cards
