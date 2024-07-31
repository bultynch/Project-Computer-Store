import React from 'react';
import { Link } from 'react-router-dom';
import { LuLogOut } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { MdOutlinePersonOutline, MdAccountBox } from "react-icons/md";
import DarkModeButton from './DarkModeButton';

function NavigationBar() {

  return (

    <div className="navbar bg-base-100 py-4 border-b shadowm-sm dark:bg-neutral-800 dark:border-b-neutral-800">

      <div className="navbar-start">

        <div className="dropdown mr-20">

          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">

            <div className="indicator">
              <MdOutlinePersonOutline className='w-6 h-6 dark:text-white' />
            </div>

          </div>


          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

            <li>
              <Link to='/userProfile' className='p-1 rounded-lg hover:bg-gray-100'>
                <MdAccountBox className='w-6 h-6'/>
                Mi cuenta
              </Link>
            </li>

            <li>
              <Link to='/login' className='p-1 rounded-lg hover:bg-gray-100 '>
                <LuLogOut className='w-6 h-6'/>
                Cerrar sesión
              </Link>
            </li>

          </ul>

        </div>

      </div>

      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl hover:rounded-lg dark:text-white dark:hover:bg-neutral-700">
          <span className="sm:hidden">PC Store</span>
          <span className="hidden sm:inline">Project Component Store</span>
        </Link>
      </div>


      <div className="navbar-end flex items-center space-x-2">

        <button className="btn btn-ghost btn-circle dark:hover:bg-neutral-700">

          <IoSearch className='w-5 h-5 dark:text-white' />

        </button>

        <DarkModeButton />

        {/*<Link to='/login' className="btn btn-ghost btn-circle dark:hover:bg-neutral-700">

          <div className="indicator">

            <MdOutlinePersonOutline className='w-6 h-6 dark:text-white' />  

          </div>
          
        </Link>
        */}
        
        
    
  
      </div>

    </div>

  );
}

export default NavigationBar;
