"use client";

import { Typography } from "@/src/ui";

import PicturesSlide from "./picture-slide";

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
      <div className="lg:w-[50%] xl:w-[70%] text-center w-[100%] md:w-[80%] mx-auto mb-[5.62rem]">
        <h2
          className="lg:text-[24px] md:text-[20px] xl:text-[40px] font-semibold text-[18px]"
        >
          “ We are a family of God bound together in love.<br className="hidden lg:block"/> Serving his purpose
          and fulfilling his plans. <br className="hidden lg:block"/> Heralding his word in all the dark places. <br className="hidden lg:block"/> 
          We are LightCity Church ”
        </h2>
      </div>
      <section className="mt-12">
        <PicturesSlide />
      </section>
    </section>
  );
};

export default DescriptionSection;
