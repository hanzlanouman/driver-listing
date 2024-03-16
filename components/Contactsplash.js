import React from 'react'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";
function Contactsplash() {
  return (
    <div>
        <div className='bg-primary w-full h-56'>
            <div className='flex flex-col justify-center items-center h-full gap-y-4'>
                <h1 className='text-3xl font-extrabold text-white'>Contact Us</h1>
                <div className='flex items-center justify-center gap-2'>
                <Link href='/'>
                <p className='text-white'>Home</p>
                </Link>
                <IoIosArrowForward className='text-white font-bold' />
                <Link href='/'>
                <p className='text-gray-300'>Contact Us</p>
                </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contactsplash