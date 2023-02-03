import Image from 'next/image'
import React from 'react'

const ArtGallery = () => {
  return (
    <>
    <div className='grid grid-cols-3 gap-3'>
        {/* <Image src = "/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg" alt='WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg'
        height={500}
        width={500}
        /> */}
       <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg"></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.22.01 PM (1).jpeg"
        className='row-span-2 object-cover h-full'
        ></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg"></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg"></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.22.01 PM.jpeg"
        className='row-span-2 object-cover h-full'
        ></img>
       <img src="/images/WhatsApp Image 2021-08-13 at 3.01.59 PM.jpeg"></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg" className='row-span-2 object-cover h-full'></img>
       <img src="/images/WhatsApp Image 2021-08-13 at 3.02.01 PM.jpeg"
        className='row-span-2 object-cover h-full'
        ></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg"></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg" className='h-full object-cover'></img>
       <img src="/images/WhatsApp Image 2021-08-13 at 3.02.02 PM.jpeg"></img>
       <img src="/images/WhatsApp Image 2021-08-13 at 3.02.03 PM.jpeg"
        className='row-span-2 object-cover h-full'
        ></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg"></img>
       <img src="/images/WhatsApp Image 2021-08-13 at 3.02.03 PM.jpeg"></img>
    </div>
    </>
  )
}

export default ArtGallery