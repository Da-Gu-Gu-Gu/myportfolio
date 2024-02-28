"use client";
import Image from "next/image";
import React from "react";

import data from "../../assets/lottie/Animated-smartphones_-slider-[remix].json";
import Lottie from "react-lottie";
//overview
//Role
//detail
//tech stack , theme,
//challenge,experience
//links
const page = () => {
  return (
    <div className="w-full md:w-[90%] lg:w-full mx-auto px-5 lg:px-[120px]  my-10 ">
      <div className="flex gap-5 items-center">
        <div className="w-[100px] h-[100px]  rounded-lg relative shadow-[0px_16px_30px_0px_#004770]">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/logos%2Fmatesat.webp?alt=media&token=c6fb0e9f-8fb3-4cd2-8a6a-f14ccd68869f"
            className="rounded-lg "
            layout="fill"
            objectFit="contain"
            alt="profile"
          />
        </div>
        <div>
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl tracking-widest">
            Mate Sat
          </h1>
          <p className="text-md tracking-wide">Blah Blah</p>
        </div>
      </div>
      <div className="border my-5 flex items-center h-[70px] ">
        <div className="flex flex-col gap-1 items-center w-1/3 border-r h-full justify-center">
          <p>🌍</p>
          <p className="text-gray-500 text-sm">Type</p>
        </div>
        <div className="flex flex-col gap-1 items-center w-1/3 border-r h-full justify-center">
          <p>2</p>
          <p className="text-gray-500 text-sm">Developer</p>
        </div>
        <div className="flex flex-col gap-1 items-center w-1/3  h-full justify-center">
          <p className="font-semibold">2 m</p>
          <p className="text-gray-500 text-sm">Timeline</p>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="font-semibold text-lg">About</h2>
        <p className="tracking-wider mt-3 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          eum amet consectetur adipisicing elit. Consectetur eum amet !
        </p>
      </div>

      {/* <div className="w-full mb-10 h-[300px] md:h-[400px] lg:h-[500px] border rounded-lg  "> */}
      {/* <Image
          src="/next.svg"
          className="border "
          layout="fill"
          objectFit="contain"
          alt="profile"
        /> */}
      {/* </div> */}
      <div className="mb-10">
        <h2 className="font-semibold text-lg">Role</h2>
        <ul className="list-disc pl-7 mt-3">
          <li className="tracking-wider mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisic?
          </li>
          <li className="tracking-wider mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisic?
          </li>
          <li className="tracking-wider mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisic?
          </li>
        </ul>
      </div>
      <div className=" mb-10">
        <h2 className="font-semibold text-lg">Tech Stack</h2>
        <div className="flex gap-3 flex-wrap mt-5 w-full">
          {[1, 2, 3, 4, 5].map((x) => {
            return (
              <p key={x} className="px-8 py-2 border rounded">
                {x}
              </p>
            );
          })}
        </div>
      </div>
      <div className="w-full mb-10 h-[300px] md:h-[400px] lg:h-[500px] border rounded-lg relative ">
        <Image
          src="/next.svg"
          className="border "
          layout="fill"
          objectFit="contain"
          alt="profile"
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2">
        <div className="border border-b-0 border-black">
          <h2 className="font-semibold text-lg py-3 pl-3 border-b border-black">
            Challenge
          </h2>
          <div className="flex flex-col">
            {[1, 2, 3].map((x) => {
              return (
                <div className="flex border-b border-black" key={x}>
                  <p className="font-semibold py-2 tracking-wide w-[120px] text-center border-r border-black">
                    01
                  </p>
                  <p className="pl-2 py-2 tracking-wide text-md">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Mollitia cumque sequi tempora veritatis.!
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border border-b-0 border-t-0 md:border-t md:border-l-0 md:border-b border-black">
          <h2 className="font-semibold text-lg py-3 pl-3 border-b border-black">
            Experience
          </h2>
          <div className="flex flex-col">
            {[1, 2].map((x) => {
              return (
                <div className="flex border-b border-black" key={x}>
                  <p className="font-semibold py-2 tracking-wide w-[120px] text-center border-r border-black">
                    01
                  </p>
                  <p className="pl-2 py-2 tracking-wide text-md">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Mollitia cumque sequi tempora veritatis.!
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
