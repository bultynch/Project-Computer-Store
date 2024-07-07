import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import SponsorsCard from '../Components/SponsorsCard';
import SecondNavBar from '../Components/SecondNavBar';

function SponsorsPage() {
  const imageUrls = {
    adata: 'https://1000logos.net/wp-content/uploads/2020/04/ADATA-Logo.png',
    amd: 'https://1000logos.net/wp-content/uploads/2020/05/AMD-Logo.png',
    asus: 'https://1000logos.net/wp-content/uploads/2016/10/Asus-Logo-1995.png',
    hyperx: 'https://1000logos.net/wp-content/uploads/2021/04/HyperX-logo.png',
    intel: 'https://1000logos.net/wp-content/uploads/2021/05/Intel-logo.png',
    kingstone: 'https://1000logos.net/wp-content/uploads/2021/05/Kingston-logo.png',
    lenovo: 'https://1000logos.net/wp-content/uploads/2017/03/Lenovo-Logo-1.png',
    lg: 'https://1000logos.net/wp-content/uploads/2017/03/LG-Logo-2014.png',
    logitech: 'https://1000logos.net/wp-content/uploads/2020/05/Logitech-Logo.png',
    nvidia: 'https://1000logos.net/wp-content/uploads/2022/02/NVIDIA_logo.png',
    samsung: 'https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-2.png',
    wd: 'https://1000logos.net/wp-content/uploads/2022/07/Western-Digital-Logo-2017.png',    
  };

  return (
    <div className='bg-violet-50 min-h-screen dark:bg-neutral-700'>
      <NavBar />
      <SecondNavBar />

      <div className='my-10 mx-2 gap-4 lg:mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center 2xl:max-w-[1296px] 2xl:mx-auto'>
        {Object.keys(imageUrls).map((key, index) => (
          <SponsorsCard key={index} imagen={imageUrls[key]} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default SponsorsPage;
