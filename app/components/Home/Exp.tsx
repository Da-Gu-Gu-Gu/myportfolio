"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  enterhoverAnimate,
  leavehoverAnimate,
} from "@/app/animations/TextRolling";
gsap.registerPlugin(ScrollTrigger);
const Exp = () => {
  const exps = [
    {
      title: "Frontend Developer",
      com: "Piti.app",
      date: "February 2024 - March 2024",
      type: "On-Site",
      id: "exp1",
    },
    {
      title: "Mobile Developer",
      com: "Young Investment Group",
      date: "December 2023 - January 2024",
      type: "On-Site",
      id: "exp2",
    },
    {
      title: "Frontend Developer",
      com: "Freelance",
      date: "Apr 2023 - Present",
      type: "-",
      id: "exp3",
    },
    {
      title: "Frontend Developer",
      com: "Marathon Myanmar",
      date: "Aug 2022 - Aug 2023",
      type: "On-Site",
      id: "exp4",
    },
    {
      title: "Intern Developer",
      com: "Smilax Global",
      date: "May 2022 - May 2022",
      type: "On-Site",
      id: "exp5",
    },
  ];

  return (
    <div className="bg-black w-screen min-h-screen py-10">
      <div className="w-[90vw] mx-auto py-20">
        <h1 className="text-4xl md:text-6xl text-gray-400 lg:text-5xl whatiuse">
          My <span className="text-white">History</span>
        </h1>
        <div className="my-10 text-gray-400">
          {exps.map((x) => {
            return (
              <div
                key={x.com}
                onMouseEnter={() => enterhoverAnimate(x.id + "lower", x.id)}
                onMouseLeave={() => leavehoverAnimate(x.id + "lower", x.id)}
                className="flex border-b overflow-hidden border-gray-400 py-5 md:py-10 md:items-center flex-col md:flex-row w-full justify-between"
              >
                <div className="">
                  <p className=" h-[50px] md:h-[60px] lg:h-[66px] xl:h-[79px]  overflow-hidden text-[2rem] flex flex-col md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem]">
                    <span className={`${x.id} text-gray-400 `}>{x.title}</span>
                    <span className={`${x.id + "lower"}   text-white`}>
                      {x.title}
                    </span>
                  </p>
                  {/* <p className="text-white  jobTitle text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem]">
                    {x.title}
                  </p> */}
                  <span>{x.com}</span>
                </div>
                <div className="flex flex-col md:text-right">
                  <span>{x.date}</span>
                  <span>{x.type}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Exp;
