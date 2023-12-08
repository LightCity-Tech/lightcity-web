"use client";

import Image from "next/image";
import { Typography, BulletPoint, Button } from "@/src/ui";
import { givingReasons, gridImages } from "./data";

const GiveSection = () => {
  return (
    <section className="w-full md:px-8 lg:px-24 px-6 py-[5.8rem] flex flex-col items-center h-full justify-center gap-28 lg:flex lg:flex-row bg-white">
      <div className="lg:w-1/2 w-full">
        <div className="flex items-center mb-10">
          <Typography
            variant="h6"
            color="main-black"
            fontWeight="medium"
            align="left"
            customClassName="mr-6"
          >
            WHY WE GIVE
          </Typography>
          <div className="border-t border-main-black h-0 w-[12.5rem]"></div>
        </div>
        <div className="flex">
          {/* {givingReasons.map((reason, index) => (
            <div key={index} className="flex gap-3">
              <div className="pt-2">
                <BulletPoint />
              </div>

              <div>
                <Typography
                  variant="h4"
                  color="secondary-main"
                  fontWeight="medium"
                  align="left"
                  customClassName="mb-3"
                >
                  {reason.title}
                </Typography>
                <Typography
                  variant="h6"
                  color="main-black"
                  fontWeight="medium"
                  align="left"
                >
                  {reason.reason}
                </Typography>
              </div>
            </div>
          ))} */}
          <h3 className="text-[24px] md:text-[40px] font-semibold">We give in obedience to God word to support the work of ministry in our local church.</h3>
          
        </div>
        <Button
          variant="primary"
          color="primary"
          label="Give to Us"
          customClassName="mt-10"
        />
      </div>
      <div className="grid gap-3 grid-cols-2 grid-rows-3 lg:w-1/2 w-full">
        {gridImages.map((gridImage, index) => (
          <div key={index} className={gridImage.customClassName}>
            <Image
              src={gridImage.imageSrc}
              alt="Grid Image"
              width={250}
              height={250}
              className="rounded-md w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GiveSection;
