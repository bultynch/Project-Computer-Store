import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import SponsorsCard from '../Components/SponsorsCard'


function SponsorsPage() {

  const imageUrls = {
    thermaltake: 'https://1000logos.net/wp-content/uploads/2023/07/Thermaltake-logo.jpg',
    logitech: 'https://1000logos.net/wp-content/uploads/2020/05/Logitech-Logo.png',
    amd: 'https://1000logos.net/wp-content/uploads/2020/05/Amd-logo.jpg',
    hyperx: 'https://1000logos.net/wp-content/uploads/2021/04/HyperX-logo.png',
    corsair: 'https://1000logos.net/wp-content/uploads/2020/10/Corsair-logo.png',
    nvidia: 'https://1000logos.net/wp-content/uploads/2017/05/Nvidia-logo.jpg',
    asrock: 'https://1000logos.net/wp-content/uploads/2021/05/ASRock-logo.png',
    wd: 'https://1000logos.net/wp-content/uploads/2022/07/Western-Digital-Logo-2017.png',
    intel: 'https://1000logos.net/wp-content/uploads/2021/05/Intel-logo.png',
    gigabyte: 'https://1000logos.net/wp-content/uploads/2020/05/Gigabyte-logo.jpg',
    lenovo: 'https://1000logos.net/wp-content/uploads/2017/03/Lenovo-Logo-1.png',
  }
  return (
    <div className='bg-gray-100 w-full h-full'>

      <NavBar />

      <div className='mx-20 flex flex-col justify-center'>

        <div className='flex items-center justify-center'>
          <SponsorsCard imagen={imageUrls.thermaltake} />
          <SponsorsCard imagen={imageUrls.logitech} />
        </div>

        <div className='flex items-center justify-center'>
          <SponsorsCard imagen={imageUrls.amd} />
          <SponsorsCard imagen={imageUrls.hyperx} />
        </div>

        <div className='flex items-center justify-center'>
          <SponsorsCard imagen={imageUrls.corsair} />
          <SponsorsCard imagen={imageUrls.nvidia} />
        </div>

        <div className='flex items-center justify-center'>
          <SponsorsCard imagen={imageUrls.asrock} />
          <SponsorsCard imagen={imageUrls.wd} />
        </div>

        <div className='flex items-center justify-center'>
          <SponsorsCard imagen={imageUrls.intel} />
          <SponsorsCard imagen={imageUrls.gigabyte} />
        </div>
        
        <div className='flex items-center justify-start'>
          <SponsorsCard imagen={imageUrls.lenovo} />
        </div>

      </div>

      <Footer />

    </div>
  )
}

export default SponsorsPage