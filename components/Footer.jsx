import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { IoLogoApple } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";


function Footer() {
  return (
    <div>
      <div className="mt-10 h-full bg-gray-800 p-32">
        <div className="flex justify-center flex-col lg:flex-row gap-20">
          <div className="flex flex-col gap-8">
            <h1 className="text-white text-xl font-bold">Company</h1>
            <div className="flex flex-col gap-3 cursor-pointer ">
              <p className="text-gray-400">About Us</p>
              <p className="text-gray-400">Contact Us</p>
              <p className="text-gray-400">Careers</p>
              <p className="text-gray-400">Blog</p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-white text-xl font-bold">Useful Links</h1>
            <div className="flex flex-col gap-3 cursor-pointer ">
              <p className="text-gray-400">Home</p>
              <p className="text-gray-400">Listing</p>
              <p className="text-gray-400">About Us</p>
              <p className="text-gray-400">Contact Us</p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-white text-xl font-bold">Download Apps</h1>
            <div className="flex flex-col gap-3  ">
              <div className="text-white cursor-pointer  flex items-center justify-center gap-1 bg-sky-500 rounded px-10 p-3">
              <IoLogoApple  className="text-xl"/>
                Google Play</div>
                <div className="text-black cursor-pointer  flex items-center justify-center gap-1 bg-white rounded px-10 p-3">
              <FaGooglePlay />
                App Store</div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-white  text-xl font-bold">Subscribe</h1>
            <input
              type="text"
              placeholder="Email"
              className="bg-white text-gray-400 p-3 rounded"
            />
            {/* social links */}

            <div className="flex items-center lg:justify-start justify-center gap-2 ">
              <div className=" bg-slate-600 rounded-full hover:bg-primary duration-500 cursor-pointer p-2 lg:p-3">
                <FiFacebook className="text-white text-lg lg:text-2xl" />
              </div>
              <div className=" bg-slate-600 rounded-full hover:bg-primary duration-500 cursor-pointer p-2 lg:p-3">
                {" "}
                <FiTwitter className="text-white text-lg lg:text-2xl" />
              </div>
              <div className=" bg-slate-600 rounded-full hover:bg-primary duration-500 cursor-pointer p-2 lg:p-3">
                {" "}
                <FiLinkedin className="text-white  text-lg lg:text-2xl" />
              </div>
              <div className=" bg-slate-600 rounded-full hover:bg-primary duration-500 cursor-pointer p-2 lg:p-3">
                {" "}
                <FiYoutube className="text-white text-lg lg:text-2xl" />
              </div>
              <div className=" bg-slate-600 rounded-full hover:bg-primary duration-500 cursor-pointer p-2 lg:p-3">
                {" "}
                <FiInstagram className="text-white text-lg lg:text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 h-[90px] flex items-center justify-center">
        <p className="text-gray-300 text-center">All rights reserved. </p>
      </div>
    </div>
  );
}

export default Footer;
