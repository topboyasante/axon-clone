import React from 'react'
import ServiceCard from '../components/ServiceCard'
import {AiOutlineDesktop,AiFillAndroid,AiOutlineLaptop} from 'react-icons/ai'
import {BsCodeSlash,BsServer} from 'react-icons/bs'
import {BiMoney} from 'react-icons/bi'

function Services() {
  return (
    <main className='max-w-[1500px] mx-auto lg:h-screen flex flex-col justify-center items-center my-2' id='services'>
        <h1 className='text-3xl'>Our Services</h1>
        <section className='grid lg:grid-cols-3 place-items-center gap-5 my-5 w-full'>
            <ServiceCard icon={<AiOutlineDesktop size={50}/>}
            title={`Product Development`}
            description={`This may involve modification of an existing product or its presentation, 
            or formulation of an entirely new product that satisfies a newly defined customer want or market niche.`}
            />
            <ServiceCard icon={<BsCodeSlash size={50}/>}
            title={`Custom Software Development`}
            description={`We practice the delivery of superior software solutions development using best practices, the latest technology and delightful user experiences for our customers both local and global.
            `}
            />
            <ServiceCard icon={<BsServer size={50}/>}
            title={`System Maintenance`}
            description={`Our comprehensive Maintenance Services will help you optimize the life-cycle costs of your systems – 
            based on a defined, transparent maintenance scope. For guaranteed availability around the clock and minimized risks.`}
            />
            <ServiceCard icon={<BiMoney size={50}/>}
            title={`Financial Technologies`}
            description={`Axon's Financial Technologies empowers businesses to strategise, 
            build, and leverage evolving technologies to navigate through the digital transformation and create market-ready solutions.`}
            />
            <ServiceCard icon={<AiFillAndroid size={50}/>}
            title={`Mobile Application Development`}
            description={`We provide our clients with user friendly, sleek, 
            productive and easy-to-use mobile solutions. Leverage our mobile app development services to create solutions of any complexity and size.`}
            />
            <ServiceCard icon={<AiOutlineLaptop size={50}/>}
            title={`System-To-System Integration`}
            description={`System Integration Services that seamlessly consolidate disparate technology products and applications, 
            including legacy platforms, can significantly reduce IT complexity and maximize firms’ return of investment.`}
            />
        </section>
    </main>
  )
}

export default Services