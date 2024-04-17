import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "@/public/img1.jpg";
import img2 from "@/public/img2.jpg";
import img3 from "@/public/img3.jpg";
import img4 from "@/public/img4.jpg";
import img5 from "@/public/img5.jpg";
import img6 from "@/public/img6.jpg";
import img7 from "@/public/img7.jpg";
import Link from "next/link";

const Profile = () => {
  const firstRow = [img1, img2, img3];
  const secRow = [img4, img5, img6, img7];
  return (
    <div className="flex flex-col gap-7 pb-10">
      <div className="flex gap-5 items-center  ">
        <div className="relative w-[90px] overflow-hidden h-[90px] md:w-[120px] md:h-[120px] border border-gray-600 rounded-full">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/121556134_790489438193835_5146308733443650779_n.jpg?alt=media&token=10bdae2e-eedc-4f08-8d01-ef07ae8d953c"
            fill={true}
            alt=""
            className="w-full h-full object-center"
          />
        </div>
        <div>
          <h1 className="text-xl font-semibold md:text-4xl">Hein Htet Aung</h1>
          <h1 className=" text-gray-800">frontend Developer</h1>
        </div>
      </div>
      <div className="flex justify-between items-center p-5">
        <div className="text-center">
          <h1 className="font-semibold">2y+</h1>
          <p className="text-gray-800">Exp</p>
        </div>
        <div className="text-center ">
          <h1 className="font-semibold">23</h1>
          <p className="text-gray-800">Age</p>
        </div>
        <div className="text-center">
          <h1 className="font-semibold">Bangkok</h1>
          <p className="text-gray-800">Base</p>
        </div>
      </div>
      <div className=" rounded ">
        <h1 className="text-xl ">About</h1>
        <p className="text-sm my-3 text-gray-800 leading-[1.5rem]">
          As a JavaScript developer with a strong passion for frontend work, I
          bring a dynamic mix of creativity and technical skills to the table.
          With two years of experience specializing in frontend development, I
          focus on creating exceptional user interfaces. I love the journey from
          design ideas to actual code, allowing my creativity to shine
          throughout the process.
        </p>
      </div>
      <div className="">
        <Marquee autoFill className="flex ">
          {firstRow.map((x, i) => {
            return (
              <div key={i} className="relative w-[200px] mx-3 h-[120px]">
                <Image
                  src={x}
                  alt=""
                  fill={true}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </Marquee>
        <Marquee direction="right" autoFill className="my-3 ">
          {secRow.map((x, i) => {
            return (
              <div key={i} className="relative w-[200px] mx-3 h-[120px]">
                <Image
                  src={x}
                  alt=""
                  fill={true}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </Marquee>
      </div>
      <div className="flex justify-between items-center">
        <p className=" text-md ">Reach Me</p>
        <div className="flex gap-3">
          <Link href={"https://github.com/Da-Gu-Gu-Gu"}>
            <p className="text-sm cursor-pointer underline">mail</p>
          </Link>
          <Link href={"https://github.com/Da-Gu-Gu-Gu"}>
            <p className="text-sm cursor-pointer underline">github</p>
          </Link>
          <Link href={"https://www.linkedin.com/in/dagugu/"}>
            <p className="text-sm cursor-pointer underline">linkedin</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
