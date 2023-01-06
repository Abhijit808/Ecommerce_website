import React from 'react'
import { IconBaseProps } from 'react-icons'

const Sub_card_1 = ({Box}:any) => {
  return (
    <div className="cards w-full flex flex-col justify-center items-center gap-4">
    <div className="image w-full h-full flex justify-center items-center">
      {Box}
    </div>
    <div className="content">
      <h4 className='text-md text-center '>Lorem ipsum.</h4>
      <p className='text-center text-sm'>Lorem ipsum dolor sit amet,  </p>
    </div>
  </div>
  )
}

export default Sub_card_1