import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full h-96">
      {/* Hero Section */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-70 z-10"></div>
      <Image
        src="/assets/hero_img.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="object-center object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center text-white ">
        <h1 className="text-2xl md:text-5xl font-bold mb-4">
          We Help Millions of People Each Month
        </h1>
        <p className='px-3'>
          Whether you require a chauffeur for a special occasion, our platform
          is designed to connect you with reliable and professional drivers in
          your area.
        </p>
      </div>
    </div>
  );
};

export default Hero;
