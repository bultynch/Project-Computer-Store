import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
            <img src='/iconopag.ico' className='w-6 h-6' alt='logo-footer'></img>
            <p>Copyright © 2024 - All right reserved</p>
        </aside> 
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <FaInstagram className='w-6 h-6'/>
            <FaXTwitter  className='w-6 h-6'/>
            <FaFacebook className='w-6 h-6'/>
        </nav>
</footer>
  )
}

export default Footer