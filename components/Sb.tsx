import Image from 'next/image'
import React from 'react'

const Sb = () => {
    return (
        <div>
            <fieldset className='flex flex-col justify-center items-center pt-8 pb-4 bg-black/30'>
                <div className='text-4xl font-bold'>
                    <h1>Our Subscribe to the Newsletter</h1>
                </div>
                <div className='flex pt-8 items-center gap-2 pb-4'>
                    <textarea name="" id="" placeholder='Email Address...' className='border-b-2 h-6 m-2'>

                    </textarea>
                    <button className='border-b-2 '>
                        SUBMIT
                    </button>
                </div>
                <div className='pt-8 text-3xl font-bold pb-4'>
                    <h1>Follow Products And Discounts On Instagram</h1>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <Image src='/3.png' alt='image' width={250} height={250} />
                    <Image src='/4.png' alt='image' width={250} height={250} />
                    <Image src='/5.png' alt='image' width={250} height={250} />
                    <Image src='/6.png' alt='image' width={250} height={250} />
                    <Image src='/7.png' alt='image' width={250} height={250} />
                </div>
            </fieldset>
        </div>
    )
}

export default Sb
