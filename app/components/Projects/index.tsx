import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className=" md:w-[90%] lg:w-full mx-auto px-5 lg:px-[120px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-10">
      {[1, 2, 3, 4].map((x) => {
        return <ProjectCard key={x} />;
      })}
    </div>
  );
};

export default Projects;
