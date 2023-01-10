import React from 'react'

const Subcomponent = () => {
    return (
        <li className=''>
            <p className='text-lg text-center p-2 font-bold underline'>Headings</p>
            <ul className='flex flex-col gap-1'>
                <li className='underline cursor-pointer'>Link 1</li>
                <li className='underline cursor-pointer'>Link 1</li>
                <li className='underline cursor-pointer'>Link 1</li>
                <li className='underline cursor-pointer'>Link 1</li>
                <li className='underline cursor-pointer'>Link 1</li>
            </ul>
        </li>
    )
}

export default Subcomponent