import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <nav className="flex items-center justify-between px-10 h-[100px]  w-full bg-white z-10">
      <Link href={"/"}>
        <div className="w-[60px]  h-full flex justify-center items-center">
          🌺
        </div>
      </Link>

      <div className="w-[60px]  h-full flex justify-center items-center ">
        #️⃣
      </div>
    </nav>
  );
};

export default index;
