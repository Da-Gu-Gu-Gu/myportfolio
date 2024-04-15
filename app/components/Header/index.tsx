"use client";
import React, { useState } from "react";
import Menu from "./Menu";

const index = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative mb-3 z-40">
      <nav className="flex bg-white items-center justify-between px-10 h-[100px]  w-full  z-40">
        <div className="w-[60px]  h-full  flex justify-center items-center"></div>

        <div
          onClick={() => setOpen(true)}
          className="w-[60px] gap-3 cursor-pointer h-full flex flex-col justify-center items-center "
        >
          <div className="w-full h-px bg-black"></div>
          <div className="w-full h-px bg-black"></div>
        </div>
      </nav>
      {open && <Menu onClose={() => setOpen(false)} />}
    </div>
  );
};

export default index;
