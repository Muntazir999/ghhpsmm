import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
       <div className='flex bg-white h-14 justify-between items-center border-b-2 border-gray-200'>
            <div className='flex justify-start pl-8 gap-5 items-center text-gray-700 '>
                <Link href="/" className='hover:text-blue-700'>Home</Link>
                <Link href="/shop" className='hover:text-blue-700'>Shop</Link>
                <Link href="/products" className='hover:text-blue-700'>Product</Link>
                <Link href="/pages" className='hover:text-blue-700'>Pages</Link>
                <Link href="/about" className='hover:text-blue-700'>About</Link>
            </div>
            <div className='flex justify-end pr-8 gap-4 items-center text-gray-600'>
              <div className='flex items-center gap-1'>
                Contact:
              </div>
              <div className='flex items-center'>
                (808) 555-0111
              </div>
            </div>
          </div>
    </div>
  )
}

export default Navbar
