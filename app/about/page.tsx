import React from "react";
import ModelViewer from "../components/About/Model";
import Profile from "../components/About/Profile";
import GoBack from "../components/GoBack";

const page = () => {
  return (
    <>
      <GoBack />
      <div className=" overflow-hidden ">
        <div className="bg-white">
          <ModelViewer />
        </div>
        <div className="w-[90vw] lg:w-[40vw] mx-auto">
          <Profile />
        </div>
      </div>
    </>
  );
};

export default page;
