import React from 'react'
import Navbar from './Navbar'

function Home() {
  return (
      <>
          <header className='p-5 flex items-center border-2 bg-white'>
              <Navbar/>
          </header>
          <main>
              Main Content
          </main>
      </>
  )
}

export default Home