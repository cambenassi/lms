import React from 'react';
import { Link } from "react-router-dom";


const navbar = () => {
  return (

    <nav className='mx-auto px-2 sm:px-6 lg:px-8 bg-blue-300 w-full'>
      <div className='sticky'>
        <div className='flex h-16 items-center justify-center p-10 list-none
          md:space-x-6 md:space-y-0 '>
          <li className='m-5 hover:drop-shadow-lg hover:text-slate-500 hover:underline'>
            <Link to='/'>Home</Link>
          </li>
          <li className='m-5 hover:drop-shadow-lg hover:text-slate-500 hover:underline'>
            <Link to='/about'>About Us</Link>
          </li>

        </div>
      </div>
    </nav>




  );
}
export default navbar;

