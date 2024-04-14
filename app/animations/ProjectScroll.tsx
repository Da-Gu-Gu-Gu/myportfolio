import { Power2, gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { projectsData } from "../components/Home/Projects/data";

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

const tl = gsap.timeline();

export const horizontalScrollAnimation = (trigger: any, section: any): any => {
  const animate = mm.add("(min-width:768px)", () => {
    tl.fromTo(
      trigger,
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
      section,
      {
        translateX: 0,
      },
      {
        translateX: (projectsData.length + 1) * -500 + "px",

        ease: "none",

        scrollTrigger: {
          trigger: trigger,
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

  return animate;
};
