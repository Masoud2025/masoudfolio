/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown } from 'lucide-react'
import projectData from '@/data/projects.json'

const Cards = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [filter, setFilter] = useState<string>('All')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const techs = Array.from(new Set(projectData.flatMap((p) => p.techStack)))

  const filteredProjects =
    filter === 'All'
      ? projectData
      : projectData.filter((p) => p.techStack.includes(filter))

  return (
    <div className=' min-h-screen text-black p-6'>
      {/* filter Dropdown */}
      <div className='relative w-48 mx-auto mb-6'>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className='w-full flex justify-between items-center border border-black rounded px-4 py-2 bg-white text-black'
        >
          {filter} ({filteredProjects.length}) <ChevronDown size={20} />
        </button>

        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              key='dropdown'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className='absolute top-full left-0 w-full bg-white border border-black rounded mt-1 z-10 max-h-60 overflow-y-auto'
            >
              <button
                onClick={() => {
                  setFilter('All')
                  setDropdownOpen(false)
                }}
                className='w-full text-left px-4 py-2 hover:bg-gray-200'
              >
                All ({projectData.length})
              </button>
              {techs.map((tech) => (
                <button
                  key={tech}
                  onClick={() => {
                    setFilter(tech)
                    setDropdownOpen(false)
                  }}
                  className='w-full text-left px-4 py-2 hover:bg-gray-200'
                >
                  {tech} (
                  {projectData.filter((p) => p.techStack.includes(tech)).length}
                  )
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* when change filter motion change the layout*/}
      <motion.div
        layout
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.img
              key={project.id}
              src={project.image}
              alt={project.title}
              className='w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg cursor-pointer border border-black'
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.02 }}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* project drawer */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className=' fixed inset-0 bg-white flex items-center justify-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className='w-full h-full flex flex-col p-6 overflow-hidden'
              initial={{ y: '2%' }}
              animate={{ y: 0 }}
              exit={{ y: '1%' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className='flex justify-end'>
                <button
                  className='p-2'
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={32} color='black' />
                </button>
              </div>
              <div className='flex-1 overflow-y-auto flex flex-col items-center gap-6'>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className='w-full max-w-3xl h-auto object-cover rounded-lg border border-black'
                />
                <h2 className='text-3xl font-bold text-center'>
                  {selectedProject.title}
                </h2>
                <p className='text-center'>{selectedProject.description}</p>
                <p>
                  <strong>Category:</strong> {selectedProject.category}
                </p>
                <p>
                  <strong>Tech Stack:</strong>{' '}
                  {selectedProject.techStack.join(', ')}
                </p>
                <p>
                  <strong>Duration:</strong> {selectedProject.duration}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Cards
