"use client";
import React, { useState } from "react";
import Cube from "./Cube";

const Skill = () => {
  const [light, setLight] = useState("rgb(0, 0, 0)");
  const skills = [
    { name: "JAVACRIPT", color: "rgb(255, 221, 0)" }, // JavaScript yellow
    { name: "TYPESCRITPT", color: "rgb(0, 122, 204)" }, // TypeScript blue
    { name: "REACT", color: "rgb(97, 218, 251)" }, // React light blue
    { name: "REACT NATIVE", color: "rgb(0, 216, 255)" }, // React Native cyan
    { name: "NEXT", color: "rgb(225, 225,225)" }, // Next.js black (as an example)
    { name: "GSAP", color: "rgb(136, 204, 0)" }, // GSAP green
  ];

  return (
    <div className="w-screen relative flex  bg-black text-white ">
      <Cube light={light} />
      <div className="w-[90vw]  absolute top-0 left-1/2 -translate-x-1/2 min-h-screen flex items-center py-10  mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full ">
          <h1 className="text-4xl md:text-6xl text-gray-400 lg:text-5xl whatiuse">
            WHAT I <span className="text-white">USE</span>
          </h1>
          <div className="flex-col w-full h-full  mt-10 md:mt-20 lg:mt-0 bg-gray-400/20 rounded-md p-3">
            {skills.map((x) => {
              return (
                <div key={x.name}>
                  <h1
                    onMouseEnter={() => setLight(x.color)}
                    onMouseLeave={() => setLight("rgb(0, 0, 0)")}
                    className="text-4xl md:text-6xl lg:text-5xl language overflow-hidden tracking-widest   pl-2 py-5"
                  >
                    {x.name}
                  </h1>
                  <div className="h-px line bg-white w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
