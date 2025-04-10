import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=''>
    <div className='flex flex-col sm:flex-row justify-evenly items-center gap-4 sm:gap-30 md:gap-40 lg:gap-150 xl:gap-220'>
      <Link to={'/'}><img className='sm:w-60 w-40 sm:h-48 h-34' src={logo} alt="Logo"/> </Link>
      <ul className='flex text-lg  gap-15 p-5'>
        <Link to={'/about'}><li className='cursor-pointer hover:-translate-y-1 hover:text-red-500 hover:text-xl transition-all duration-300'>About</li></Link>
       <Link to={'/wishlist'}> <li className='cursor-pointer hover:-translate-y-1 hover:text-red-400 hover:text-xl transition-all duration-300'>Wishlist</li> </Link>
      </ul>
    </div>
    </nav>
  );
};

export default Navbar;