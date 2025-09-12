'use client'
import { motion } from 'framer-motion'

const About_Me = () => {
  const stats = [
    { label: 'Done Projects', number: 12, color: 'bg-amber-500' },
    { label: 'Failed Projects', number: 2, color: 'bg-red-500' },
    { label: 'Ongoing Projects', number: 5, color: 'bg-green-500' },
  ]

  return (
    <div className='max-w-5xl mx-auto py-20 px-4 space-y-16'>
      {/* About Text */}
      <motion.p
        className='text-3xl md:text-4xl font-bold leading-relaxed text-center'
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
        <span className='text-green-600'>Creative</span>,{' '}
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
            className={`flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg ${stat.color} text-white`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <h2 className='text-5xl font-extrabold'>{stat.number}</h2>
            <p className='mt-2 text-xl font-semibold'>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default About_Me
