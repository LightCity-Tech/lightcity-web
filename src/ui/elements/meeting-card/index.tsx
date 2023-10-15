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

const MeetingCard = ({image, title, description, month, startDay, duration, location}: MeetingProps) => {
  return (
    <div className="w-auto flex justify-between gap-16 px-4 py-6 bg-white">
      <div className="flex gap-8 w-9/12">
        <div>
          <Image src={image} alt="Sample Image for a Meeting" />
        </div>
        <div className="flex flex-col">
          <Typography
            variant="h3"
            color="secondary-main"
            customClassName="mb-4 grow"
          >
            {title}
          </Typography>
          <Typography variant="h6" customClassName="grow">
            {description}
          </Typography>
          <Link href="/" className="grow≤h">
            <Button
                variant="text"
                label = "Learn More"
                color = "primary"
                rightIcon = {<RedirectIcon/>}
            />
          </Link>
        </div>
      </div>
      <div className="w-3/12 flex flex-col items-stretch">
        <Typography variant="caption-mid" align="center" customClassName="grow">{month}</Typography>
        <Typography
          color="secondary-main"
          fontWeight="bold"
          align = "center"
          customClassName="text-8xl grow"
        >
          {startDay}
        </Typography>
        <Typography variant="caption-mid" align="center" customClassName="grow">{duration}</Typography>
        <div className="flex justify-center gap-2 grow">
          <LocationIcon />
          <Typography variant="caption-mid">{location}</Typography>
        </div>
      </div>
    </div>
  );
};

export default MeetingCard;
