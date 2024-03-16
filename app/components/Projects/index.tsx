"use client";
import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import Marquee from "react-fast-marquee";
import HorizontalScroll from "../HorizotalScroll";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  const projectsData = [
    {
      id: "01",
      title: "Mate Sat",
      type: "Application",
      videoUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/matesat_720p.webm?alt=media&token=2c8269b5-7d16-4971-ac19-6bc991d8d889",
    },
    {
      id: "02",
      title: "The Estate",
      type: "Application",
      videoUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/theestate_720p.webm?alt=media&token=57779874-e8b5-4b24-b8de-b4427ebf2d0a",
    },
    {
      id: "03",
      type: "Website",
      title: "The Space ",
      videoUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/spaceLanding720p.webm?alt=media&token=80e66cce-517f-4f66-8f71-624f65bab8c3",
    },
    {
      id: "03",
      type: "Website",
      title: "The Space ",
      videoUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/spaceLanding720p.webm?alt=media&token=80e66cce-517f-4f66-8f71-624f65bab8c3",
    },
    {
      id: "03",
      type: "Website",
      title: "The Space ",
      videoUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/spaceLanding720p.webm?alt=media&token=80e66cce-517f-4f66-8f71-624f65bab8c3",
    },
  ];
  let mm = gsap.matchMedia();
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  useEffect(() => {
    const pin = mm.add("(min-width:100px)", () => {
      gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: (projectsData.length + 1) * -500 + "px",
          // translateX: "-820vw",
          // translateX: "-420vw",
          // translateX: "-220vw",
          ease: "none",
          // duration: 1,
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
    <div className=" w-screen   overflow-hidden   py-40">
      <div
        ref={triggerRef}
        // id="mainContainer"
        className="bg-black flex flex-col justify-evenly h-screen mx-auto w-[90vw] aa overflow-hidden   text-white p-5 rounded-xl"
      >
        <Marquee autoFill className="tracking-wider ">
          🌟SHOWCASE
        </Marquee>
        <div className=" flex ">
          <div ref={sectionRef} className="flex    my-5 ">
            <HorizontalScroll>
              <div className="w-[500px] h-full mr-3">
                <h1 className="text-4xl bg-gradient-to-r from-lime-500 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                  Selected Projects
                </h1>
                <p className="mt-10 w-[450px] text-gray-400 text-sm">
                  Presented here are several projects I have actively
                  contributed to. Click on each to explore further details and
                  gain deeper insights into my involvement and contributions.
                </p>
              </div>
              {projectsData.map((data, i) => {
                return (
                  <div key={i} className="w-[500px] mr-3 h-full flex-1 pannel">
                    <ProjectCard project={data} />
                  </div>
                );
              })}
            </HorizontalScroll>
          </div>
        </div>
        <Marquee autoFill className="tracking-wider ">
          🌟SHOWCASE
        </Marquee>
      </div>
    </div>
  );
};

export default Projects;
