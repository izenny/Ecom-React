
import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Navbar section */}
      <div className='h-16'>
        <Navbar />
      </div>

      {/* Main content with flex-grow to push footer to the bottom */}
      <div className='flex flex-col flex-grow'>
        <Outlet />
      </div>

      {/* Footer always at the bottom */}
      <Footer />
    </div>
  );
}

export default Home;
