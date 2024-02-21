import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = () => {
  return (
    <Link href={"/project/1"}>
      <div className="border h-full w-full  rounded">
        <div className="flex w-full  items-center h-[60px] border">
          <p className="font-bold w-[100px]  border-r h-full flex items-center justify-center">
            01
          </p>
          <p className="flex  w-full font-bold flex-grow items-center justify-center">
            Title
          </p>
          <p className="font-bold w-[100px]  border-l h-full flex items-center justify-center">
            01
          </p>
        </div>
        {/* middle part */}

        <div className="flex w-full  items-center border">
          <div className="font-bold -rotate-90  h-full w-[100px]  tracking-wider  flex items-center justify-center">
            WebSite
          </div>

          <div className="w-full flex-grow h-[290px] rounded relative ">
            <Image
              src={
                "https://www.freecodecamp.org/news/content/images/size/w60/2022/03/deee.jpg"
              }
              alt="Hero"
              layout="fill"
            />
          </div>

          <p className="font-bold w-[100px]  rotate-90 h-full flex items-center justify-center">
            Website
          </p>
        </div>
        <div className="flex w-full  items-center h-[60px] border">
          <p className="font-bold w-[100px]  border-r h-full flex items-center justify-center">
            01
          </p>
          <h4 className="text-xl font-bold w-full flex flex-grow items-center justify-center">
            View Detail
          </h4>
          <p className="font-bold w-[100px]  border-l h-full flex items-center justify-center">
            01
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
