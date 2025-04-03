import React from "react";
import RollingText from "./RollingText";

const Exp = () => {
  const exps = [
    {
      title: "Frontend Developer",
      com: "Piti.app",
      date: "February 2024 - Nov 2024",
      type: "On-Site",
      id: "exp1",
    },
    {
      title: "Mobile Developer",
      com: "Young Investment Group",
      date: "December 2023 - January 2024",
      type: "On-Site",
      id: "exp2",
    },
    {
      title: "Frontend Developer",
      com: "Freelance",
      date: "Apr 2023 - Present",
      type: "-",
      id: "exp3",
    },
    {
      title: "Frontend Developer",
      com: "Marathon Myanmar",
      date: "Aug 2022 - Aug 2023",
      type: "On-Site",
      id: "exp4",
    },
    {
      title: "Intern Developer",
      com: "Smilax Global",
      date: "May 2022 - May 2022",
      type: "On-Site",
      id: "exp5",
    },
  ];

  return (
    <div id="experience" className="bg-black w-screen min-h-screen py-10">
      <div className="w-[90vw] mx-auto py-20">
        <h1 className="text-4xl md:text-6xl text-gray-400 lg:text-5xl whatiuse">
          My <span className="text-white">History</span>
        </h1>
        <div className="my-10 text-gray-400">
          {exps.map((x) => {
            return <RollingText x={x} key={x.com} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Exp;
