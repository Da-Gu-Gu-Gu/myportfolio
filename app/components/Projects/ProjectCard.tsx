import Link from "next/link";
import React from "react";

export interface Project {
  project: {
    id: string;
    type: string;
    // type: "Website" | "App";
    videoUrl: string;
    title: string;
  };
}

const ProjectCard = ({ project }: Project) => {
  return (
    <Link href={"/project/1"}>
      <div className="border h-full w-full  rounded">
        <div className="flex w-full  items-center h-[60px] border">
          <p className="font-bold w-[100px]  border-r h-full flex items-center justify-center">
            {project.id}
          </p>

          <div className="overflow-hidden h-full flex items-center justify-center w-full ">
            <div className=" w-full font-bold text-center ">
              {project.title}
            </div>
          </div>

          <p className="font-bold w-[100px]  border-l h-full flex items-center justify-center">
            {project.id}
          </p>
        </div>
        {/* middle part */}

        <div className="flex w-full items-center border">
          <p className="font-bold w-[100px] hidden md:flex -rotate-90 h-full  items-center justify-center">
            {project.type}
          </p>

          <div className="w-full flex-grow h-[290px] rounded relative ">
            <video
              className="w-full h-full object-cover bg-red-300"
              loop
              autoPlay
              muted
            >
              <source
                src={project.videoUrl}
                type="video/mp4"
                className="w-full h-full object-cover"
              />
            </video>
          </div>
          <p className="font-bold hidden md:flex w-[100px]   rotate-90 h-full  items-center justify-center">
            {project.type}
          </p>
        </div>
        <div className="flex w-full  items-center h-[60px] border">
          <p className="font-bold w-[100px]  border-r h-full flex items-center justify-center">
            {project.id}
          </p>
          <h4 className="text-xl font-bold w-full flex flex-grow items-center justify-center">
            View Detail
          </h4>
          <p className="font-bold w-[100px]  border-l h-full flex items-center justify-center">
            {project.id}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
