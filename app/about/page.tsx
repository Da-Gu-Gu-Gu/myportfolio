import React from "react";
import ModelViewer from "../components/About/Model";

const page = () => {
  return (
    <div className="w-screen overflow-hidden h-screen bg-black">
      <div className="bg-white">
        <ModelViewer />
      </div>
    </div>
  );
};

export default page;
