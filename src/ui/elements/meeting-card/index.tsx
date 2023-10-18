"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Typography, Button } from "..";
import LocationIcon from "@/public/assets/svgs/location.svg";
import RedirectIcon from "@/public/assets/svgs/redirect-icon.svg";

interface MeetingProps {
  image: StaticImageData;
  title: string;
  description: string;
  month: string;
  startDay: string;
  duration: string;
  location: string;
}

const MeetingCard = ({
  image,
  title,
  description,
  month,
  startDay,
  duration,
  location,
}: MeetingProps) => {
  return (
    <div className="w-auto flex justify-between gap-16 px-4 py-6 bg-white">
      <div className="flex gap-8 w-9/12">
        <div className="w-3/5 rounded-[1.25rem]">
          <Image
            src={image}
            alt="Sample Image for a Meeting"
            className="h-full w-full object-fill"
          />
        </div>
        <div className="flex flex-col">
          <Typography
            variant="h3"
            color="secondary-main"
            customClassName="mb-4"
          >
            {title}
          </Typography>
          <Typography variant="h6" customClassName="">
            {description}
          </Typography>
          <Link href="/" className="w-fit flex items-center mt-auto">
            <Button
              variant="text"
              label="Learn More"
              color="primary"
              rightIcon={<RedirectIcon />}
            />
          </Link>
        </div>
      </div>
      <div className="w-3/12 flex flex-col items-stretch">
        <Typography variant="caption-mid" align="center" customClassName="grow">
          {month}
        </Typography>
        <Typography
          color="secondary-main"
          fontWeight="bold"
          align="center"
          customClassName="!text-[7.5rem] grow"
        >
          {startDay}
        </Typography>
        <Typography variant="caption-mid" align="center" customClassName="grow">
          {duration}
        </Typography>
        <div className="flex justify-center gap-2 grow">
          <LocationIcon />
          <Typography variant="caption-mid">{location}</Typography>
        </div>
      </div>
    </div>
  );
};

export {MeetingCard};
