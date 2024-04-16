"use client";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect } from "react";

const Menu = ({ onClose }: any) => {
  const links = [
    { title: "Home", url: "/" },
    { title: "About Me", url: "/about" },
    { title: "Projects", url: "/#projects" },
    { title: "Resume", url: "" },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".menu-container",
      {
        height: 0,
      },
      {
        height: "100%",
        ease: "power4.in",
      }
    );
    gsap.fromTo(
      ".menu span",
      {
        y: 100,
        // ease: "power4.out",
        // delay: 1,
        skewY: 7,
        opacity: 0,
        // stagger: {
        //   amount: 0.3,
        // },
        // duration: 1.3,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power4.out",
        delay: 1,
        skewY: 0,
        stagger: {
          amount: 0.3,
        },
        duration: 1.3,
      }
    );

    gsap.to(".line", {
      rotate: 45,
      delay: 0.5,
      ease: "power4.out",
    });
    gsap.to(".line2", {
      rotate: -45,
      delay: 0.5,
      ease: "power4.out",
    });
  }, []);

  const closeAnimation = () => {
    return gsap.to(
      ".menu-container",

      {
        height: 0,
        ease: "power4.out",
        onComplete: onClose,
      }
    );
  };

  return (
    <div className="fixed overflow-hidden menu-container z-40 aa top-0 w-screen h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-10 h-[100px]  w-full z-10">
        <div className="w-[60px]  h-full  flex justify-center items-center"></div>

        <div
          onClick={() => {
            closeAnimation();
          }}
          className="w-[60px]  cursor-pointer h-full flex flex-col justify-center items-center "
        >
          <div className="w-full line h-px bg-gray-400"></div>
          <div className="w-full line2 h-px bg-gray-400"></div>
        </div>
      </nav>
      {/* h-[55px] md:h-[65px] lg:h-[70px] xl:h-[85px] */}
      <div className="container h-3/4 w-[90vw] lg:w-[40vw] mx-auto">
        {links.map((x) => {
          return (
            <Link
              onClick={closeAnimation}
              href={x.url}
              key={x.url}
              className="relative flex items-center  cursor-pointer  w-full border-gray-400 h-1/4 border-b menu  overflow-hidden  text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem]"
            >
              <span
                className={`absolute top-1/2 -translate-y-1/2   text-gray-400 `}
              >
                {x.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
