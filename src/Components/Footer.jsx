import React from 'react'
import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer p-4 flex flex-col items-center justify-center sm:justify-between sm:flex-row text-white bg-cc1">

      <aside className="flex items-center justify-center">
        
        <p className='text-center'>Project Component Store © 2024 - Todos los derechos reservados</p>
      </aside> 

      <nav className="flex gap-4 ">
        <FaInstagram className='w-6 h-6' />
        <FaXTwitter className='w-6 h-6' />
        <FaFacebook className='w-6 h-6' />
      </nav>
      
    </footer>
  );
}

export default Footer;
