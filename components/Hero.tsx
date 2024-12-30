import Navbar from '@/app/navbar/Navbar'
import Image from 'next/image'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosCart } from 'react-icons/io';

const Hero = () => {
  return (
    <div className='pb-20'>
      <fieldset className='flex justify-between items-center bg-[#F0F2F3] w-[1519px] h-[600px] px-5'>
        <div className='text-black space-y-4'>
          <h1 className='text-[2
            4px]'>
            WELCOME TO CHARITY</h1>
          <p className='text-6xl'><b>Best Furniture <br /> Collection For Your <br /> Interior.</b></p>
          <button className='flex items-center gap-2 bg-blue-800 border rounded-lg m-2 p-2 text-white pt-3'>
            Shop Now
            <FaLongArrowAltRight color='white' />
          </button>
        </div>
        <div>
          <Image src="/1.png" alt="hero-image" width={400} height={400} />
        </div>
      </fieldset>




      <fieldset>
        <div>
          <Image src="/cl.png" alt="nextjs" width={500} height={500} className='w-full px-4' />
        </div>
      </fieldset>



      <fieldset>
        <div>
          <h1 className='text-4xl font-bold pl-10 pb-6' >Featured Products</h1>
        </div>
        <div className='flex justify-around items-center pt-3'>
          {/* card */}
          <div>
            <div><Image src='/2.png' alt='image' width={300} height={300} /></div>
            <div className='flex justify-between items-center pt-2'>
              <span>
                <h1><b>Library Stool Chair</b></h1>
                <p><b>$50</b></p>
              </span>
              <span>
                <IoIosCart className='bg-blue-700' color='white' size={30} />
              </span>
            </div>
          </div>
          <div>
            <div><Image src='/3.png' alt='image' width={300} height={300} /></div>
            <div className='flex justify-between items-center pt-2'>
              <span>
                <h1><b>Library Stool Chair</b></h1>
                <p><b>$50</b></p>
              </span>
              <span>
                <IoIosCart className='bg-blue-700' color='white' size={30} />
              </span>
            </div>
          </div>
          <div>
            <div><Image src='/4.png' alt='image' width={300} height={300} /></div>
            <div className='flex justify-between items-center pt-2'>
              <span>
                <h1><b>Library Stool Chair</b></h1>
                <p><b>$50</b></p>
              </span>
              <span>
                <IoIosCart className='bg-blue-700' color='white' size={30} />
              </span>
            </div>
          </div>
          <div>
            <div><Image src='/5.png' alt='image' width={300} height={300} /></div>
            <div className='flex justify-between items-center pt-2'>
              <span>
                <h1><b>Library Stool Chair</b></h1>
                <p><b>$50</b></p>
              </span>
              <span>
                <IoIosCart className='bg-blue-700' color='white' size={30} />
              </span>
            </div>
          </div>

        </div>
      </fieldset>





      <fieldset>
        <div>
          <h1 className='text-4xl font-bold pl-10 pb-6' >Top Categories</h1>
        </div>
        <div className='flex justify-center gap-8 items-center pt-3'>
          {/* card */}
          <div className="relative">
            <div><Image src='/6.png' alt='image' width={300} height={300} /></div>
            <div className='absolute bottom-0 left-0 right-0 pl-4 text-white bg-black/90 opacity-70'>
              <span>
                <h1 className='text-2xl'>Wing Chair</h1>
                <p>2,789 Products</p>
              </span>
            </div>
          </div>
          <div className="relative">
            <div><Image src='/7.png' alt='image' width={300} height={300} /></div>
            <div className='absolute bottom-0 left-0 right-0 pl-4 text-white bg-black/90 opacity-70'>
              <span>
                <h1 className='text-2xl'>Wing Chair</h1>
                <p>2,789 Products</p>
              </span>
            </div>
          </div>
          <div className="relative">
            <div><Image src='/8.png' alt='image' width={300} height={300} /></div>
            <div className='absolute bottom-0 left-0 right-0 pl-4 text-white bg-black/90 opacity-70'>
              <span>
                <h1 className='text-2xl'>Wing Chair</h1>
                <p>2,789 Products</p>
              </span>
            </div>
          </div>

        </div>
      </fieldset>


      <fieldset>
        <div className='flex justify-center items-center pt-10'>
          <Image src="/hc.png" alt="hot-categories" width={900} height={900} className='w-full pl-4 pr-4' />
        </div>
      </fieldset>



      <fieldset>
        <div>
          <h1 className=' flex text-4xl justify-center font-bold pl-10 pb-6 pt-10' >Our Products</h1>
        </div>
        <div className='grid grid-cols-4 pl-10'>
          {/* card */}
          <div>
            <div><Image src='/12.png' alt='image' width={300} height={300} /></div>
            <div className='flex justify-around pr-12 items-center pt-2'>
              <span>
                <h1><b>Library Stool Chair</b></h1>
                <p><b>$50</b></p>
              </span>
              <span>
                <IoIosCart className='bg-blue-700' color='white' size={30} />
              </span>
            </div>
          </div>
          <div>
            <div><Image src='/3.png' alt='image' width={300} height={300} /></div>
            <div className='flex justify-around pr-12 items-center pt-2'>
              <span>
                <h1><b>Library Stool Chair</b></h1>
                <p><b>$50</b></p>
              </span>
              <span>
                <IoIosCart className='bg-blue-700' color='white' size={30} />
              </span>
            </div>
          </div>
          <div>
            <div><Image src='/4.png' alt='image' width={300} height={300} /></div>
            <div className='flex justify-around pr-12 items-center pt-2'>
              <span>
                <h1><b>Library Stool Chair</b></h1>
                <p><b>$50</b></p>
              </span>
              <span>
                <IoIosCart className='bg-blue-700' color='white' size={30} />
              </span>
            </div>
          </div>
          <div>
            <div><Image src='/5.png' alt='image' width={300} height={300} /></div>
            <div className='flex justify-around pr-12 items-center pt-2'>
              <span>
                <h1><b>Library Stool Chair</b></h1>
                <p><b>$50</b></p>
              </span>
              <span>
                <IoIosCart className='bg-blue-700' color='white' size={30} />
              </span>
            </div>
          </div>
          <div>
            <div><Image src='/6.png' alt='image' width={300} height={300} /></div>
            <div className='flex justify-around pr-12 items-center pt-2'>
              <span>
                <h1><b>Library Stool Chair</b></h1>
                <p><b>$50</b></p>
              </span>
              <span>
                <IoIosCart className='bg-blue-700' color='white' size={30} />
              </span>
            </div>
          </div>
          <div>
            <div><Image src='/10.png' alt='image' width={300} height={300} /></div>
            <div className='flex justify-around pr-12 items-center pt-2'>
              <span>
                <h1><b>Library Stool Chair</b></h1>
                <p><b>$50</b></p>
              </span>
              <span>
                <IoIosCart className='bg-blue-700' color='white' size={30} />
              </span>
            </div>
          </div>
          <div>
            <div><Image src='/11.png' alt='image' width={300} height={300} /></div>
            <div className='flex justify-around pr-12 items-center pt-2'>
              <span>
                <h1><b>Library Stool Chair</b></h1>
                <p><b>$50</b></p>
              </span>
              <span>
                <IoIosCart className='bg-blue-700' color='white' size={30} />
              </span>
            </div>
          </div>
          <div>
            <div><Image src='/12.png' alt='image' width={300} height={300} /></div>
            <div className='flex justify-around pr-12 items-center pt-2'>
              <span>
                <h1><b>Library Stool Chair</b></h1>
                <p><b>$50</b></p>
              </span>
              <span>
                <IoIosCart className='bg-blue-700' color='white' size={30} />
              </span>
            </div>
          </div>

        </div>
      </fieldset>


    </div>
  )
}

export default Hero
