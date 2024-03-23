"use client";
import React, { useEffect, useState } from "react";
import SkillAnimation from "../../animations/Skill";
import Cube from "./Cube";

const Skill = () => {
  const [light, setLight] = useState("rgb(31,47,64)");
  const skills = [
    { name: "JAVACRIPT", color: "rgb(255, 221, 0)" }, // JavaScript yellow
    { name: "TYPESCRITPT", color: "rgb(0, 122, 204)" }, // TypeScript blue
    { name: "REACT", color: "rgb(97, 218, 251)" }, // React light blue
    { name: "REACT NATIVE", color: "rgb(0, 216, 255)" }, // React Native cyan
    { name: "NEXT", color: "rgb(33, 33, 33)" }, // Next.js black (as an example)
    { name: "GSAP", color: "rgb(136, 204, 0)" }, // GSAP green
  ];
  useEffect(() => {
    // SkillAnimation();
  }, []);

  return (
    <div className="w-screen relative flex  bg-black text-white py-10">
      <Cube light={light} />
      <div className="w-[90vw]  absolute top-0 left-1/2 -translate-x-1/2 min-h-screen flex items-center py-20 mx-auto">
        {/* // <div className="w-screen skill min-h-screen px-14 flex items-center md:pl-14 pl-8"> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full ">
          <h1 className="text-4xl md:text-6xl lg:text-5xl whatiuse">
            WHAT I USE
          </h1>
          <div className="flex-col w-full h-full  mt-10 md:mt-20 lg:mt-0 bg-gray-400/20 rounded-md p-3">
            {skills.map((x) => {
              return (
                <div key={x.name}>
                  <h1
                    onMouseEnter={() => setLight(x.color)}
                    onMouseLeave={() => setLight("rgb(31,47,64)")}
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
