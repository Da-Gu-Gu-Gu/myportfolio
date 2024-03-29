import Image from "next/image";
import React from "react";
import CustomName from "../CustomName";

const Hero = () => {
  return (
    <div className="w-full md:w-[90%] lg:w-full mx-auto px-5 lg:px-[120px]  my-20  ">
      <div className="w-max mx-auto flex flex-col gap-3 text-center text-3xl  lg:text-5xl">
        <div className="w-max flex items-center gap-1 border-gray-500 border text-sm mx-auto px-3 py-1 rounded-2xl">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 "></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
          </span>
          open to work
        </div>
        <div className=" flex flex-col gap-3">
          <p className="text-3xl md:text-7xl">Hein Htet Aung</p>
          <p className="text-xl md:text-3xl">Frontend Developer</p>
          {/* <p>you can trust</p> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
