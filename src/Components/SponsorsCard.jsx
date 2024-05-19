import React from 'react'

const SponsorsCard = ({imagen}) => {
  return (
    <div className='m-10 p-2 w-128 h-68 flex flex-col justify-center bg-white rounded-lg shadow-sm'>
          
        <div className='flex items-center justify-center'>
            <img src={imagen} className='rounded-lg w-96 h-60' alt='sponsors-c-i'/>
        </div>

        <div className='flex items-center justify-center  rounded-b-lg'>
            <button className="mb-2 mt-4 p-2 bg-blue-500 hover:bg-blue-400 text-white font-normal rounded-lg">Ver productos</button>
        </div>
          
    </div>
  )
}

export default SponsorsCard