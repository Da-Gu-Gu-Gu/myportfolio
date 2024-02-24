import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <nav className="flex items-center border h-[60px]  w-full bg-white z-10">
      <Link href={"/"}>
        <div className="w-[60px] border-r h-full flex justify-center items-center">
          🌺
        </div>
      </Link>
      <p className="flex flex-grow justify-center font-bold tracking-widest">
        Hello.
      </p>
      <div className="w-[60px] border-l h-full flex justify-center items-center ">
        #️⃣
      </div>
    </nav>
  );
};

export default index;
