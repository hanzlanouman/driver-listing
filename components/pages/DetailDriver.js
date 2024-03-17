;
import React from "react";
import Navbar from "../Navbar";
import HeroDriver from "../ui/DriverDetail/HeroDriver";
import Info from "../ui/DriverDetail/Info";
import Footer from "../Footer";

const DriverDetail = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="absolute inset-0 bg-primary max-h-80"></div>
        <div className="mx-auto px-4 py-1 relative z-10">
          <HeroDriver />
          <Info />
        </div>
      </div>

    </>
  );
};

export default DriverDetail;
