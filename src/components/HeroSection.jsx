import React from "react";
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-6 lg:mt-20 px-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          VirtualR build tools{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            for developers
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Empower your craetivity and bring your VR app ideas to life with our
          initiative development tools.Get started today and turn your
          imagination into impressive reality
        </p>
      
      <div className="flex justify-center my-10">
        <button
          className="py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md hover:scale-105 cursor-pointer"
        >
          Start for free
        </button>
        <button className="py-3 px-4 mx-4 border rounded-md hover:scale-105 cursor-pointer">
            Documentation
        </button>
      </div>
      <div className="flex justify-center mt-10">
         <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-600 shadow-orange-400 my-2 mx-2">
         <source src={video1} type="video/mp4"/>
         </video>
         <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-600 shadow-orange-400 my-2 mx-2">
         <source src={video2} type="video/mp4"/>
         </video>
      </div>
      </div>
    </>
  );
};

export default HeroSection;
