import Image from "next/image";
import React from "react";
import CustomName from "../CustomName";

const Hero = () => {
  return (
    <div className="w-full md:w-[90%] lg:w-full mx-auto px-5 lg:px-[120px]  my-10  ">
      <div className="w-[100px] h-[100px] rounded-full ">
        <Image
          src={
            "https://www.freecodecamp.org/news/content/images/size/w60/2022/03/deee.jpg"
          }
          alt="Hero"
          width={100}
          height={100}
          className="rounded-full object-center object-fit"
        />
      </div>
      <h1 className="mt-5 text-pretty text-left text-lg  md:text-2xl lg:text-4xl leading-snug tracking-wider">
        Hello, I am <CustomName name="DA GU GU GU" />, a
        <span className="underline  decoration-yellow-500">Javascript</span>{" "}
        Developer with
        <span className="underline  decoration-sky-500">2 Years</span> of
        experience in crafting exceptional user interfaces.
      </h1>
    </div>
  );
};

export default Hero;
