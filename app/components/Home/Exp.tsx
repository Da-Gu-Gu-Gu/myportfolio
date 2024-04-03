import React from "react";

const Exp = () => {
  const exps = [
    {
      title: "Frontend Developer",
      com: "Piti.app",
      date: "February 2024 - March 2024",
      type: "On-Site",
    },
    {
      title: "Mobile Developer",
      com: "Young Investment Group",
      date: "December 2023 - January 2024",
      type: "On-Site",
    },
    {
      title: "Frontend Developer",
      com: "Freelance",
      date: "Apr 2023 - Present",
      type: "-",
    },
    {
      title: "Frontend Developer",
      com: "Marathon Myanmar",
      date: "Aug 2022 - Aug 2023",
      type: "On-Site",
    },
    {
      title: "Intern Developer",
      com: "Smilax Global",
      date: "May 2022 - May 2022",
      type: "On-Site",
    },
  ];

  return (
    <div className="bg-black w-screen min-h-screen py-10">
      <div className="w-[90vw] mx-auto py-20">
        <h1 className="text-4xl md:text-6xl text-gray-400 lg:text-5xl whatiuse">
          My <span className="text-white">History</span>
        </h1>
        <div className="my-10 text-gray-400">
          {exps.map((x) => {
            return (
              <div
                key={x.com}
                className="flex border-b border-gray-400 py-5 md:py-10 md:items-center flex-col md:flex-row w-full justify-between"
              >
                <div className="">
                  <p className="text-white text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem]">
                    {x.title}
                  </p>
                  <span>{x.com}</span>
                </div>
                <div className="flex flex-col md:text-right">
                  <span>{x.date}</span>
                  <span>{x.type}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Exp;
