import Image from 'next/image'
import React from 'react'

const ArtGallery = () => {
  return (
    <>
    <div className='grid grid-cols-3 gap-3 cursor-pointer'>
        {/* <Image src = "/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg" alt='WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg'
        height={500}
        width={500}
        /> */}
       <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg " className='hover:-translate-y-3'></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.22.01 PM (1).jpeg"
        className='row-span-2 object-cover h-full hover:-translate-y-3'
        ></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg"className='hover:-translate-y-3'></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg"className='hover:-translate-y-3'></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.22.01 PM.jpeg"
        className='row-span-2 object-cover h-full hover:-translate-y-3'
        ></img>
       <img src="/images/WhatsApp Image 2021-08-13 at 3.01.59 PM.jpeg"className='hover:-translate-y-3'></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg" className='row-span-2 hover:-translate-y-3 object-cover h-full'></img>
       <img src="/images/WhatsApp Image 2021-08-13 at 3.02.01 PM.jpeg"
        className='row-span-2 object-cover h-fullhover:-translate-y-3'
        ></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg"className='hover:-translate-y-3'></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg" className='hover:-translate-y-3 h-full object'></img>
       <img src="/images/WhatsApp Image 2021-08-13 at 3.02.02 PM.jpeg"className='hover:-translate-y-3'></img>
       <img src="/images/WhatsApp Image 2021-08-13 at 3.02.03 PM.jpeg"
        className='row-span-2 object-cover h-full hover:-translate-y-3'
        ></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg"className='hover:-translate-y-3'></img>
       <img src="/images/WhatsApp Image 2021-08-13 at 3.02.03 PM.jpeg"className='hover:-translate-y-3'></img>
    </div>
    </>
  )
}

export default ArtGallery