import React from 'react'
import Slider from '../components/slider/Slider'
import Imagegallery from '../components/ImageGallery/Imagegallery'
import styles from "../styles/Home.module.css"
import Card_2 from "../components/Card_2/Card_2"
import ArtGallery from '../components/ArtGallery/ArtGallery'
import Image from 'next/image'
const images: string[] = ["/images/adrianna-geo-1rBg5YSi00c-unsplash.jpg", "/images/europeana-5TK1F5VfdIk-unsplash.jpg", "/images/jene-stephaniuk--MCrF6hnojU-unsplash.jpg", "/images/adrianna-geo-1rBg5YSi00c-unsplash.jpg","/images/windows-L0xLAqyz4N4-unsplash.jpg"]
const Products = () => {
  return (
    <div className='flex flex-col gap-10'>
    <main className={` mt-10 ${styles.main_section} mx-auto w-[90vw] flex justify-center flex-wrap gap-8 relative`}>
          <div className="slider w-[50%]">
            <Slider images={images}></Slider>
          </div>
          <Imagegallery/>
        </main>
        <aside className='art__work w-[90%] mx-auto'>
          <h3 className='text-center text-2xl mb-10 font-bold'>Popular Art Work</h3>
            <ArtGallery/>
         </aside>
        <aside className='three-formates w-[90%] mx-auto'>
          <div className="available">
            <h3 className='text-2xl font-bold text-center'>Available in Three Formates</h3>
          </div>
          <div className='flex gap-7 mt-10'>

          <div className="card ">
            <Image src="/images/WhatsApp Image 2021-03-24 at 2.22.00 PM.jpeg"
             alt='WhatsApp Image 2021-03-24 at 2.22.00 PM.jpeg'
             width={300}
             height={600}
             />
            <div className="content mt-5 flex flex-col gap-3 w-[100%] p-2">
              <h3 className='text-xl text-center'>Rolled Canvasprint Without Frame</h3>
              <p className='text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugit pariatur natus et consectetur vero accusantium tenetur repellendus delectus. Aliquam omnis voluptate officiis dolor, nulla veritatis inventore quibusdam optio excepturi.</p>
            </div>
             </div>
          <div className="card ">
            <Image src="/images/WhatsApp Image 2021-03-24 at 2.22.00 PM.jpeg"
             alt='WhatsApp Image 2021-03-24 at 2.22.00 PM.jpeg'
             width={300}
             height={600}
             />
            <div className="content mt-5 flex flex-col gap-3 w-[100%] p-2">
              <h3 className='text-xl text-center'>Rolled Canvasprint Without Frame</h3>
              <p className='text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugit pariatur natus et consectetur vero accusantium tenetur repellendus delectus. Aliquam omnis voluptate officiis dolor, nulla veritatis inventore quibusdam optio excepturi.</p>
            </div>
             </div>
          <div className="card ">
            <Image src="/images/WhatsApp Image 2021-03-24 at 2.22.00 PM.jpeg"
             alt='WhatsApp Image 2021-03-24 at 2.22.00 PM.jpeg'
             width={300}
             height={600}
             />
            <div className="content mt-5 flex flex-col gap-3 w-[100%] p-2">
              <h3 className='text-xl text-center'>Rolled Canvasprint Without Frame</h3>
              <p className='text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugit pariatur natus et consectetur vero accusantium tenetur repellendus delectus. Aliquam omnis voluptate officiis dolor, nulla veritatis inventore quibusdam optio excepturi.</p>
            </div>
             </div>
          <div className="card ">
            <Image src="/images/WhatsApp Image 2021-03-24 at 2.22.00 PM.jpeg"
             alt='WhatsApp Image 2021-03-24 at 2.22.00 PM.jpeg'
             width={300}
             height={600}
             />
            <div className="content mt-5 flex flex-col gap-3 w-[100%] p-2">
              <h3 className='text-xl text-center'>Rolled Canvasprint Without Frame</h3>
              <p className='text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugit pariatur natus et consectetur vero accusantium tenetur repellendus delectus. Aliquam omnis voluptate officiis dolor, nulla veritatis inventore quibusdam optio excepturi.</p>
            </div>
             </div>
          </div>
        </aside>
        <div className="wall flex flex-col gap-3 w-[80%] mx-auto">
          <h3 className='flex text-2xl font-bold '>Wall By Art</h3>
        <aside className="wall__Art__by__event grid grid-cols-3 gap-10">
         <Card_2 text="House Warming"/>
         <Card_2 text="Birthday Gifts"/>
         <Card_2 text="Corporate Gifting"/>
         <Card_2 text="Bedroom Wall art"/>
         <Card_2 text="Livingroom Wall art"/>
         <Card_2 text="Panaromic Wall art"/>
        </aside>
        </div>
    </div>
  )
}

export default Products