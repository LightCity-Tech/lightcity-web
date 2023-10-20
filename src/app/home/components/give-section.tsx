"use client";

import Image from "next/image";
import { Typography, BulletPoint, Button } from "@/src/ui";
import { givingReasons, gridImages } from "./data";

const GiveSection = () => {

  return (
    <section className="w-full px-24 py-[5.8rem] flex justify-between gap-28 bg-white">
      <div className="w-1/2">
        <div className="flex items-center mb-10">
          <Typography
            variant="h4"
            color="main-black"
            fontWeight="medium"
            align="left"
            customClassName="mr-6"
          >
            WHY WE GIVE
          </Typography>
          <div className="border-t border-main-black h-0 w-[12.5rem]"></div>
        </div>
        <div className="flex flex-col gap-10">
          {givingReasons.map((reason, index) => (
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
                >{reason.title}</Typography>
                <Typography
                    variant="h6"
                    color="main-black"
                    fontWeight="medium"
                    align="left"
                >{reason.reason}</Typography>
              </div>
            </div>
          ))}
        </div>
            <Button
                variant="primary"
                color="primary"
                label="Give to Us"
                customClassName="mt-10"
            />
      </div>
      <div className="grid-cols-2 grid-rows-3 w-1/2">
            {gridImages.map((gridImage, index) => (
                <div key = {index} className={gridImage.customClassName}>
                    <Image
                        src = {gridImage.imageSrc}
                        alt = "Grid Image"
                        width={250}
                        height={250}
                    />
                </div>
            ))}
      </div>
    </section>
  );
};

export default GiveSection;
