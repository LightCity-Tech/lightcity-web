"use client";

import { Typography, Button } from "@/src/ui";
import BrownPlayIcon from "@/public/assets/svgs/brown-play-icon.svg";

const HeroSection = () => {
  return (
    <section className="w-full h-[90vh] px-24 flex items-center">
      <div className="w-9/12">
        <Typography
          variant="body-mid"
          color="white"
          fontWeight="medium"
          align="left"
        >
          WELCOME TO LIGHTCITY CHURCH
        </Typography>
        <Typography 
          variant="h1"
          color="white"
          fontWeight= "bold"
          align="left"
        >
          ...where we are committed to giving your life an{" "}
          <Typography
           variant="h1"
           font="kashuan"
           fontWeight="regular"
           color="primary-main"
           customClassName="inline"
          >eternal relevance!</Typography>
        </Typography>

        <Button
          variant="primary"
          color="primary"
          label="Listen Online"
          leftIcon={<BrownPlayIcon />}
          customClassName="mt-16"
        />
      </div>
    </section>
  );
};

export default HeroSection;
