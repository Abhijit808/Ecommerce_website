import React from 'react'
import Subfooter from "./Subfooter";
import { CiPlay1 } from "react-icons/ci";
import { BsFacebook, BsInstagram, BsPinterest, BsTwitter } from "react-icons/bs";
import Image from 'next/image';
const Footer = () => {
  return (
    <div className='mt-10 bg-slate-900 flex flex-col gap-10'>
        <footer className="w-[80%] mx-auto flex flex-col gap-10">
        <div className="footer__r-1 flex gap-44 items-start">
          <div className="footer-ele flex flex-col p-4 gap-2 justify-center items-start">
            <h5 className='text-xl p-3 text-center border-blue-600 border-b-2 text-white'>Link</h5>
            <li className='list-none hover:underline cursor-pointer text-left text-white'>View All Products</li>
            <li className='list-none hover:underline cursor-pointer text-left text-white'>Search</li>
            <li className='list-none hover:underline cursor-pointer text-left text-white'>Track order</li>
            <li className='list-none hover:underline cursor-pointer text-left text-white'>Return & refund policy</li>
            <li className='list-none hover:underline cursor-pointer text-left text-white'>Privacy Policy</li>
            <li className='list-none hover:underline cursor-pointer text-left text-white'>Terms of Service</li>

          </div>
          <div className="footer-ele flex flex-col p-4 gap-2 justify-center items-start">
            <h5 className='text-xl p-3 text-center border-blue-600 border-b-2 text-white'>Artist Corner</h5>
            <li className='list-none hover:underline cursor-pointer text-white'>Artist login</li>
            <li className='list-none hover:underline cursor-pointer text-white'>Tracking Order</li>
            <li className='list-none hover:underline cursor-pointer text-white'>Artist Billing Section</li>
            <li className='list-none hover:underline cursor-pointer text-white'>Artist submission</li>
          </div>
          <div className="footer-ele flex flex-col p-4 gap-2 justify-center items-start">
            <h5 className='text-xl p-3 text-center border-blue-600 border-b-2 text-white'>Contact Us</h5>
            <li className='list-none hover:underline cursor-pointer text-white'>Email:</li>
            <li className='list-none hover:underline cursor-pointer text-white'>lorem@gmail.com</li>
            <li className='list-none hover:underline cursor-pointer text-white'>About us</li>
          </div>
        </div>
        <div className='footer__r2 w-[100%] mx-auto flex gap-80 items-center'>
          <div className="input relative">
            <h3 className='text-white text-xl'>Subscribe To our Products</h3>
            <input type="text" name="newsletter" id="newsletter" placeholder='Email' className=' border-black border-2 w-96 p-2' />
            <CiPlay1 className="absolute bottom-2  right-5 text-2xl font-bold" />
          </div>
          <div className="socialicons flex gap-2 items-center">
            <BsFacebook className='text-white text-2xl' />
            <BsInstagram className='text-white text-2xl' />
            <BsTwitter className='text-white text-2xl' />
            <BsPinterest className='text-white text-2xl' />
          </div>
        </div>
        <div className='footer_r-3 flex gap-96'>
          <div className="btns flex gap-10 items-center">
            <div className="btn-1">
              <h4 className='text-white '>Country/region</h4>
              <button className='bg-transparent border-2 border-white rounded-xl text-white px-4 py-2'>India(INR)</button>
            </div>
            <div className="btn-2">
              <h4 className='text-white '>Language</h4>
              <button className='bg-transparent border-2 border-white rounded-xl text-white px-4 py-2'>English</button>
            </div>
          </div>
          <div className="payment">
            <div className="icons p-3">
              <Image
                src="/images/xgy0BhATKD6QcYmZVfi8igDVam63zOA4WUpsX0hU.png"
                width={250}
                alt="xgy0BhATKD6QcYmZVfi8igDVam63zOA4WUpsX0hU.png"
                height={250}
              />

            </div>
          </div>
        </div>
      </footer>
      <Subfooter/>
    </div>
  )
}

export default Footer