import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


function Footer() {
  return (
    <div className='flex p-10 flex-col items-center bg-[green] text-white'>
      <h1 className="text-[40px]">Contact Us</h1>
     
        <h1 className="text-[20px] "> <IoIosMail /> resuma@outlook.com</h1>  
     
      <div>
        <h1 className="text-[20px]"> <FaPhoneAlt /> 8590319905</h1>
      </div>
      <h1 className="text-[25px] mt-2">Connect With Us</h1>
      <div className="flex gap-2 text-2xl mt-2">
        <FaWhatsapp />
        <FaFacebookSquare />
        <FaLinkedin />
      </div>
    </div>
  )
}

export default Footer