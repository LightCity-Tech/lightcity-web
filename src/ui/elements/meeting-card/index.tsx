"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Typography, Button } from "..";
import LocationIcon from "@/public/assets/svgs/location.svg";
import RedirectIcon from "@/public/assets/svgs/redirect-icon.svg";
import CalenderDate from "@/public/assets/svgs/calendar-date.svg";
import Location from "@/public/assets/svgs/icon.svg";

interface MeetingProps {
  image: string;
  title: string;
  description: string;
  month: string;
  startDay: string;
  year: string;
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
  year
}: MeetingProps) => {
  return (
    <div className="w-auto flex md:flex md:flex-col justify-between gap-16 px-4 py-6 bg-white">
      <div className="flex md:flex md:flex-col gap-8 w-9/12 md:w-full bg-white">
        <div className="w-3/5 md:w-full rounded-[1.25rem]">
          <img
            src={image}
            alt="Sample Image for a Meeting"
            className="h-full w-full object-fill"
          />
        </div>
        <div className="flex flex-col md:hidden">
        <Link href={`/our-meetings/${title.replace(" ", "-")}`}>
          <Typography
            variant="h3"
            color="secondary-main"
            customClassName="mb-4 md:text-[24px]"
          >
            {title}
          </Typography>
        </Link>
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
        <div className="hidden md:block">
        <Typography
            variant="body-reg"
            color="secondary-main"
            customClassName="mb-4 md:text-[24px] uppercase"
          >
            {title}
          </Typography>
          <div className="flex space-x-4">
            <CalenderDate />
              <p>
                {duration} {month} {year}
              </p>
          </div>
          <div className="flex space-x-4">
            <Location />
              <div>
                {location}
              </div>
          </div>
        </div>
      </div>
      <div className="w-3/12 md:w-full md:hidden md:items-start flex flex-col items-stretch">
        <Typography variant="caption-mid" align="center" customClassName="grow">
          {month}
        </Typography>
        <Typography
          color="secondary-main"
          fontWeight="bold"
          align="center"
          customClassName="!text-[7.5rem] md:hidden grow"
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

export default MeetingCard
