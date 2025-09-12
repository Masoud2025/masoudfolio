'use client'
import { motion } from 'framer-motion'

const RightLeftLayout = () => {
  const sections = [
    {
      title: 'Creative Design',
      description: 'طراحی‌های خلاقانه که تجربه کاربری رو به سطح بعدی می‌بره.',
      image: '/images/sample-right.jpg',
      reverse: false,
    },
    {
      title: 'Innovative Development',
      description: 'توسعه‌ی پروژه‌ها با بهترین استانداردهای روز دنیا.',
      image: '/images/sample-left.jpg',
      reverse: true,
    },
  ]

  return (
    <div className='max-w-6xl mx-auto py-20 px-4 space-y-24'>
      {sections.map((section, idx) => (
        <motion.div
          key={idx}
          className={`flex flex-col md:flex-row items-center gap-8 ${
            section.reverse ? 'md:flex-row-reverse' : ''
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className='md:w-1/2'>
            <h2 className='text-3xl font-extrabold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-500'>
              {section.title}
            </h2>
            <p className='text-gray-500 text-lg'>{section.description}</p>
          </div>
          <div className='md:w-1/2'>
            <motion.img
              src={section.image}
              alt={section.title}
              className='rounded-xl shadow-2xl w-full h-auto hover:scale-105 transition-transform duration-500'
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default RightLeftLayout
