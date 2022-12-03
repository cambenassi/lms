import React from 'react'

function NotificationFrom() {
    return (
        <div className='grid grid-cols-1'>
            <form className='grid grid-cols-2 flex border justify-center'>
                <div className='grid grid-cols-1 justify-items-end p-1 m-1'>
                    <label>
                        Class Name:

                    </label>
                    <label>
                        Header:
                        
                    </label>
                    <label>
                        Category:
                        
                    </label>
                    <label>
                        Due Date:
                        
                    </label>
                </div>
                <div className='grid grid-cols-1 justify-start p-1 m-1'>
                    <input type="text" name="className" />
                    <input type="text" name="header" />
                    <input type="text" name="category" />
                    <input type="date" name="dueDate" />
                </div>

            </form>
        </div>
    )
}

export default NotificationFrom