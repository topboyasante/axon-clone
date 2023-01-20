import React from 'react'
import ClientList from '../components/ClientList'
import Hero from '../components/Hero'
import Services from './Services'

function Homepage() {
  return (
    <main>
      {/* hero */}
      <section className="
      w-screen pt-[7vh]">
        <Hero/>
        <Services/>
        <ClientList/>
      </section>
    </main>
  )
}

export default Homepage