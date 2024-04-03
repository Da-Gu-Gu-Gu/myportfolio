import React from "react";

const Status = () => {
  return (
    <div className="w-max cursor-pointer flex items-center gap-1 border-gray-500 border text-sm  px-3 py-1 rounded-2xl">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 "></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
      </span>
      open to work
    </div>
  );
};

export default Status;
