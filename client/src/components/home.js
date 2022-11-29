import React from 'react'
import HomeCardHeader from './homeCardHeader'

export default function home() {
  return (
    <div className='grid grid-cols-3 border m-10 justify-center'>
      <div>
        Test
      </div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div className='flex border content-start'>
      <HomeCardHeader name="Testing"></HomeCardHeader>

      </div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      

    </div>
  )
}
