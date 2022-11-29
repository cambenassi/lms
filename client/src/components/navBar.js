import React from 'react';
import { Link } from "react-router-dom";
import HeaderDropdown from './headerDropdown'
import UmlLogo from '../images/uml.png'

const navbar = () => {
  return (

    <nav className='m-auto grid auto-rows-auto grid-flow-row grid-cols-2 px-2 sm:px-6 lg:px-8 bg-[#0067b1] w-full '>
      <div className='flex items-center'>
        <div className='grid grid-cols-4'>
          <div className='flex justify-end mr-3' >
            <img src={UmlLogo} className='h-16'></img>
          </div>
          <div className='grid grid-rows-1 col-span-3 '>
            <p className='font-serif font-bold text-white text-lg'>
              University of Massachusetts Lowell<br></br>
              Blackboard Learning Management System
            </p>
          </div>
        </div>


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

