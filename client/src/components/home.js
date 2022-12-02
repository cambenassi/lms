import React from 'react'
import HomeCard from './homeCard'
import './home.css'

export default function home() {


  var MsgBody = (
    <div className='homeBodyCard'>
      <p>Courses with messages:</p>
      <p className='italic justify-self-center'>You have no new unread messages!</p>
    </div>
  )

  var AncBody = (
    <div className='homeBodyCard'>
      <p className='italic justify-self-center'>No Institution Announcements have been posted in the last 7 days.</p>
    </div>
  )

  var coursesBody = (
    <div className='homeBodyCard'>
      <p>Courses where you are: Student</p>
    </div>
  )

  var libResBody = (
    <div className='homeBodyCard'>

      <p>Search the UML Library Database <a href='https://www.uml.edu/library/'>https://www.uml.edu/library/</a></p>
      <p>A-Z Databases <a href='https://libguides.uml.edu/az.php'>https://libguides.uml.edu/az.php</a></p>
      <p>Research Guides <a href='https://libguides.uml.edu/'>https://libguides.uml.edu/</a></p>
      <p>FAQ’s <a href='https://uml.libanswers.com/search/'>https://uml.libanswers.com/search/</a></p>
      <p>Ask a Librarian – <a href='ask@uml.libanswers.com'>ask@uml.libanswers.com</a></p>
      <br></br>
      <p style={{ color: 'rgb(12,81,255)' }}>*Students – Some courses on Blackboard will have direct links
        to library resources that you may need to login to access. If
        you are getting an error when trying to access direct links to
        database articles, please notify <a href='ask@uml.libanswers.com'>
          ask@uml.libanswers.com</a> and they can assist.</p>
    </div>
  )

  var orgBody = (
    <div className='homeBodyCard'>
      <p className='italic justify-self-center'>You are not currently participating in any organizations.</p>
    </div>
  )

  var techSupBody = (
    <div className='homeBodyCard'>
       <p className='italic justify-self-center'>Tech Support is current down</p>
    </div>
  )

  return (
    <div className='grid grid-cols-3 gap-3 border m-10 justify-center'>
      <div id="homeDiv1" className='mx-3'>
        <HomeCard name="My Messages" body={MsgBody}></HomeCard>
        <HomeCard name="My Announcements" body={AncBody}></HomeCard>
      </div>
      <div id="homeDiv1">
        <HomeCard name="My Courses" body={coursesBody}></HomeCard>
        <HomeCard name="UML Library Resources" body={libResBody}></HomeCard>
        <HomeCard name="My Organizations" body={orgBody}></HomeCard>
      </div>
      <div id="homeDiv1" className='mx-3'>
        <HomeCard name="Tech Support" body={techSupBody}></HomeCard>
      </div>






    </div>
  )
}
