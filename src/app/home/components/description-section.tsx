"use client";

import { Typography } from "@/src/ui";

import PicturesSlide from "./pictures-slide";

const DescriptionSection = () => {
  return (
    <section className="w-full bg-secondary-25 md:px-3 py-16">
      <div className="w-full flex justify-center items-center mb-16">
        <div className="border-t border-main-black h-0 w-[12.5rem]"></div>
        <Typography
          variant="body-mid"
          fontWeight="medium"
          align="center"
          color="main-black"
          customClassName="mx-[1.5rem] md:w-[250px]"
        >
          WHO WE ARE
        </Typography>
        <div className="border-t border-main-black h-0 w-[12.5rem]"></div>
      </div>
      <div className="w-[50%] md:w-full mx-auto mb-[5.62rem]">
        <Typography
          variant="h2"
          fontWeight="semi-bold"
          color="secondary-main"
          align="center"
          customClassName="md:text-2xl"
        >
          “ We are a family of God bound together in love. Serving his purpose
          and fulfilling his plans. Heralding his word in all the dark places.
          We are LightCity Church ”
        </Typography>
      </div>
      <section className="mt-12">
        <PicturesSlide />
      </section>
    </section>
  );
};

export default DescriptionSection;
