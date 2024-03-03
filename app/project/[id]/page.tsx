import Image from "next/image";
import React from "react";

import ImageSlider from "@/app/components/Slider/ImageSlider";
import TechStack from "@/app/components/Projects/TechStack";
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

  return (
    <div className="w-full md:w-[90%] lg:w-full mx-auto px-5 lg:px-[120px]  my-10 ">
      <div className="flex gap-5 items-center">
        <div className="w-[100px] h-[100px]  rounded-lg relative shadow-[0px_16px_30px_0px_#004770]">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/logos%2Fmatesat.webp?alt=media&token=c6fb0e9f-8fb3-4cd2-8a6a-f14ccd68869f"
            className="rounded-lg "
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
            alt="profile"
          />
        </div>
        <div>
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl tracking-widest">
            Mate Sat
          </h1>
          <p className="text-md tracking-wide">Marathon Myanmar</p>
        </div>
      </div>
      <div className="border my-5 flex items-center h-[70px] ">
        <div className="flex flex-col gap-1 items-center w-1/3 border-r h-full justify-center">
          <p>App</p>
          <p className="text-gray-500 text-sm">Type</p>
        </div>
        <div className="flex flex-col gap-1 items-center w-1/3 border-r h-full justify-center">
          <p>2</p>
          <p className="text-gray-500 text-sm">Developer</p>
        </div>
        <div className="flex flex-col gap-1 items-center w-1/3  h-full justify-center">
          <p className="font-semibold">2 m</p>
          <p className="text-gray-500 text-sm">Timeline</p>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="font-semibold text-lg">About</h2>
        <p className="tracking-wider mt-3 text-gray-700">
          Mateset is a mobile application built using React Native and available
          for download on the Google Play Store. The app for employee who work
          in brancehs/agent.The app offer stock,customer management and
          order,sale invoice management.
        </p>
      </div>
      <ImageSlider />

      {/* <div className="w-full mb-10 h-[300px] md:h-[400px] lg:h-[500px] border rounded-lg  "> */}
      {/* <Image
          src="/next.svg"
          className="border "
          layout="fill"
          objectFit="contain"
          alt="profile"
        /> */}
      {/* </div> */}
      <div className="mb-10">
        <h2 className="font-semibold text-lg">Role</h2>
        <ul className="list-disc pl-7 mt-3">
          {roles.map((fact) => {
            return (
              <li key={fact} className="tracking-wider mb-2">
                {fact}
              </li>
            );
          })}
        </ul>
      </div>

      <TechStack />

      <div className="w-full flex-grow rounded relative overflow-hidden">
        <video className="w-full h-full object-cover " loop autoPlay muted>
          <source
            src={
              "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/matesat_720p.webm?alt=media&token=2c8269b5-7d16-4971-ac19-6bc991d8d889"
            }
            type="video/mp4"
            className="w-full h-full object-cover"
          />
        </video>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 mt-10">
        <div className="border border-b-0 border-black">
          <h2 className="font-semibold text-lg py-3 pl-3 border-b border-black">
            Challenge
          </h2>
          <div className="flex flex-col">
            {challenge.map((cha, index) => {
              return (
                <div className="flex border-b border-black" key={index}>
                  <p className="font-semibold py-2 tracking-wide w-[75px] text-center border-r border-black">
                    {`0${index + 1}`}
                  </p>
                  <p className="pl-2 w-full py-2 tracking-wide text-md">
                    {cha}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border border-b-0 border-t-0 md:border-t md:border-l-0 md:border-b border-black">
          <h2 className="font-semibold text-lg py-3 pl-3 border-b border-black">
            Experience
          </h2>
          <div className="flex flex-col">
            {experience.map((exp, index) => {
              return (
                <div className="flex border-b border-black" key={index}>
                  <p className="font-semibold py-2 tracking-wide w-[75px] text-center border-r border-black">
                    {`0${index + 1}`}
                  </p>
                  <p className="pl-2 w-full py-2 tracking-wide text-md">
                    {exp}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
