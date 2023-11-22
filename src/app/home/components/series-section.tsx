"use client";

import { Typography, SeriesCard } from "@/src/ui";
import SampleImg from "@/public/assets/images/series-1.png";

const SeriesSection = () => {
  return (
    <section className="bg-white py-16 px-64 md:px-2">
      <div className="w-full flex md:flex md:flex-col justify-center items-center mb-16">
        <div className="border-t border-main-black h-0 w-[12.5rem]"></div>
        <Typography
          variant="body-mid"
          fontWeight="medium"
          align="center"
          customClassName="text-main-black mx-[1.5rem]"
        >
          CURRENT SERIES
        </Typography>
        <div className="border-t border-main-black h-0 w-[12.5rem]"></div>
      </div>
      <div>
        <SeriesCard
         image={SampleImg}
         title="A Living Sacrifice"
         subtitle="Serving the Lord effectively in a simple way"
         description="We are a people of God with a mandate from God to herald the glorious message of Jesus; teaching and preaching until the whole earth is filled with his gospel as the waters cover the sea, and by God, we will not fail."
        />
      </div>
    </section>
  );
};

export default SeriesSection;
