import React from 'react'
import Navbar from '../Components/Navbar'
import Products from './Products'

const Home = () => {
  return (
    <div className='h-full'>
      <Navbar/>
      <Products/>
    </div>
  )
}

export default Home