import React from 'react'
import ClientCard from './ClientCard'

function ClientList() {
  const listOfClients=[
    {
      id:1,
      img:'https://ocdn.eu/pulscms-transforms/1/3__ktkpTURBXy9lNTRmNGUxOWYyMGI1ODFkMDc2MmMwYTQwYmVlM2Q3NC5wbmeSlQMAHs0Cps0BfZMFzQSwzQJ2',
      title:'Ghana Revenue Authority'
    },
    {
      id:2,
      img:'https://upload.wikimedia.org/wikipedia/commons/2/29/University_of_Ghana_Medical_Centre_07.jpg',
      title:'UG Medical Center'
    },
    {
      id:3,
      img:'https://www.edc-ent.com/wp-content/uploads/2021/10/013.jpg',
      title:'Maina Soko Hospital'
    },
    {
      id:4,
      img:'https://www.ghanayello.com/img/gh/n/1594894120-51-focos-orthopaedic-hospital.jpg',
      title:'FOCOS Hospital'
    },
    {
      id:5,
      img:'https://www.goldfields-ghana.com/images/careers/tarkwa-mine-village-1-scaled.jpg',
      title:'GoldFields Hospital'
    },
    {
      id:6,
      img:'https://pbs.twimg.com/media/FSjVxDAX0AAORW7?format=jpg&name=large',
      title:'Electoral Commission of Ghana'
    },
  ]
  return (
    <main className='max-w-[1500px] mx-auto lg:h-screen flex flex-col justify-center items-center my-2' id='our-clients'>
      <h1 className='text-3xl text-center py-5'>Our Clients</h1>
      <section className='grid lg:grid-cols-3 place-items-center gap-5'>
        {
          listOfClients.map((client)=>{
            return(
              <ClientCard key={client.id}
              img={client.img}
              title={client.title}/>
            )
          })
        }
      </section>
    </main>
  )
}

export default ClientList