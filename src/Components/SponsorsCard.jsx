import React from 'react'

const SponsorsCard = ({imagen}) => {
  return (
    <div className='p-4 gap-2 w-full h-68 2xl:w-160 flex flex-col justify-center bg-white rounded-lg shadow-sm border dark:bg-neutral-800 dark:border-neutral-700'>
          
      <div className='flex items-center justify-center'>
        <img src={imagen} className='rounded-lg w-96 h-60' alt='sponsors-c-i'/>
      </div>

      <div className='flex items-center justify-center  rounded-b-lg'>
        <button className="py-4 w-full text-white font-normal rounded-lg shadow-sm border bg-violet-900 hover:bg-white hover:text-violet-900 hover:border-violet-900">Ver productos</button>
      </div>
          
    </div>
  )
}

export default SponsorsCard