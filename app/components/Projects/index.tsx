"use client";
import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";

import HorizontalScroll from "../HorizotalScroll";
import { gsap } from "gsap";

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
        "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/spaceLanding720p.webm?alt=media&token=80e66cce-517f-4f66-8f71-624f65bab8c3",
    },
    {
      id: "05",
      type: "Website",
      title: "The Space ",
      color: "bg-[#fcf300]",
      videoUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/spaceLanding720p.webm?alt=media&token=80e66cce-517f-4f66-8f71-624f65bab8c3",
    },
    {
      id: "06",
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
  useEffect(() => {
    const pin = mm.add("(min-width:768px)", () => {
      gsap.fromTo(
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
            scrub: 1,
            pin: true,
            // markers: true,
          },
        }
      );
    });
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className=" w-screen   overflow-hidden   mt-40">
      <div
        ref={triggerRef}
        // id="mainContainer"
        className="bg-black flex flex-col justify-evenly h-full md:h-screen mx-auto w-screen md:w-[90vw]  overflow-hidden   text-white p-3 md:p-5 rounded-t-xl"
      >
        <div className="my-3">
          <CustomMarquee />
        </div>
        <div className=" flex ">
          <div
            ref={sectionRef}
            className="flex flex-col md:flex-row w-full  my-5 px-3 "
          >
            <HorizontalScroll>
              <div className="w-full md:w-[500px] h-full md:mr-3">
                <h1 className="text-3xl md:text-6xl font-semibold text-gray-300">
                  Selected Projects
                </h1>
                <p className="mt-5 w-full md:mt-10 md:w-[400px] text-gray-400 ">
                  Presented here are several projects I have actively
                  contributed to. Click on each to explore further details and
                  gain deeper insights into my involvement and contributions.
                </p>
              </div>
              {projectsData.map((data, i) => {
                return (
                  <div
                    key={i}
                    className="md:w-[500px] mr-3 h-full flex-1 pannel"
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
