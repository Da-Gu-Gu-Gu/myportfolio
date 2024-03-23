"use client";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SkillAnimation = () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".skill",
      pin: true,
      scrub: true,
    },
  });

  timeline
    .fromTo(
      ".nav-text",
      {
        color: "#fff",
      },
      {
        color: "#000",
      }
    )
    .fromTo(
      ".whatiuse",
      {
        xPercent: -100,
      },
      {
        xPercent: 0,
      }
    )
    .fromTo(
      ".language",
      {
        xPercent: 100,
      },
      {
        xPercent: 0,
      }
    )
    .fromTo(
      ".line ",
      {
        width: 0,
      },
      {
        width: "100%",
      },
      "<"
    );
};

export default SkillAnimation;
