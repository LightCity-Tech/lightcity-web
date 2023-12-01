"use client";

import Image, { StaticImageData } from "next/image";

import { Typography, Button } from "..";
import BrownPlayIcon from "@/public/assets/svgs/brown-play-icon.svg";

interface SeriesCardProps{
    image: StaticImageData;
    title: string;
    subtitle: string;
    description: string;
}

const SeriesCard = ({
    image,
    title,
    subtitle,
    description
}:SeriesCardProps) => {
  return (
    <div className="flex flex-col md:flex md:flex-row gap-12">
      <div className="lg:w-4/5 w-full rounded-[1.25rem]">
        <Image
            src={image}
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
        >{title}</Typography>
        <Typography
            variant="body-mid"
            color="main-black"
            fontWeight="medium"
            align="left"
        >{subtitle}</Typography>
        <Typography
            variant="body-reg"
            color="main-black"
            fontWeight="regular"
            align="left"
        >
          {description}
        </Typography>
      <div className="w-2/5 mt-5">
         <Button
        variant="outlined"
        color="dark-outlined"
        label="Listen online"
        leftIcon={<BrownPlayIcon />}
        customClassName="mb-2"
      />
      </div>
       
      </div>
    </div>
  );
};

export {SeriesCard};
