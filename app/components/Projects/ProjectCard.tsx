"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Lottie from "react-lottie";
import data from "../../assets/lottie/Showreel_-Mobile-screens-[remix].json";
// import data from "../../assets/lottie/Animated-iPhone-mockup-[remix].json";
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

        <div className="flex w-full h-[290px] border">
          {/* <div className="w-[100px] h-full bg-slate-600"> */}
          {/* </div> */}
          {/* <div className="w-[100px] bg-red-300 flex justify-center"> */}
          {/* <Marquee
              direction="up"
              autoFill={true}
              className="w-full h-full bg-blue-300"
            > */}
          <p className="font-bold w-[100px]  -rotate-90 h-full flex items-center justify-center">
            Website
          </p>
          {/* </Marquee> */}
          {/* </div> */}

          {/* <div className="w-full flex-grow h-[290px] rounded relative "> */}
          <Lottie
            options={{
              animationData: data,
              loop: true,
            }}
            width={"100%"}
            height={290}
          />
          {/* <Image
              src={
                "https://www.freecodecamp.org/news/content/images/size/w60/2022/03/deee.jpg"
              }
              alt="Hero"
              layout="fill"
            /> */}
          {/* </div> */}
          <p className="font-bold w-[100px]  rotate-90 h-full flex items-center justify-center">
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
