import React from 'react'


function homeCardHeader(props) {
  return (
    <div className='flex bg-[#f8f8f8] justify-center my-3 font-serif '>
        <p className=''>{props.name}</p>
    </div>
  )
}

export default homeCardHeader