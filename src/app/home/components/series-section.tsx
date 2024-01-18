"use client";

import { Typography, SeriesCard } from "@/src/ui";
import SampleImg from "@/public/assets/images/series-1.png";
import FeaturedImage1 from "@/public/assets/images/featured1.png";
import FeaturedImage2 from "@/public/assets/images/featured2.png";
import Link from "next/link";

const SeriesSection = () => {
  return (
    <section className="bg-white py-12 md:px-8 lg:px-20 xl:px-24 2xl:px-40 px-5">
      <div className="w-full flex flex-row justify-center items-center mb-16">
        <div className="border-t border-main-black h-0 w-[5rem] lg:w-[12.5rem]"></div>
        <Typography
          variant="body-mid"
          fontWeight="medium"
          align="center"
          customClassName="text-main-black mx-[1.5rem]"
        >
          LATEST SERIES
        </Typography>
        <div className="border-t border-main-black h-0 w-[5rem] lg:w-[12.5rem]"></div>
      </div>
      <div className="space-y-8 flex flex-col gap-y-12">
        <SeriesCard
          image={"/assets/images/featured1.png"}
          url={"656d5d12134a3228cf3e5ecb"}
          title="Built to Last"
          subtitle="(God’s Wisdom for Healthy Relationships)"
          description="In a post-modern world that is constantly redefining identity, meaning, etc… which consequently has influenced how people relate,

         We have to search the Holy Scriptures, being God’s unchanging word in an ever changing world for our relationship ethos,
         
         Why relationships?
         How do I nurture relationships in a healthy way?
         "
        />
        <SeriesCard
          image={"/assets/images/featured2.png"}
          url={"656d5d12134a3228cf3e5ee9"}
          title="Guard your Heart"
          subtitle="(Serving the Lord effectively in a simple way)"
          description="In an information age, where information accessibility and it's consequent overload is at an all time high, we need now more than ever to heed the instructions of Scriptures.
         So this Sunday we examine this instruction as we answer, the 'what', 'why' and 'how' of the same, 
         "
        />
      </div>
    </section>
  );
};

export default SeriesSection;
