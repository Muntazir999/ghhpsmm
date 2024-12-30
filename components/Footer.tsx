import React from 'react'
import { GiSofa } from 'react-icons/gi'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

const Footer = () => {
    return (
        <div className='border-t-2 border-black'>
            <div className='flex justify-between gap-12'>
                <div className='items-center pl-10'>
                    <span className='flex justify-start pt-20 gap-3 items-center text-black font-bold text-3xl pb-3'>
                        <GiSofa color='blue' size={35} />
                        Comforty
                    </span>
                    <span className='flex pb-3 items-center text-black'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, repudiandae ipsa blanditiis ex hic quo.</p>
                    </span>
                    <span className='flex gap-3 items-center'>
                        <FaFacebook color='blue ' />
                        <FaTwitter color='blue' />
                        <FaInstagramSquare color='pink' />
                        <FaPinterest color='red' />
                        <FaYoutube color='red' />
                    </span>
                </div>

                <div className='items-center pl-4 pt-12'>
                    <span className='flex text-black/50'>CATEGORY</span>
                    <span className='flex pt-8 hover:text-blue-500'>Sofa</span>
                    <span className='flex pt-2 hover:text-blue-500'>Armchair</span>
                    <span className='flex pt-2 hover:text-blue-500'>Wing Chair</span>
                    <span className='flex pt-2 hover:text-blue-500'>Desk Chair</span>
                    <span className='flex pt-2 hover:text-blue-500'>Wooden Chair</span>
                    <span className='flex pt-2 hover:text-blue-500'>Park Bench</span>
                </div>

                <div className='items-center pl-10 pt-12'>
                    <span className='flex text-black/50'>SUPPORT</span>
                    <span className='flex pt-8 hover:text-blue-500'>Help & Support</span>
                    <span className='flex pt-2 hover:text-blue-500'>Terms & Conditions</span>
                    <span className='flex pt-2 hover:text-blue-500'>Privacy Policy</span>
                    <span className='flex pt-2 hover:text-blue-500'>Help</span>
                </div>

                <div className='items-center pl-10 pt-12 pr-20'>
                    <span className='flex text-black/50'>NEWSLETTER</span>

                    <div className='flex pt-8 gap-3 items-center'>

                        <textarea name="#" id="#" placeholder='Your Email' className='border w-[300px] text-center items-center h-8'></textarea>
                        <button className='border rounded bg-blue-500 p-2'>Subscribe</button>
                    </div>
                    <span className='flex pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, odio?</span>
                </div>
            </div>

            <div className=' flex justify-center gap-40 items-center p-10'>
                <span>@ 2025 - Blogy - Designed & Develop by <b>Mehdi-Tech</b></span>
                <span className='flex gap-3 items-center pr-40'>
                    <RiVisaLine color='gray' size={50} />
                    <SiAmericanexpress color='gray' size={40} />
                    <FaCcPaypal color='gray' size={50} />
                </span>
            </div>
        </div >
    )
}

export default Footer
