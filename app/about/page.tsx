import React from "react";
import ModelViewer from "../components/About/Model";
import Profile from "../components/About/Profile";

const page = () => {
  return (
    <div className=" overflow-hidden">
      <div className="bg-white">
        <ModelViewer />
      </div>
      <div className="w-[90vw] lg:w-[40vw] mx-auto">
        <Profile />
      </div>
    </div>
  );
};

export default page;
