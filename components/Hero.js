import React from 'react'
import { VscSearch } from 'react-icons/vsc'

function Hero() {
  return (
    <div className='bg-primary h-screen '>
        <div className='p-30'>
        <div className=" max-w-[800px]  flex flex-col p-32 items-start justify-center gap-10">
            <h1 className="text-white text-4xl font-bold">Find The Perfect Driver To Get a Comfortable Ride.</h1>

            <div className=''>
            <form className="flex flex-col lg:flex-row items-center justify-center gap-4">
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
                <button className="bg-blue-800 text-white p-3 rounded flex items-center gap-2">
                    <VscSearch className="text-xl" />
                    Search
                </button>
            </form>
        </div>
        </div>

        <div>
        </div>
        
        </div>
    </div>
  )
}

export default Hero