'use client'
import ProjectData from '@/data/projects.json'
import { ExternalLink, GithubIcon, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const [openProject, setOpenProject] = useState(null)

  return (
    <div className='max-w-6xl mx-auto py-16 px-4 space-y-12'>
      {/* Grid of Projects */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {ProjectData.map((project) => (
          <motion.div
            key={project.id}
            className='relative group rounded-2xl overflow-hidden shadow-xl cursor-pointer '
            whileHover={{ scale: 1.05 }}
            onClick={() => setOpenProject(project)}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={400}
              className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110'
            />
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white'>
              <h3 className='text-lg font-bold'>{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Drawer / Modal */}
      {openProject && (
        <motion.div
          className='fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpenProject(null)}
        >
          <motion.div
            className='bg-white rounded-2xl shadow-2xl max-w-4xl w-full relative overflow-hidden'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className='absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition'
              onClick={() => setOpenProject(null)}
            >
              <X size={20} />
            </button>

            {/* Project Image */}
            <Image
              src={openProject.image}
              alt={openProject.title}
              width={800}
              height={500}
              className='w-full h-64 object-cover rounded-t-2xl'
            />

            {/* Project Details */}
            <div className='p-6 space-y-3'>
              <h2 className='text-2xl font-bold text-amber-900'>
                {openProject.title}
              </h2>
              <p className='text-gray-600'>{openProject.description}</p>
              <div className='flex gap-4 mt-4'>
                <Link href={openProject.githubLink} target='_blank'>
                  <GithubIcon
                    className='hover:text-gray-800 transition'
                    size={25}
                  />
                </Link>
                <Link href={openProject.liveLink} target='_blank'>
                  <ExternalLink
                    className='hover:text-gray-800 transition'
                    size={25}
                  />
                </Link>
              </div>

              <div className='mt-4 grid grid-cols-2 gap-2 text-gray-700'>
                <p>
                  <span className='font-semibold'>Colors:</span>{' '}
                  {openProject.colors}
                </p>
                <p>
                  <span className='font-semibold'>Fonts:</span>{' '}
                  {openProject.fonts}
                </p>
                <p>
                  <span className='font-semibold'>Difficulty:</span>{' '}
                  {openProject.difficulty}
                </p>
                <p>
                  <span className='font-semibold'>Technology:</span>{' '}
                  {openProject.technology}
                </p>
                <p>
                  <span className='font-semibold'>Duration:</span>{' '}
                  {openProject.duration}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default Projects
