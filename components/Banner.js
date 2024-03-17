import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className=" bg-blue-700  lg:h-[500px] h-full w-full mb-20">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="">
          <Image
            src="/banner.png"
            alt="banner"
            width={650}
            height={600}
            className="
           lg-w-full  w-[30rem] lg:h-[30rem] h-[20rem] hover:scale-105
            rounded-lg  duration-500 transition-all cursor-pointer"
          />
        </div>
        <div className="space-y-4 p-12 flex flex-col ">
          <h1 className="text-white text-4xl font-bold  ">
            Looking for the right Driver?
          </h1>
          <p className="text-gray-300 text-2xl">
            We can help. Please call our member team at{" "}
            <span className="text-white font-bold">400-787-8880</span>
          </p>
         <div>
         <button className="rounded p-2 px-4 text-white bg-sky-500">
            <span className="lg:block">Add a Listing</span>
          </button>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
