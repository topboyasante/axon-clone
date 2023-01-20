import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
    const navLinks = [
        {
            id:0,
            href:'#services',
            navLinks:'Services',
        },
        {
            id:1,
            href:'#projects',
            navLinks:'Projects',
        },
        {
            id:2,
            href:'#our-clients',
            navLinks:'Our Clients',
        },
        {
            id:3,
            href:'',
            navLinks:'Blog',
        },
        {
            id:4,
            href:'',
            navLinks:'About Us',
        },
    ]
  return (
    <nav className=' px-10 py-5 fixed top-[-0.1vh] left-0 w-full h-[7vh] bg-[#f1faee] z-50'>
        <div className='max-w-[1500px] mx-auto flex justify-between items-center'>
                {/* Logo */}
            <section>
                <p className='text-3xl'>axon.</p>
            </section>
            {/* Links */}
            <ul className='hidden lg:flex gap-5 items-center'>
                {navLinks.map((link)=>{
                    return(
                        <a href={link.href}>{link.navLinks}</a>
                    )
                })}
                <button className='border px-4 py-2'>Get In Touch</button>
            </ul>
            {/* Nav Toggle */}
            <AiOutlineMenu size={30} className='lg:hidden'/>
        </div>
    </nav>
  )
}

export default Navbar