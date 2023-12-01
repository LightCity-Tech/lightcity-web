"use client";

import { Typography } from "@/src/ui";

import PicturesSlide from "./pictures-slide";

const DescriptionSection = () => {
  return (
    <section className="w-full bg-secondary-25 px-4 py-16">
      <div className="w-full flex justify-center items-center mb-16">
        <div className="border-t border-main-black h-0 w-[12.5rem]"></div>
        <Typography
          variant="body-mid"
          fontWeight="medium"
          align="center"
          color="main-black"
          customClassName="mx-[1.5rem] w-[250px] lg:w-[152px]"
        >
          WHO WE ARE
        </Typography>
        <div className="border-t border-main-black h-0 w-[12.5rem]"></div>
      </div>
      <div className="lg:w-[50%] xl:w-[70%] w-[100%] md:w-full mx-auto mb-[5.62rem]">
        <Typography
          variant="h2"
          fontWeight="semi-bold"
          color="secondary-main"
          align="center"
          customClassName="text-[24px] xl:text-[40px]"
        >
          “ We are a family of God bound together in love.<br className="hidden lg:block"/> Serving his purpose
          and fulfilling his plans. <br className="hidden lg:block"/> Heralding his word in all the dark places.<br className="hidden lg:block"/> 
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
