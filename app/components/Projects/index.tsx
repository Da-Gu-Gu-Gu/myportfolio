"use client";
import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";

import HorizontalScroll from "../HorizotalScroll";
import { Power2, gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CustomMarquee from "../CustomMarquee";

gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  const projectsData = [
    {
      id: "01",
      title: "Mate Sat",
      type: "Application",
      color: "bg-[#efcfe3]",
      videoUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/matesat_720p.webm?alt=media&token=2c8269b5-7d16-4971-ac19-6bc991d8d889",
    },
    {
      id: "02",
      title: "The Estate",
      type: "Application",
      color: "bg-[#9d4edd]",
      videoUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/theestate_720p.webm?alt=media&token=57779874-e8b5-4b24-b8de-b4427ebf2d0a",
    },

    {
      id: "03",
      type: "Website",
      title: "M-Kitchen",
      color: "bg-[#e9ff70]",
      videoUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/mkitchen.webm?alt=media&token=f1fd5d90-35dd-40ae-be35-b7b4827c13b9",
    },
    {
      id: "04",
      type: "Website",
      title: "The Connect Four ",
      color: "bg-[#ff6392]",
      videoUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/New-file.webm?alt=media&token=660307a5-9520-44c8-ab2e-ee338f1d73cc",
    },
    {
      id: "05",
      type: "Website",
      title: "Rock Paper Stone ",
      color: "bg-[#ff7900]",
      videoUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/New-file%20(1).webm?alt=media&token=2daefd69-015d-4371-b3fe-0a477e1cf8ae",
    },
    {
      id: "06",
      type: "Website",
      title: "The Space ",
      color: "bg-[#fcf300]",
      videoUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/spaceLanding720p.webm?alt=media&token=80e66cce-517f-4f66-8f71-624f65bab8c3",
    },
    {
      id: "07",
      type: "Application",
      title: "Text Repeater",
      color: "bg-[#00b4d8]",
      videoUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/Showreel_-Mobile-screens-%5Bremix%5D.webm?alt=media&token=69e84f00-3bc4-45f4-9707-6821ac4ea360",
    },
  ];
  let mm = gsap.matchMedia();
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const tl = gsap.timeline();
  useEffect(() => {
    const pin = mm.add("(min-width:768px)", () => {
      tl.fromTo(
        triggerRef.current,
        {
          scaleX: "90%",
        },
        {
          scaleX: "100%",
          borderRadius: 0,
          ease: Power2.easeOut,
          scrollTrigger: {
            trigger: ".test",
            start: "top 100px",
            end: "40px top",
            scrub: true,

            // markers: true,
          },
        }
      ).fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: (projectsData.length + 1) * -500 + "px",

          ease: "none",

          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "150px top",
            scrub: 0.5,
            pin: true,
            // markers: true,
          },
        },
        ">+=1"
      );
    });
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className=" w-screen test mx-auto  overflow-hidden  -z-10  ">
      <div
        ref={triggerRef}
        // id="mainContainer"
        className="bg-black  flex flex-col justify-evenly h-full md:h-screen mx-auto w-screen   md:scale-x-90 overflow-hidden   text-white p-3 md:p-5 rounded-t-xl"
      >
        <div className="my-3">
          <CustomMarquee />
        </div>
        <div className=" flex h-full w-full">
          <div
            ref={sectionRef}
            className="flex flex-col  md:flex-row w-full  my-5 px-3 "
          >
            <HorizontalScroll>
              <div className="w-full md:w-[500px] 2xl:w-[30vw] flex flex-col justify-center h-full md:mr-3">
                <h1 className="text-3xl md:text-4xl 2xl:text-[3rem] font-semibold text-gray-300">
                  Selected Projects
                </h1>
                <p className="mt-5 w-full md:mt-10  md:w-[400px] xl:w-full 2xl:text-2xl text-gray-400 ">
                  Presented here are several projects I have actively
                  contributed to. Click on each to explore further details and
                  gain deeper insights into my involvement and contributions.
                </p>
              </div>
              {projectsData.map((data, i) => {
                return (
                  <div
                    key={i}
                    className="w-full md:w-[500px] 2xl:w-[30vw] flex justify-center items-center mr-3 h-full  flex-1 pannel"
                  >
                    <ProjectCard project={data} />
                  </div>
                );
              })}
            </HorizontalScroll>
          </div>
        </div>
        <div className="my-3">
          <CustomMarquee />
        </div>
      </div>
    </div>
  );
};

export default Projects;
