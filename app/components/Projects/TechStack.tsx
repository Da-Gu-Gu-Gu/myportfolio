import React from "react";
import Marquee from "react-fast-marquee";

const TechStack = () => {
  const techStack = [
    "React Native",
    "TypeScript",
    "React Native Navigation",
    "React Native Async Storage",
  ];
  return (
    <div className=" mb-10">
      <h2 className="font-semibold text-lg">Tech Stack</h2>
      <Marquee autoFill>
        <div className="flex gap-3 flex-wrap mt-5 pl-3 w-full">
          {techStack.map((name) => {
            return (
              <p key={name} className="px-8 py-2 border rounded">
                {name}
              </p>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default TechStack;
