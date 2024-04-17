"use client";
import React from "react";
import { useParams } from "next/navigation";

import Link from "next/link";
import TechStack from "@/app/components/TechStack";
import Image from "next/image";
import { projects } from "@/app/project/[id]/data";
const Detail = () => {
  const { id } = useParams();
  const data = projects[Number(id) - 1];

  if (!data) return <div>Not Found</div>;

  return (
    <div className="w-full  lg:w-[70vw] mx-auto px-5  my-10 ">
      <div className="flex justify-between gap-5 items-center">
        <div
          className={`h-[75px] w-[75px] md:w-[100px] md:h-[100px]  rounded-lg relative shadow-[0px_16px_30px_0px_${data.colorCode}]`}
        >
          <Image
            src={data.img}
            className="rounded-lg "
            fill
            sizes="100%"
            // style={{ objectFit: "cover" }}
            alt="profile"
          />
        </div>
        <div className="flex-grow">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl tracking-widest">
            {data.name}
          </h1>
          <p className="text-sm md:text-md tracking-wide">{data.com}</p>
        </div>
        <Link
          href={data.link}
          className="bg-gray-300/40 text-blue-500 tracking-wide font-semibold rounded-md px-4 py-1"
        >
          <span className="text-xs">DEMO</span>
        </Link>
      </div>
      <div className="border my-5 flex items-center h-[70px] ">
        <div className="flex flex-col gap-1 items-center w-1/2 border-r h-full justify-center">
          <p>{data.type}</p>
          <p className="text-gray-500 text-sm">Type</p>
        </div>
        <div className="flex flex-col gap-1 items-center w-1/2  h-full justify-center">
          <p className="">{data.duration}</p>
          <p className="text-gray-500 text-sm">Timeline</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="bg-black text-white px-3  py-5 md:p-5 rounded-lg">
          <h2 className="font-semibold text-lg">About</h2>
          <p className=" text-pretty leading-relaxed tracking-wide mt-3 text-sm">
            {data.about}
          </p>
        </div>
        {/* <ImageSlider /> */}
        <div className="">
          <h2 className="text-lg">Tech Stack</h2>
          <TechStack stacks={data.techStack} />
        </div>
        <div className=" px-3  py-5 md:p-5 rounded-lg">
          <h2 className="font-semibold text-lg">Problem</h2>
          <p className=" text-pretty leading-relaxed tracking-wide mt-3 text-sm">
            {data.problem}
          </p>
        </div>
        <div className=" px-3  py-5 md:p-5 rounded-lg">
          <h2 className="font-semibold text-lg">Challenge</h2>
          <p className=" text-pretty leading-relaxed tracking-wide mt-3 text-sm">
            {data.challenge}
          </p>
        </div>
        <div className=" px-3  py-5 md:p-5 rounded-lg">
          <h2 className="font-semibold text-lg">Experience</h2>
          <p className=" text-pretty leading-relaxed tracking-wide mt-3 text-sm">
            {data.experience}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
