import React from 'react'
import { FaCheck } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";

const Topup = () => {
  return (
    <div className='flex bg-[#272343] h-8 justify-between items-center'>
      <div className='flex justify-start pl-8 gap-5 items-center text-white '>
        <FaCheck />
        Free Shipping On All Orders Over $500
      </div>
      <div className='flex justify-end pr-8 gap-4 items-center text-white'>
        <div className='flex items-center gap-1'>
          Eng
          <IoIosArrowDropdownCircle />
        </div>
        <div className='flex items-center'>
          Faqs
        </div>
        <div className='flex items-center gap-1'>
          <RiErrorWarningLine />
        Need Help
        </div>
      </div>
    </div>
  )
}

export default Topup
