import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'

const Faqs = () => {
  return (
    <div>
      <fieldset className='p-20 flex flex-col pb-20'>
        <div className='flex justify-center items-center font-bold text-3xl pb-10'>
            What Makes Our Brand Different
        </div>
        <div className='flex justify-around items-center'>
            <div className='flex flex-col justify-start items-center text-blue-900 pb-6 pr-6 pl-6 pt-6  border bg-[#cbaeee] h-60 w-60'>
                <span><TbTruckDelivery size={40} /></span>
                <span className='pt-4 font-bold'>Next Day as Standard</span>
                <span className='pt-8'>Order before 4pm and get your order the next day as standard</span>
            </div>
            <div className='flex flex-col justify-start items-center text-blue-900 pb-6 pr-6 pl-6 pt-6  border bg-[#cbaeee] h-60 w-60'>
                <span><TbTruckDelivery size={40} /></span>
                <span className='pt-4 font-bold'>Next Day as Standard</span>
                <span className='pt-8'>Order before 4pm and get your order the next day as standard</span>
            </div>
            <div className='flex flex-col justify-start items-center text-blue-900 pb-6 pr-6 pl-6 pt-6  border bg-[#cbaeee] h-60 w-60'>
                <span><TbTruckDelivery size={40} /></span>
                <span className='pt-4 font-bold'>Next Day as Standard</span>
                <span className='pt-8'>Order before 4pm and get your order the next day as standard</span>
            </div>
            <div className='flex flex-col justify-start items-center text-blue-900 pb-6 pr-6 pl-6 pt-6  border bg-[#cbaeee] h-60 w-60'>
                <span><TbTruckDelivery size={40} /></span>
                <span className='pt-4 font-bold'>Next Day as Standard</span>
                <span className='pt-8'>Order before 4pm and get your order the next day as standard</span>
            </div>
        </div>
      </fieldset>
    </div>
  )
}

export default Faqs
