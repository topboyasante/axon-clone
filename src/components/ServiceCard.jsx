import React from 'react'

function ServiceCard({icon,title,description}) {
  return (
    <main className='border w-[90vw] lg:w-[25vw] lg:h-[35vh] p-5 rounded hover:scale-105 ease duration-500 hover:bg-[#fab012] hover:text-white hover:border-none
    flex flex-col justify-center items-center'>
      <div className="w-full">
        {icon}
      </div>
        <h1 className='text-2xl my-2 w-full'>{title}</h1>
        <p className='text-gray-500 hover:text-white font-extralight my-2'>
            {description}
        </p>
    </main>
  )
}

export default ServiceCard