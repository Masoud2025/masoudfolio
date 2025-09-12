'use client'
import About_Me from '@/components/ui/Aboutme'
import DividingLine from '@/components/ui/DividingLine'
import Hero from '@/components/ui/Hero'
// import RightLeftLayout from '@/components/ui/Moredeatiled'
import Projects from '@/components/ui/Project'
import type { NextPage } from 'next'
const Home: NextPage = () => {
  return (
    <div className=''>
      <Hero></Hero>
      <About_Me></About_Me>
      <DividingLine></DividingLine>
      {/* <RightLeftLayout></RightLeftLayout> */}
      <Projects></Projects>
      {/* <Cards /> */}
    </div>
  )
}
export default Home
