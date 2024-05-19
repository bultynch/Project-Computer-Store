import React from 'react'
import NavBar from '../Components/NavBar'
import BuildPcMain from '../Components/BuildPcMain'
import ServicesMain from '../Components/ServicesMain'
import Sponsors from '../Components/Sponsors'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'


function HomePage() {
  return (
    <div className='flex flex-col justify-center'>

      <NavBar />

      <BuildPcMain />

      <Sponsors />

      <ServicesMain />

      <Contact />

      

      <Footer />
        
    </div>
  )
}

export default HomePage