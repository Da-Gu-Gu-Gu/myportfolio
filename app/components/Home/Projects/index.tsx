"use client";
import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";

import HorizontalScroll from "../../HorizotalScroll";

import CustomMarquee from "../../CustomMarquee";
import { projectsData } from "./data";
import { horizontalScrollAnimation } from "@/app/animations/ProjectScroll";

const Projects = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const animate = horizontalScrollAnimation(
      triggerRef?.current,
      sectionRef?.current
    );

    return () => {
      animate.kill();
    };
  }, []);

  return (
    <div
      id="projects"
      className=" w-screen test mx-auto  overflow-hidden  -z-10  "
    >
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
