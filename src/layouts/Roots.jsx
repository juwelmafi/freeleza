import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Roots = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='min-h-[calc(100vh-287px)] max-w-7xl mx-auto'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Roots;