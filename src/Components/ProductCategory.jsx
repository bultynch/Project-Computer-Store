import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-80 flex flex-col justify-center">

      <div className="flex flex-col">

        <button className="w-full px-4 py-2 flex items-center justify-between bg-gray-200 hover:bg-gray-300" onClick={() => setIsOpen(!isOpen)}>{title}

          <div className={`transition-transform duration-300 transform ${isOpen ? 'rotate-180' : ''}`}>
            <IoIosArrowDown className='h-5 w-5 mx-1'/>
          </div>

        </button>

        <div className={`overflow-hidden transition-max-height duration-150 bg-gray-100 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>

          <div className="p-2">
            {children}
          </div>

        </div>

      </div>

    </div>
  );
};

export default Dropdown;
