'use client'
import { motion } from 'framer-motion'

const About_Me = () => {
  const stats = [
    {
      label: 'Done Projects',
      number: 12,
      color: 'from-amber-400 to-amber-600',
    },
    { label: 'Failed Projects', number: 2, color: 'from-red-400 to-red-600' },
    {
      label: 'Ongoing Projects',
      number: 5,
      color: 'from-green-400 to-green-600',
    },
  ]

  return (
    <div className='max-w-5xl mx-auto py-20 px-4 space-y-20 pointer-events-none'>
      {/* About Text */}
      <motion.p
        className='text-3xl md:text-4xl font-bold leading-relaxed text-center max-w-4xl mx-auto select-none'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className='bg-gradient-to-r from-amber-500 via-red-500 to-pink-600 bg-clip-text text-transparent'>
          I’m a developer
        </span>{' '}
        who turns <span className='underline decoration-amber-500'>ideas</span>{' '}
        into reality. I don’t just{' '}
        <span className='text-amber-600'>write code</span> — I design solutions.
        <span className='text-green-600'> Creative</span>,{' '}
        <span className='text-blue-600'>adaptive</span>, and{' '}
        <span className='text-pink-600'>ambitious</span>, I use technology to{' '}
        <span className='underline decoration-green-500'>push limits</span>,
        solve problems, and leave a lasting{' '}
        <span className='bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent'>
          impact
        </span>
        .
      </motion.p>

      {/* Stats */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col items-center justify-center p-10 rounded-3xl 
              shadow-xl text-white 
              bg-gradient-to-br ${stat.color} 
              backdrop-blur-md select-none`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <h2 className='text-6xl font-extrabold drop-shadow-lg'>
              {stat.number}
            </h2>
            <p className='mt-3 text-xl font-semibold tracking-wide'>
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default About_Me
