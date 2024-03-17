import React from "react";
import Reviews from "./Reviews";
import Info from "./Info";
import HeroDriver from "./HeroDriver";

const DriverDetail = () => {
  return (
    <div className="md:ml-20 lg:ml-40 xl:ml-80 xl:ml-96">
      <div className="absolute inset-0 bg-primary max-h-60 max-w-full"></div>

      <div className="max-w-8xl mx-auto px-4 py-6 relative z-10">
        <HeroDriver />
        <Info />
        <Reviews />
      </div>
    </div>
  );
};

export default DriverDetail;
