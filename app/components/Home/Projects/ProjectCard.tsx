import Link from "next/link";
import React from "react";

export interface Project {
  project: {
    id: string;
    type: string;
    color: string;
    // type: "Website" | "App";
    videoUrl: string;
    title: string;
  };
}

const ProjectCard = ({ project }: Project) => {
  return (
    <Link href={`/project/${project.id}`}>
      <div
        className={`rounded-xl h-full w-full ursor-pointer p-5 pb-0 md:pb-0  md:p-7 text-black ${project.color}`}
      >
        <div className="flex justify-between">
          <h2 className=" text-2xl">{project?.title}</h2>
          <div className="flex gap-3 text-xl">View</div>
        </div>
        <div className="w-full mt-5 md:mt-7 flex-grow h-[300px] md:h-[350px] lg:h-full rounded-t-xl overflow-hidden  ">
          <video className="w-full h-full object-cover" loop autoPlay muted>
            <source src={project.videoUrl} type="video/mp4" />
          </video>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
