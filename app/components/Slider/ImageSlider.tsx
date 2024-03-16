import Image from "next/image";
import React from "react";

const ImageSlider = () => {
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/images%2Fmatesat%2FHotpot%200%20(1).png?alt=media&token=888bd1e4-bb97-4d4d-8a7f-3c6ea3cbd15f",
    "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/images%2Fmatesat%2FHotpot%201%20(1).png?alt=media&token=a65cf692-9425-4f57-9eb3-6730129247d8",
    "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/images%2Fmatesat%2FHotpot%202%20(1).png?alt=media&token=9421a2e8-47f4-4c14-bd19-9eb4d46e3f8b",
    "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/images%2Fmatesat%2FHotpot%203%20(1).png?alt=media&token=4332a322-1c89-428c-9556-9f119a300779",
    "https://firebasestorage.googleapis.com/v0/b/portfolio-96911.appspot.com/o/images%2Fmatesat%2FHotpot%204.png?alt=media&token=9aca18db-b1c8-42ff-82dc-2096d6d7753f",
  ];

  return (
    <div className="w-full mb-10 h-[200px] md:h-[320px] lg:h-[440px] flex  gap-2">
      {images.map((img) => {
        return (
          <div
            key={img}
            className="   w-1/5 h-full overflow-hidden  rounded-lg  relative "
          >
            <Image
              src={img}
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
              alt="feature img"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
