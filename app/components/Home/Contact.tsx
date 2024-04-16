import Link from "next/link";
import React from "react";
import Status from "../Status";

const Contact = () => {
  return (
    <div id="contac" className="h-screen w-screen fixed top-0   ">
      <div className="w-[90vw] h-screen mx-auto flex  flex-col gap-5 justify-center">
        <h1 className="uppercase  text-2xl lg:text-[1.5rem] xl:text-[2rem]">
          Let&apos;s create together a unique that looks like{" "}
          <span className="font-bold">you.</span>{" "}
        </h1>
        <div className="flex flex-col gap-10 md:flex-row mt-5 md:justify-between md:items-center">
          <div className="">
            <h1 className="mb-2">Status</h1>
            <Status />
          </div>
          <div className="">
            <h1 className="mb-2">Email</h1>
            <a
              className="underline uppercase cursor-pointer"
              href="mailto:daguguguu@gmail.com"
            >
              daguguguu@gmail.com
            </a>
          </div>
          <div className="">
            <h1 className="mb-2">Socials</h1>

            <div
              className="flex gap-5 uppercase  cursor-pointer
 "
            >
              <Link href={"https://github.com/Da-Gu-Gu-Gu"}>
                <p className="underline">Github</p>
              </Link>
              <Link href={"https://www.linkedin.com/in/dagugu/"}>
                <p className="underline">Linkedin</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
