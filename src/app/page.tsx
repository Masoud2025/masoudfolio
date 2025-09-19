'use client'

import IntroButtons from '@/components/ui/ButtonsGruops'
import Project_Cards from '@/components/ui/ProjectsCards'
import type { NextPage } from 'next'
const Home: NextPage = () => {
  return (
    <div className=''>
      <IntroButtons />
      <Project_Cards/>
    </div>
  )
}
export default Home
