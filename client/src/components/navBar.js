import React from 'react';
import { Link } from "react-router-dom";


const navbar = () => {
  return (

    <nav className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
      <div className='relative flex h-16 items-center p-10 list-none'>
        <li className='m-5'>
          <Link to='/'>Home</Link>
        </li>
        <li className='m-5'>
          <Link to='/about'>About Us</Link>
        </li>

      </div>

    </nav>




  );
}
export default navbar;