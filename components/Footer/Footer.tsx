import React from 'react'
import Subfooter from "./Subfooter";
const Footer = () => {
  return (
    <div className='mt-10'>
        {/* <footer className='flex flex-1 gap-7  items-center md:flex-col md:items-start'>
          <div className="footer-ele flex flex-col justify-center p-4 gap-7">
            <h3 className='text-2xl '>E-commerce</h3>
            <p className='w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus incidunt earum explicabo officia</p>
            <div className="input flex sm:flex-col sm:w-[70%] sm:gap-4 xs:w-[80%]">
              <input type="text" name="newsletter" id="newsletter" placeholder='Email' className='border-black border-2 rounded-lg p-1'/>
              <button className='text-md bg-red-800 rounded-lg text-white p-2 sm:w-[40%] xs:w-[80%]'>Subscribe</button>
            </div>
          </div>
          <div className="footer-ele flex flex-col gap-4 p-4 justify-center ">
            <h5 className='text-xl p-3 text-center border-blue-600 border-b-2'>Contact</h5>
            <div className="add">
              <p>Address:</p>
              <p>Lorem, ipsum dolor Lorem, ipsum.</p>
            </div>
            <div className="add">
              <p>Phone no:</p>
              <p>0202020202</p>
            </div>
            <div className="add">
              <p>Email:</p>
              <p>abc@outlook.com</p>
            </div>
          </div>
          <div className="footer-ele flex flex-col p-4 gap-2 justify-center items-center">
            <h5 className='text-xl p-3 text-center border-blue-600 border-b-2'>Quicklinks</h5>
              <li className='list-none hover:underline cursor-pointer'>lorem</li>
              <li className='list-none hover:underline cursor-pointer'>lorem</li>
              <li className='list-none hover:underline cursor-pointer'>lorem</li>
              <li className='list-none hover:underline cursor-pointer'>lorem</li>
              <li className='list-none hover:underline cursor-pointer'>lorem</li>
              <li className='list-none hover:underline cursor-pointer'>lorem</li>
            
          </div>
        </footer> */}
        <Subfooter/>
    </div>
  )
}

export default Footer