"use client";
import React, { useEffect } from "react";
import Status from "../Status";
import TextAnime from "@/app/animations/TextAnimation";

const Hero = () => {
  useEffect(() => {
    TextAnime(".heroText");
  }, []);

  return (
    <div className="w-full md:w-[90%] lg:w-full mx-auto px-5 lg:px-[120px] flex flex-col bg-white justify-center h-[50vh] md:h-[70vh] lg:h-[70vh] ">
      <div className="w-max mx-auto flex flex-col gap-3 text-center text-3xl  lg:text-5xl">
        <div className="mx-auto heroText">
          <Status />
        </div>
        <div className="flex gap-3">
          {["Hein", "Htet", "Aung"].map((x) => {
            return (
              <p key={x} className="text-[2rem]  md:text-7xl heroText ">
                {x}
              </p>
            );
          })}
        </div>
        <div className="flex gap-3 justify-center">
          <p className="text-xl  md:text-3xl heroText">Frontend</p>
          <p className="text-xl  md:text-3xl heroText"> Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
