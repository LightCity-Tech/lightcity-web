"use client";

import Image, { StaticImageData } from "next/image";

import { Typography, Button } from "..";
import BrownPlayIcon from "@/public/assets/svgs/brown-play-icon.svg";

interface SeriesCardProps{
    image: string;
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
    <div className="flex flex-col md:flex md:flex-row md:gap-12">
      <div className="md:w-2/5 w-full rounded-[1.25rem]" style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        height: '300px',
      }}>
        {/* <Image
            src={image}
            alt="Sample Image for our current series"
            className="object-cover"
            width={300}
            height={300}
        /> */}
      </div>
      <div className="md:w-3/5 py-[0.75rem] mt-3 md:mt-0 flex flex-col justify-between">
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
      <div className="w-3/5 mt-5">
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
