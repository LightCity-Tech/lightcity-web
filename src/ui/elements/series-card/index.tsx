"use client";

import Image, { StaticImageData } from "next/image";

import { Typography, Button } from "..";
import  SampleImg from "@/public/assets/images/series-1.png";
import BrownPlayIcon from "@/public/assets/svgs/brown-play-icon.svg"

const SeriesCard = () => {
  return (
    <div className="flex gap-12">
      <div className="w-4/5 rounded-[1.25rem]">
        <Image
            src={SampleImg}
            alt="Sample Image for our current series"
            className="h-full w-full object-fill"
        />
      </div>
      <div className="py-[0.75rem] flex flex-col justify-between">
        <Typography
            variant="h3"
            color="secondary-main"
            fontWeight="semi-bold"
            align="left"
        >A Living Sacrifice</Typography>
        <Typography
            variant="caption-mid"
            color="main-black"
            fontWeight="medium"
            align="left"
        >Serving the Lord effectively in a simple way</Typography>
        <Typography
            variant="body-mid"
            color="main-black"
            fontWeight="regular"
            align="left"
        >
          We are a people of God with a mandate from God to herald the glorious
          message of Jesus; teaching and preaching until the whole earth is
          filled with his gospel as the waters cover the sea, and by God, we
          will not fail.{" "}
        </Typography>
        <Button
            variant="text"
            label="Listen Online"
            color="primary"
            leftIcon = {<BrownPlayIcon/>}
            customClassName=""
        />
      </div>
    </div>
  );
};

export {SeriesCard};
