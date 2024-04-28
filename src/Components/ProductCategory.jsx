import React, { useState } from 'react';

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="m-20 flex flex-col justify-center">
      <button
        className="w-full px-4 py-2 text-left bg-gray-200 hover:bg-gray-300" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>

      {isOpen && (
        <div className="w-full px-4 py-2 bg-gray-100">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown

