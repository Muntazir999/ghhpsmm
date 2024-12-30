import React from 'react'
import Image from 'next/image'
import { IoIosCart } from 'react-icons/io';

const Products = () => {
  return (
    <div>
      <fieldset className='pb-20'>
              <div>
                <h1 className=' flex text-4xl justify-start font-bold pl-10 pb-6 pt-10' >All Products</h1>
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
                  <div><Image src='/8.png' alt='image' width={300} height={300} /></div>
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

export default Products
