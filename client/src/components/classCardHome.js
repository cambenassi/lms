import React, { useEffect, useState } from 'react';

function ClassCardHome({ ClassName, Notification }) {
    console.log(Notification)
    return (
        <div className='m-1'>
            <p className='font-semibold text-[#188bbb]'>{ClassName}</p>
            <p className=''>Announcements:</p>
            {Notification.map((e) => (
                <li className='ml-3' key={e}>{e}</li>
            ))}
            <hr className='solid mt-1'></hr>
        </div>
    )
}

export default ClassCardHome