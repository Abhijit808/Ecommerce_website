import React from 'react'

const Subcomponent = () => {
    return (
        <li className='w-full'>
            <p className='text-lg text-center p-4 font-bold underline'>Headings</p>
            <ul className='flex flex-col gap-2'>
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