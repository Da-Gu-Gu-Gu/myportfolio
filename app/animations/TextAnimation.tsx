import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TextAnime(text: string) {
  const tl = gsap.timeline();
  tl.fromTo(
    text,
    {
      yPercent: 50,
      opacity: 0,
      //   skewY: 30,
    },
    {
      opacity: 1,
      yPercent: 0,
      skewY: 0,
      stagger: 0.15,
      ease: "expo.out",
      //   duration: 0.8,
    }
  );
}
