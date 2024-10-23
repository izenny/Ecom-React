import React from 'react'
import Navbar from '../Components/Navbar'
import Products from './Products'

const Home = () => {
  return (
    <div className='h-full'>
      <div className='h-16'>
        <Navbar/>
      </div>
      <div className='flex flex-1'>
      <Products/>

      </div>
    </div>
  )
}

export default Home