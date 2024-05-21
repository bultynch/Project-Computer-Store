import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import SponsorsCard from '../Components/SponsorsCard';

function SponsorsPage() {
  const imageUrls = {
    lenovo: 'https://1000logos.net/wp-content/uploads/2017/03/Lenovo-Logo-1.png',
    logitech: 'https://1000logos.net/wp-content/uploads/2020/05/Logitech-Logo.png',
    amd: 'https://1000logos.net/wp-content/uploads/2020/05/Amd-logo.jpg',
    hyperx: 'https://1000logos.net/wp-content/uploads/2021/04/HyperX-logo.png',
    corsair: 'https://1000logos.net/wp-content/uploads/2020/10/Corsair-logo.png',
    nvidia: 'https://1000logos.net/wp-content/uploads/2017/05/Nvidia-logo.jpg',
    asrock: 'https://1000logos.net/wp-content/uploads/2021/05/ASRock-logo.png',
    wd: 'https://1000logos.net/wp-content/uploads/2022/07/Western-Digital-Logo-2017.png',
    intel: 'https://1000logos.net/wp-content/uploads/2021/05/Intel-logo.png',
    gigabyte: 'https://1000logos.net/wp-content/uploads/2020/05/Gigabyte-logo.jpg',
    thermaltake: 'https://1000logos.net/wp-content/uploads/2023/07/Thermaltake-logo.jpg',
  };

  return (
    <div className='bg-gray-100 min-h-screen'>

      <NavBar />

      <div className='mx-4 md:mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center'>
        {Object.keys(imageUrls).map((key, index) => (
          <SponsorsCard key={index} imagen={imageUrls[key]} />
        ))}
      </div>

      <Footer />

    </div>
  );
}

export default SponsorsPage;
