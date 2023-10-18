"use client";

import { Typography } from "@/src/ui";

const DescriptionSection = () => {
  return (
    <section className="w-full bg-secondary-25 py-16">
      <div className="w-full flex justify-center items-center mb-16">
        <div className="border-t border-[#050300] h-0 w-[12.5rem]"></div>
        <Typography
          variant="body-mid"
          fontWeight="medium"
          align="center"
          customClassName="text-[#050300] mx-[1.5rem]"
        >
          WHO WE ARE
        </Typography>
        <div className="border-t border-[#050300] h-0 w-[12.5rem]"></div>
      </div>
      <div className="w-[50%] mx-auto mb-[5.62rem]">
        <Typography
          variant="h2"
          fontWeight="semi-bold"
          color="secondary-main"
          align="center"
        >
          “ We are a family of God bound together in love. Serving his purpose
          and fulfilling his plans. Heralding his word in all the dark places.
          We are LightCity Church ”
        </Typography>
      </div>
    </section>
  );
};

export default DescriptionSection;
