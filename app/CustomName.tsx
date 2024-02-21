"use client";
import React, { useRef, useEffect } from "react";

const CustomName = ({ name }: { name: string }) => {
  const url = "./flower.svg";
  // "https://www.svgrepo.com/show/69415/floral-design-with-thin-spirals-and-little-flowers-couple.svg";
  const textRef = useRef<any>(null);

  // useEffect(() => {
  //   // Calculate the width of the text and set it as the width of the image
  //   const textWidth = textRef?.current?.clientWidth;
  //   const image = document.getElementById("flowerImage");
  //   if (image) {
  //     image.style.width = `${textWidth}px`;
  //   }
  // }, []);

  return (
    <span ref={textRef} className="relative z-20 font-bold decoration-sky-500">
      {name}
      <img
        id="flowerImage"
        className="h-[90px] lg:h-[120px] w-full absolute left-0 -top-7 z-20"
        src={url}
        alt=""
      />
    </span>
  );
};

export default CustomName;
