"use client";
import React from "react";
import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();

  function handleClick() {
    router.back();
  }
  return (
    <div
      onClick={() => handleClick()}
      className="py-3 z-10 px-10 h-[50px] bg-black text-white inline cursor-pointer mb-10 "
    >
      GoBack
    </div>
  );
};

export default GoBack;
