import React from 'react'
import Navbar from '../Components/Navbar'
import Products from './Products'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-screen w-full'>
      <div className='h-16'>
        <Navbar/>
      </div>
      <div className='flex flex-1'>
      <Outlet/>

      </div>
    </div>
  )
}

export default Home