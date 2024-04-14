"use client";
import React from "react";
import {
  enterhoverAnimate,
  leavehoverAnimate,
} from "@/app/animations/TextRolling";
const RollingText = ({ x }: any) => {
  return (
    <div
      onMouseEnter={() => enterhoverAnimate(x.id + "lower", x.id)}
      onMouseLeave={() => leavehoverAnimate(x.id + "lower", x.id)}
      className="flex border-b overflow-hidden border-gray-400 py-5 md:py-10 md:items-center flex-col md:flex-row w-full justify-between"
    >
      <div className="">
        <p className=" h-[50px] md:h-[60px] lg:h-[66px] xl:h-[79px]  overflow-hidden text-[2rem] flex flex-col md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem]">
          <span className={`${x.id} text-gray-400 `}>{x.title}</span>
          <span className={`${x.id + "lower"}   text-white`}>{x.title}</span>
        </p>

        <span>{x.com}</span>
      </div>
      <div className="flex flex-col md:text-right">
        <span>{x.date}</span>
        <span>{x.type}</span>
      </div>
    </div>
  );
};

export default RollingText;
