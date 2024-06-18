import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearch, IoMoon } from "react-icons/io5";
import { MdOutlinePersonOutline, MdOutlineWbSunny } from "react-icons/md";

function NavigationBar() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`${darkMode && 'dark'}`}>
      <div className="navbar bg-base-100 py-4 border-b shadowm-sm dark:bg-neutral-800 dark:border-b-neutral-800">

        <div className="navbar-start">

          <button className="swap swap-rotate btn btn-ghost btn-circle hover:bg-gray-300 dark:hover:bg-neutral-700 dark:text-white" onClick={toggleDarkMode}>

            {darkMode ? <MdOutlineWbSunny className='w-6 h-6'/> : <IoMoon className='w-6 h-6'/> }

          </button>

        </div>

        <div className="navbar-center">
          <Link to='/' className="btn btn-ghost text-xl hover:rounded-lg dark:text-white dark:hover:bg-neutral-700">Project Computer Store</Link>
        </div>

        <div className="navbar-end flex items-center space-x-2">

          <button className="btn btn-ghost btn-circle dark:hover:bg-neutral-700">
            <IoSearch className='w-5 h-5 dark:text-white' />
          </button>

          <Link to='/login' className="btn btn-ghost btn-circle dark:hover:bg-neutral-700">
            <div className="indicator">
              <MdOutlinePersonOutline className='w-6 h-6 dark:text-white' />  
            </div>
          </Link>

          {/*<div className="dropdown mr-20">

            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>


            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to='/products' className='p-1 rounded-lg hover:bg-gray-100'>Productos</Link>
              </li>
              <li>
                <Link to='/help' className='p-1 rounded-lg hover:bg-gray-100'>Ayuda</Link>
              </li>
              <li>
                <Link to='/sponsors' className='p-1 rounded-lg hover:bg-gray-100'>Sponsors</Link>
              </li>
            </ul>

          </div>
          */}
  
        </div>

      </div>

    </div>
  );
}

export default NavigationBar;
