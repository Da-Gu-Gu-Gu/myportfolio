import Image from "next/image";
import React from "react";
import CustomName from "../CustomName";

const Hero = () => {
  return (
    <div className="w-full md:w-[90%] lg:w-full mx-auto px-5 lg:px-[120px]  my-10  ">
      <div className="w-max mx-auto flex flex-col gap-3 text-center text-3xl  lg:text-5xl">
        <div className="w-max flex items-center gap-1 border-gray-500/50 border text-sm mx-auto px-3 py-1 rounded-2xl">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          open to work
        </div>
        <div className="italic flex flex-col gap-3">
          <p>Hein Htet Aung</p>
          <p>Frontend Developer</p>
          <p>you can trust</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
