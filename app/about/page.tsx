import React from 'react'
import Image from 'next/image'
import Faqs from '@/components/Faqs'

const page = () => {
  return (
    <div>
      <fieldset className='flex pt-20 pb-10 px-6 gap-8 justify-center'>
        <div className='flex flex-col bg-[#007580] text-white justify-center items-start w-1/3 px-6 '>
          <span className='text-2xl font-bold pb-8'>About Us - Comforty</span>
          <span className='pb-36'>At Comforty, we believe that the right chair can transform your space and elevate your comfort. At Comforty, we believe that the right chair can transform your space and elevate your comfort. At Comforty, we believe that the right chair can transform your space and elevate your comfort.</span>
          <span className='border bg-[#57e9f6] p-2'>View Collection</span>
        </div>
        <div>
          <Image src='/4.png' alt='img' width={450} height={450} />
        </div>
      </fieldset>



      <Faqs />

      <fieldset className='pb-10'>
      <div>
          <h1 className='text-4xl font-bold pl-10 pb-6' >Our Popular Products</h1>
        </div>
        <div className='flex justify-center items-center pt-3 gap-5 pr-8 pl-8'>
          <div>
            <div><Image src='/12.png' alt='image' width={800} height={800} /></div>
            <div className='flex justify-between items-center pt-2'>
              <span>
                <h1><b>Sofa</b></h1>
                <p><b>$50</b></p>
              </span>
            </div>
          </div>
          <div>
            <div><Image src='/13.png' alt='image' width={400} height={400} /></div>
            <div className='flex justify-between items-center pt-2'>
              <span>
                <h1><b>Daddy Chair</b></h1>
                <p><b>$50</b></p>
              </span>
            </div>
          </div>
          <div>
            <div><Image src='/15.png' alt='image' width={400} height={400} /></div>
            <div className='flex justify-between items-center pt-2'>
              <span>
                <h1><b>Daddy Chair</b></h1>
                <p><b>$50</b></p>
              </span>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  )
}

export default page
