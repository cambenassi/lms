import React from 'react';
import { Link } from "react-router-dom";
import HeaderDropdown from './headerDropdown'


const navbar = () => {
  return (

    <nav className='mx-auto grid grid-cols-2 px-2 sm:px-6 lg:px-8 bg-[#0067b1] w-full'>
      <div className='flex items-center justify-start'>
        <h1>BLACKBOARD</h1>
      </div>
      <div className='sticky justify-end'>
        <div className='flex h-16 items-center justify-end p-10 list-none
          md:space-x-6 md:space-y-0 '>
          <HeaderDropdown></HeaderDropdown>
        </div>
      </div>
    </nav>




  );
}
export default navbar;

