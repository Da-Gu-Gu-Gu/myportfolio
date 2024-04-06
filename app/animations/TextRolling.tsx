import gsap from "gsap";

export const enterhoverAnimate = (below: string, upper: string) => {
  console.log("aa");

  gsap.to(`.${below}`, {
    yPercent: -100,
    duration: 0.4,
    ease: "power1.inOut",
  });
  gsap.to(`.${upper}`, {
    yPercent: -100,
    duration: 0.4,
    ease: "power1.inOut",
  });
};

export const leavehoverAnimate = (below: string, upper: string) => {
  console.log("aa");

  gsap.to(`.${below}`, {
    yPercent: 100,
    // y: 0,
    // yPercent: "40%",
  });
  gsap.to(`.${upper}`, {
    // y: -40,
    yPercent: 0,
  });
};
