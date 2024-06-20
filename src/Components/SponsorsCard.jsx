import React from 'react'

const SponsorsCard = ({imagen}) => {
  return (
    <div className='m-10 p-2 w-128 h-68 flex flex-col justify-center bg-white rounded-lg shadow-sm border dark:bg-neutral-800 dark:border-neutral-700'>
          
        <div className='flex items-center justify-center'>
            <img src={imagen} className='rounded-lg w-96 h-60' alt='sponsors-c-i'/>
        </div>

        <div className='flex items-center justify-center  rounded-b-lg'>
            <button className="mb-2 mt-4 py-4 px-6 bg-violet-800 hover:bg-violet-900 text-white font-normal rounded-lg">Ver productos</button>
        </div>
          
    </div>
  )
}

export default SponsorsCard