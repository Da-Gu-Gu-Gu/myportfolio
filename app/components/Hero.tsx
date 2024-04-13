import Image from "next/image";
import React from "react";

import Status from "./Status";

const Hero = () => {
  return (
    <div className="w-full md:w-[90%] lg:w-full mx-auto px-5 lg:px-[120px] flex flex-col bg-white justify-center h-[50vh] md:h-[70vh] lg:h-[70vh] ">
      <div className="w-max mx-auto flex flex-col gap-3 text-center text-3xl  lg:text-5xl">
        <div className="mx-auto">
          <Status />
        </div>
        <div className=" flex flex-col gap-3">
          <p className="text-[2rem] md:text-7xl">Hein Htet Aung</p>
          <p className="text-xl md:text-3xl">Frontend Developer</p>
          {/* <p>you can trust</p> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
