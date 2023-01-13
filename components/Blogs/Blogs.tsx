import { BlobOptions } from 'buffer'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
interface props{
    dir:string,
    Heading:string,
}
const Blogs = ({dir,Heading}:props) => {
    const [direction,setdirection]=useState<boolean>(true)
    useEffect(()=>{
        if(dir === "right"){
            setdirection(false);
            return;
        }
    },[])
   
  return (
    <>
    <aside className={`blog__wrapper flex w-[95%] mx-auto flex-1 gap-5 ${direction?"flex-row":"flex-row-reverse"} shadow-2xl md:flex-col`}>
        <div className="image w-[50%] md:w-full">
            <Image src = "/images/steve-johnson-3Sf_G9m0gcQ-unsplash.jpg"
            width={1000}
            height={1000}
            alt="steve-johnson-3Sf_G9m0gcQ-unsplash.jpg"
            ></Image>
        </div>
        <div className="contentwrapper w-[45%] flex flex-col justify-evenly items-center mx-auto md:w-full">
        <h3 className="heading text-center text-xl font-bold xs:text-lg">{Heading}</h3>
        <p className="content text-lg text-justify xs:text-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure sapiente impedit aliquam quaerat eligendi cum natus cumque quibusdam amet, totam odio sed ipsa, repellat aperiam quo? Consequuntur expedita veritatis magnam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, molestias?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, mollitia minus repellat libero odit quaerat tenetur voluptates cumque ea perferendis, hic tempora pariatur nihil voluptatem amet itaque labore ratione fugit!
        </p>
        </div>
    </aside>
    
    </>
  )
}

export default Blogs