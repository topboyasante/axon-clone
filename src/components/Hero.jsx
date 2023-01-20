import React from 'react'
import ClientList from './ClientList'

function Hero() {
  return (
    <main className="bg-[url('https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]
    relative h-[93vh] bg-cover bg-no-repeat p-5">

      <div className='w-full h-full bg-black absolute top-0 left-0 opacity-50'/>
        <main className="text-white h-full max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-5 justify-center items-center p-5 lg:p-0">
            {/* text */}
            <div className='lg:w-[50%] z-20'>
                <h1 className='text-4xl lg:text-6xl'>We design, develop and modernize software applications.</h1>
                <p className='text-xl lg:text-3xl font-extralight my-2'>
                Engage Axon to build a remote, Agile software development team to co-create or 
                update your digital product with the latest web, mobile and cloud technologies.
                </p>
                {/* CTA Buttons */}
                {/* <div className='flex gap-5'>
                    <button className='border my-2 px-4 py-2'>Explore Services</button>
                    <button className='border my-2 px-4 py-2'>View Client Success Stories</button>
                </div> */}
            </div>
            {/* Client List */}
            <section className='lg:w-[50%] flex flex-col justify-center items-center'>
                {/* <ClientList/>
                <h1 className='lg:text-2xl my-2'>Our Clients</h1> */}
            </section>
        </main>
    </main>
    
  )
}

export default Hero