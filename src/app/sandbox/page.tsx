'use client'
import Project_Cards from '@/components/ui/ProjectsCards'
import styles from '../../styles/blog.module.css'
import StickySides from '@/components/ui/StickySides'
const SandBox = () => {
  return (
    <div
      id='background'
      className={`${styles.blog} bg-blue-300 border-rounded w-full h-[100vh]`}
    >
      <h1 className='text-center text-4xl font-extrabold relative top-[4em]'>
        BOX AREA HERE :
      </h1>
      {/* create Test your code  here : */}
      <div
        className='w-[90%] bg-amber-50 h-[40em] border-b-emerald-400 rounded-3xl relative 
      left-[6em] top-[12em] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] '
      >
        <div className='relative top-[-90em]'>
          <Project_Cards />
        </div>
        <StickySides/>
      </div>
    </div>
  )
}
export default SandBox
