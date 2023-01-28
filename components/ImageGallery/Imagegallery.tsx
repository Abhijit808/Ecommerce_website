import Image from 'next/image'
import React from 'react'

const Imagegallery = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-3'>
        <div className="heading flex flex-col gap-3">
           <h3 className='text-xl text-center font-bold'>Single Frame</h3>
           <div className="flex gap-2 flex-wrap">
           <Image src = "/images/WhatsApp Image 2021-03-24 at 2.21.58 PM.jpeg"
           alt='WhatsApp Image 2021-03-24 at 2.21.58 PM.jpeg'
           height={150}
           width={150}
           ></Image> 
           <Image src = "/images/WhatsApp Image 2021-03-24 at 2.21.58 PM.jpeg"
           alt='WhatsApp Image 2021-03-24 at 2.21.58 PM.jpeg'
           height={150}
           width={150}
           ></Image> 
           <Image src = "/images/WhatsApp Image 2021-03-24 at 2.21.58 PM.jpeg"
           alt='WhatsApp Image 2021-03-24 at 2.21.58 PM.jpeg'
           height={150}
           width={150}
           ></Image> 
           </div>
        </div>
        <div className="heading bg">
           <h3 className='text-xl text-center font-bold'>Three Frame</h3>
           <div className="flex gap-2 flex-wrap">
           <Image src = "/images/WhatsApp Image 2021-03-24 at 2.21.58 PM.jpeg"
           alt='WhatsApp Image 2021-03-24 at 2.21.58 PM.jpeg'
           height={150}
           width={150}
           ></Image> 
           <Image src = "/images/WhatsApp Image 2021-03-24 at 2.21.58 PM.jpeg"
           alt='WhatsApp Image 2021-03-24 at 2.21.58 PM.jpeg'
           height={150}
           width={150}
           ></Image> 
           <Image src = "/images/WhatsApp Image 2021-03-24 at 2.21.58 PM.jpeg"
           alt='WhatsApp Image 2021-03-24 at 2.21.58 PM.jpeg'
           height={150}
           width={150}
           ></Image> 
           </div>
        </div>
        <div className="heading bg">
           <h3 className='text-xl text-center font-bold'>Five Frame</h3>
           <div className="flex gap-2 flex-wrap">
           <Image src = "/images/WhatsApp Image 2021-03-24 at 2.21.58 PM.jpeg"
           alt='WhatsApp Image 2021-03-24 at 2.21.58 PM.jpeg'
           height={150}
           width={150}
           ></Image> 
           <Image src = "/images/WhatsApp Image 2021-03-24 at 2.21.58 PM.jpeg"
           alt='WhatsApp Image 2021-03-24 at 2.21.58 PM.jpeg'
           height={150}
           width={150}
           ></Image> 
           <Image src = "/images/WhatsApp Image 2021-03-24 at 2.21.58 PM.jpeg"
           alt='WhatsApp Image 2021-03-24 at 2.21.58 PM.jpeg'
           height={150}
           width={150}
           ></Image> 
           </div>
        </div>
    </div>
  )
}

export default Imagegallery