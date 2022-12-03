import React from 'react'
import { Form } from 'react-router-dom'
import NotificationFrom from './NotificationFrom'

function ProfessorMode() {
  return (
    <div className='w-full h-full flex'>
      <div className='flex w-5/6 justify-center m-10'>
       <NotificationFrom></NotificationFrom>
      </div>
    </div>

  )
}

export default ProfessorMode