import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectsData = [
    {
      id: "01",
      title: "Mate Sat",
      type: "Application",
      videoUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/matesat_720p.webm?alt=media&token=2c8269b5-7d16-4971-ac19-6bc991d8d889",
    },
    {
      id: "02",
      title: "The Estate",
      type: "Application",
      videoUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/theestate_720p.webm?alt=media&token=57779874-e8b5-4b24-b8de-b4427ebf2d0a",
    },
    {
      id: "03",
      type: "Website",
      title: "The Space ",
      videoUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/spaceLanding720p.webm?alt=media&token=80e66cce-517f-4f66-8f71-624f65bab8c3",
    },
  ];

  return (
    <div className=" md:w-[90%] lg:w-full mx-auto px-5 lg:px-[120px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-10">
      {projectsData.map((data) => {
        return <ProjectCard key={data.title} project={data} />;
      })}
    </div>
  );
};

export default Projects;
