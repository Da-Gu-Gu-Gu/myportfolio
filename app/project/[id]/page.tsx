import TechStack from "@/app/components/Projects/TechStack";
import Image from "next/image";
import React from "react";

//overview
//Role
//detail
//tech stack , theme,
//challenge,experience
//links
const page = () => {
  const roles = [
    "Designing and implementing the user interface using Figma, React Native and TypeScript.",
    "Integrating the app with various APIs and services to enable functionalities such as product stock tracking, customer management, and order and sale invoice management.",
    "Ensuring cross-platform compatibility for both Android and iOS by leveraging React Native's capabilities.",
    " Utilizing TypeScript for enhanced code quality, type safety, and better development experiences.",
    "Handling state management effectively using tools like react-native-asyncstoreage.",
    "Collaborating with team members, including designers, to ensure cohesive development and adherence to project timelines.",
    "Deploying the application on the Google Play Store following platform-specific processes.",
  ];

  const challenge = [
    "Ensuring consistent functionality and design across both Android and iOS platforms can be challenging due to platform-specific nuances.",
    "Navigating the deployment process on the Google Play Store may involve dealing with submission guidelines, certification, and addressing any platform-specific requirements.",
  ];

  const experience = [
    "The adoption of TypeScript contributes to enhanced code quality, improved development experiences, and better collaboration within the development team.",
    "Designing and implementing a user-friendly and responsive UI that meets the needs of employees in branches or agent roles.",
    "Successfully deploying the application on the Google Play Store, navigating the submission process, and ensuring a smooth release to users.",
  ];

  const problem =
    "We have facing stock inequal issue,and so wanna control stock and we want  access to control easily from anywhere even we are not at office.So, we change the system from dashboard to mobile application.";

  return (
    // <div>aa</div>
    <div className="w-full  lg:w-[70vw] mx-auto px-5  my-10 ">
      <div className="flex justify-between gap-5 items-center">
        <div className="h-[75px] w-[75px] md:w-[100px] md:h-[100px]  rounded-lg relative shadow-[0px_16px_30px_0px_#004770]">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/logos%2Fmatesat.webp?alt=media&token=c6fb0e9f-8fb3-4cd2-8a6a-f14ccd68869f"
            className="rounded-lg "
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
            alt="profile"
          />
        </div>
        <div className="flex-grow">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl tracking-widest">
            Mate Sat
          </h1>
          <p className="text-sm md:text-md tracking-wide">Marathon Myanmar</p>
        </div>
        <div className="bg-gray-300/40 text-blue-500 tracking-wide font-semibold rounded-md px-4 py-1">
          <span className="text-xs">DEMO</span>
        </div>
      </div>
      <div className="border my-5 flex items-center h-[70px] ">
        <div className="flex flex-col gap-1 items-center w-1/2 border-r h-full justify-center">
          <p>App</p>
          <p className="text-gray-500 text-sm">Type</p>
        </div>
        {/* <div className="flex flex-col gap-1 items-center w-1/3 border-r h-full justify-center">
          <p>2</p>
          <p className="text-gray-500 text-sm">Developer</p>
        </div> */}
        <div className="flex flex-col gap-1 items-center w-1/2  h-full justify-center">
          <p className="">2 m</p>
          <p className="text-gray-500 text-sm">Timeline</p>
        </div>
      </div>
      <div className="bg-blue-700 text-white px-3  py-5 md:p-5 rounded-lg">
        <h2 className="font-semibold text-lg">About</h2>
        <p className=" text-pretty leading-relaxed tracking-wide mt-3 text-sm">
          Mateset is a mobile application built using React Native and available
          for download on the Google Play Store. The app for employee who work
          in brancehs/agent.The app offer stock,customer management and
          order,sale invoice management.
        </p>
      </div>
      <div className="my-5">
        <h2 className="text-lg">Tech Stack</h2>
        <TechStack />
      </div>
      <div className="bg-blue-700 text-white px-3  py-5 md:p-5 rounded-lg">
        <h2 className="font-semibold text-lg">Problem</h2>
        <p className=" text-pretty leading-relaxed tracking-wide mt-3 text-sm">
          {problem}
        </p>
      </div>
    </div>
  );
};

export default page;
