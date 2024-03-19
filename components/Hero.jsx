import React from 'react'
import Image from 'next/image'
import { VscSearch } from 'react-icons/vsc'
import SearchComponent from './search'

function Hero() {

  return (
    <div className='bg-primary lg:h- h-full '>
        <div className='flex items-center justify-between space-10'>
        <div className=" lg:w-[650px] w-full flex flex-col p-32 lg:items-start  items-center justify-center gap-10">
            <h1 className="text-white text-2xl lg:text-4xl font-bold">Find Your Ideal Driver for a Comfortable Ride</h1>

            <div className=''>
            {/* <form className="flex flex-col lg:flex-row items-center justify-center lg:gap-1 gap-3 ">
                <input
                    type="text"
                    placeholder="Search driver"
                    className="p-3 rounded w-48"
                />
                <input
                    type="text"
                    placeholder="Enter Your Location"
                    className="p-3 rounded w-48"
                />
                <input
                    type="text"
                    placeholder="Select a category"
                    className="p-3 rounded w-48"
                />
                <button className="bg-blue-800 text-white px-28 p-3 lg:p-3 rounded flex items-center gap-2">
                    <VscSearch className="text-xl" />
                    Search
                </button>
            </form> */}
            <SearchComponent bgColor='bg-white'/>
        </div>
        </div>

         <div className=' '>
            <Image src="/hero.png" alt="hero" width={600} height={500} 
            className=' object-contain h-[30rem] w-[35rem]'
            />
        </div> 
        
        </div>
    </div>
  )
}

export default Hero