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
        <div className={`relative group transition-all`}>
          <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg " className='h-full object-contain'></img>
          <span className={`absolute bg-light_black backdrop-blur-md text-white text-center flex justify-center items-center bottom-0 left-0 right-0 top-36 group-hover:top-0 transition-all`}>Canvas Print</span>
        </div>
        <div className={`relative group transition-all row-span-2`}>
          <img src="/images/WhatsApp Image 2021-03-24 at 2.22.01 PM.jpeg" className='h-full object-cover'></img>
          <span className={`absolute bg-light_black backdrop-blur-md text-white text-center flex justify-center items-center bottom-0 left-0 right-0 top-80 group-hover:top-0 transition-all`}>Canvas Print</span>
        </div>
        <div className={`relative group transition-all`}>
          <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg " className='h-full object-contain'></img>
          <span className={`absolute bg-light_black backdrop-blur-md text-white text-center flex justify-center items-center bottom-0 left-0 right-0 top-36 group-hover:top-0 transition-all`}>Canvas Print</span>
        </div>
        <div className={`relative group transition-all`}>
          <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg " className='h-full object-contain'></img>
          <span className={`absolute bg-light_black backdrop-blur-md text-white text-center flex justify-center items-center bottom-0 left-0 right-0 top-36 group-hover:top-0 transition-all`}>Canvas Print</span>
        </div>
        <div className={`relative group transition-all row-span-2`}>
          <img src="/images/WhatsApp Image 2021-08-13 at 3.02.01 PM.jpeg" className='h-full object-cover'></img>
          <span className={`absolute bg-light_black backdrop-blur-md text-white text-center flex justify-center items-center bottom-0 left-0 right-0 top-80 group-hover:top-0 transition-all`}>Canvas Print</span>
        </div>
        <div className={`relative group transition-all`}>
          <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg " className='h-full object-contain'></img>
          <span className={`absolute bg-light_black backdrop-blur-md text-white text-center flex justify-center items-center bottom-0 left-0 right-0 top-36 group-hover:top-0 transition-all`}>Canvas Print</span>
        </div>
        <div className={`relative group transition-all`}>
          <img src="/images/WhatsApp Image 2021-08-13 at 3.02.03 PM.jpeg" className='h-full object-contain'></img>
          <span className={`absolute bg-light_black backdrop-blur-md text-white text-center flex justify-center items-center bottom-0 left-0 right-0 top-36 group-hover:top-0 transition-all`}>Canvas Print</span>
        </div>
        <div className={`relative group transition-all row-span-2`}>
          <img src="/images/WhatsApp Image 2021-03-24 at 2.22.01 PM.jpeg" className='h-full object-cover'></img>
          <span className={`absolute bg-light_black backdrop-blur-md text-white text-center flex justify-center items-center bottom-0 left-0 right-0 top-80 group-hover:top-0 transition-all`}>Canvas Print</span>
        </div>
        <div className={`relative group transition-all`}>
          <img src="/images/WhatsApp Image 2021-08-13 at 3.02.03 PM.jpeg" className='h-full object-contain'></img>
          <span className={`absolute bg-light_black backdrop-blur-md text-white text-center flex justify-center items-center bottom-0 left-0 right-0 top-36 group-hover:top-0 transition-all`}>Canvas Print</span>
        </div>
        <div className={`relative group transition-all`}>
          <img src="/images/WhatsApp Image 2021-08-13 at 3.02.03 PM.jpeg " className='h-full object-contain'></img>
          <span className={`absolute bg-light_black backdrop-blur-md text-white text-center flex justify-center items-center bottom-0 left-0 right-0 top-36 group-hover:top-0 transition-all`}>Canvas Print</span>
        </div>
        <div className={`relative group transition-all`}>
          <img src="/images/WhatsApp Image 2021-08-13 at 3.02.03 PM.jpeg" className='h-full object-contain'></img>
          <span className={`absolute bg-light_black backdrop-blur-md text-white text-center flex justify-center items-center bottom-0 left-0 right-0 top-36 group-hover:top-0 transition-all`}>Canvas Print</span>
        </div>
        <div className={`relative group transition-all`}>
          <img src="/images/WhatsApp Image 2021-08-13 at 3.02.03 PM.jpeg" className='h-full object-contain'></img>
          <span className={`absolute bg-light_black backdrop-blur-md text-white text-center flex justify-center items-center bottom-0 left-0 right-0 top-36 group-hover:top-0 transition-all`}>Canvas Print</span>
        </div>
        
        
       {/* <img src="/images/WhatsApp Image 2021-03-24 at 2.22.01 PM (1).jpeg"
        className='row-span-2 object-cover h-full hover:scale-95 transition-all'
        ></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg"  className='hover:scale-95 transition-all'></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg" className='hover:scale-95 transition-all'></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.22.01 PM.jpeg"
        className='row-span-2 object-cover h-full hover:scale-95 transition-all'
        ></img>
       <img src="/images/WhatsApp Image 2021-08-13 at 3.01.59 PM.jpeg" className='hover:scale-95 transition-all'></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg" className='hover:scale-95 transition-all row-span-2 object-cover h-full'></img>
       <img src="/images/WhatsApp Image 2021-08-13 at 3.02.01 PM.jpeg"
        className=' hover:scale-95 transition-all row-span-2 object-cover h-full'
        ></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg" className='hover:scale-95 transition-all'></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg" className='hover:scale-95 transition-all h-full object'></img>
       <img src="/images/WhatsApp Image 2021-08-13 at 3.02.02 PM.jpeg" className='hover:scale-95 transition-all'></img>
       <img src="/images/WhatsApp Image 2021-08-13 at 3.02.03 PM.jpeg"
        className='hover:scale-95 transition-all row-span-2 object-cover h-full'
        ></img>
       <img src="/images/WhatsApp Image 2021-03-24 at 2.21.59 PM (1).jpeg" className='hover:scale-95 transition-all'></img>
       <img src="/images/WhatsApp Image 2021-08-13 at 3.02.03 PM.jpeg" className='hover:scale-95 transition-all'></img> */}
    </div>
    </>
  )
}

export default ArtGallery