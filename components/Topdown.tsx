import React from 'react'
import { GiSofa } from "react-icons/gi";
import { IoIosCart } from "react-icons/io";


const Topdown = () => {
    return (
        <div className='flex bg-[#a59ce2] h-16 justify-between items-center'>
            <div className='flex justify-start pl-8 gap-3 items-center text-black text-5xl'>
                <GiSofa className='text-blue-700' size={65} />
                Comforty
            </div>

            <div className='flex justify-end pr-8 gap-2 items-center text-white'>
                <div className='flex justify-between items-center pl-2 border rounded-2xl bg-black h-12 w-[150px] pr-4 text-lg'>
                    <IoIosCart size={35} />
                    Cart
                    <span className='border rounded-full bg-blue-600 text-center pr-2 pl-2'>2</span>
                </div>

            </div>

        </div>
    )
}

export default Topdown
