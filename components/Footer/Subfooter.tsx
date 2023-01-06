import Image from 'next/image'
import React from 'react'

const subfooter = () => {
  return (
    <>
    <footer className='flex items-center justify-between bg-green-500'>
      <div className='text-xl p-2 text-white '>
      @copywrite {new Date().getFullYear()}
    </div>
    <div className="icons p-3">
      <Image
      src = "/images/xgy0BhATKD6QcYmZVfi8igDVam63zOA4WUpsX0hU.png"
      width={300}
      alt = "xgy0BhATKD6QcYmZVfi8igDVam63zOA4WUpsX0hU.png"
      height={300}
      />

    </div>
    </footer>
    </>
  )
}

export default subfooter