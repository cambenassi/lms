import React from 'react'

import GroupCard from './groupCard'

import cam from './../images/cam.jpeg'
import caleb from './../images/Caleb.jfif'

export default function aboutUs() {
  return (
    <>
        <div id="nav" class="w-full text-gray-600 flex justify-center pt-5 pb-4 text-5xl border-b-2 border-black drop-shadow-sm">
            About The Team
        </div>
        <div id="cardsGrid" class="grid grid-cols-3 place-items-center pt-5">
            <div class="">
                <GroupCard name={"Cam Benassi"} link={"https://www.linkedin.com/in/cambenassi/"} role="Full Stack Engineer" img={cam}/>
                <GroupCard name={"Alvin Tran"}/>
            </div>
            <div class="">
                <GroupCard name={"Caleb Bergen"} link={"https://www.linkedin.com/in/caleb-bergen-62b395236/"} role="Full Stack Engineer"
                img={caleb}/>
                <GroupCard name={"4"}/>
            </div>
            <div class="">
                <GroupCard name={"5"}/>
                <GroupCard name={"6"}/>
            </div>
        <div id="cardsGrid" class="w-full grid grid-cols-4 place-items-center pt-5">
                <div><GroupCard name={"Cam Benassi"} link={"https://www.linkedin.com/in/cambenassi/"} role="Full Stack Engineer" img={cam}/></div>
                <div class="col-span-1"><GroupCard name={"5"}/></div>
                <div class="col-span-2"><GroupCard name={"5"}/></div>
                <div class="col-span-2"><GroupCard name={"5"}/></div>
                <div class="col-span-2"><GroupCard name={"5"}/></div>
                
        </div>
        <div class="w-full inline justify-center text-center ">
            <h1 class="text-3xl">Project Description</h1>
            <p class="w-[75%] justify-center text-center pl-[25%] mb-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div class="w-full inline justify-center text-center">
            <h1 class="text-3xl">Project Background</h1>
            <p class="w-[75%] justify-center text-center pl-[25%] mb-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div class="w-full inline justify-center text-center">
            <h1 class="text-3xl">Important Links</h1>
            <div class="flex justify-center mb-20 mt-4">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 mr-2">Project Description</button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 mr-2">SRS</button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 mr-2">Prototype</button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 mr-2">Domain Search Bibliography</button>
            </div>
        </div>
    </>
  )
}
