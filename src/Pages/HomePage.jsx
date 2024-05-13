import React from 'react'
import NavBar from '../Components/NavBar'
import BuildPcMain from '../Components/BuildPcMain'
import ServicesMain from '../Components/ServicesMain'
import Sponsors from '../Components/Sponsors'
import Contact from '../Components/Contact'

function HomePage() {
  return (
    <div className='mt-16 flex flex-col justify-center'>

        <NavBar />

        <BuildPcMain />

        <Sponsors />

        <ServicesMain />

        <Contact />
        
    </div>
  )
}

export default HomePage