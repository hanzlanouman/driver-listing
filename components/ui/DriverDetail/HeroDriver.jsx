import React from "react";

import { UisStar } from "@iconscout/react-unicons-solid";
import {
  UilBookmarkFull,
  UilShare,
  UilFavorite,
} from "@iconscout/react-unicons";
import { UisCheckCircle } from "@iconscout/react-unicons-solid";

const HeroDriver = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 ">
      <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-md  p-4 md:p-10">
        <div className="mb-2 md:mb-0 ">
          <img
            src="../assets/d1.jpg"
            alt="driver"
            className="w-[300px] h-[200px] rounded-lg"
          />
        </div>

        <div className="md:w-1/2 md:mr-4">
          <h1 className="text-2xl font-bold mb-2 md:mb-4">John Doe</h1>

          <div className="mb-2 md:mb-4">
            <p>Dental & Medicine</p>
            <p>Male | Age 32</p>
            <p className="flex items-center">
              <span className="mr-1">5.0</span>
              {[...Array(5)].map((_, index) => (
                <UisStar key={index} className="h-10 w-5 text-pink-500" />
              ))}
            </p>

            <p className="text-lg flex items-center">
              <UisCheckCircle className="h-10 w-5 mr-1 text-pink-500" />
              Accepting new clients
            </p>
          </div>
        </div>

        <div className="flex flex-col ml-6 items-center space-y-4 ">
          <button className="flex items-center justify-center text-gray-500 transition-colors duration-300 ease-in-out p-2 bg-gray-100 w-full">
            <UilBookmarkFull className="h-4 w-6 mr-2" />
            <span className="hover:text-primary mr-6">Save</span>
          </button>
          <button className="flex items-center justify-center text-gray-500 transition-colors duration-300 ease-in-out p-2 bg-gray-100 w-full">
            <UilShare className="h-4 w-6 mr-2" />
            <span className="hover:text-primary mr-6">Share</span>
          </button>
          <button className="flex items-center justify-center text-gray-500 transition-colors duration-300 ease-in-out p-2 bg-gray-100 w-full">
            <UilFavorite className="h-4 w-8 mr-2" />
            <span className="hover:text-primary mr-6">Report</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroDriver;
