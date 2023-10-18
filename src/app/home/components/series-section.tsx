"use client";

import { Typography, SeriesCard } from "@/src/ui";

const SeriesSection = () => {
  return (
    <section className="bg-white py-16 px-64">
      <div className="w-full flex justify-center items-center mb-16">
        <div className="border-t border-[#050300] h-0 w-[12.5rem]"></div>
        <Typography
          variant="body-mid"
          fontWeight="medium"
          align="center"
          customClassName="text-[#050300] mx-[1.5rem]"
        >
          CURRENT SERIES
        </Typography>
        <div className="border-t border-[#050300] h-0 w-[12.5rem]"></div>
      </div>
      <div>
        <SeriesCard/>
      </div>
    </section>
  );
};

export default SeriesSection;
