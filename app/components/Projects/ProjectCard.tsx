"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Lottie from "react-lottie";
// import data from "../../assets/lottie/Showreel_-Mobile-screens-[remix].json";
import data from "../../assets/lottie/Animated-iPhone-mockup-[remix].json";
const ProjectCard = () => {
  return (
    <Link href={"/project/1"}>
      <div className="border h-full w-full  rounded">
        <div className="flex w-full  items-center h-[60px] border">
          <p className="font-bold w-[100px]  border-r h-full flex items-center justify-center">
            01
          </p>
          <p className="flex  w-full font-bold flex-grow items-center justify-center">
            Title
          </p>
          <p className="font-bold w-[100px]  border-l h-full flex items-center justify-center">
            01
          </p>
        </div>
        {/* middle part */}

        <div className="flex w-full items-center border">
          <p className="font-bold w-[100px] hidden md:flex -rotate-90 h-full  items-center justify-center">
            Website
          </p>

          <div className="w-full flex-grow h-[290px] rounded relative ">
            <video height="290" loop autoPlay muted preload="none">
              <source
                src="./Animated-smartphones_-slider-[remix] (1).mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <p className="font-bold hidden md:flex w-[100px]   rotate-90 h-full  items-center justify-center">
            Website
          </p>
        </div>
        <div className="flex w-full  items-center h-[60px] border">
          <p className="font-bold w-[100px]  border-r h-full flex items-center justify-center">
            01
          </p>
          <h4 className="text-xl font-bold w-full flex flex-grow items-center justify-center">
            View Detail
          </h4>
          <p className="font-bold w-[100px]  border-l h-full flex items-center justify-center">
            01
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
