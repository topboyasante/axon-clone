import React from 'react'

function ClientCard({img,title}) {
  return (
   <main className='w-[90vw] lg:w-[25vw] relative h-[30vh] hover:scale-105 ease duration-500'>
      <img src={img} alt={title} className='absolute w-full h-full object-cover'/>
      <div className='bg-black absolute w-full h-full opacity-30'></div>
      <h1 className='absolute bottom-0 left-0 p-3 text-white'>{title}</h1>
   </main>
  )
}

export default ClientCard