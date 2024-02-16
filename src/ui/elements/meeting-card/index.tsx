"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Typography, Button } from "..";
import LocationIcon from "@/public/assets/svgs/location.svg";
import RedirectIcon from "@/public/assets/svgs/redirect-icon.svg";
import CalenderDate from "@/public/assets/svgs/calendar-date.svg";
import Location from "@/public/assets/svgs/icon.svg";

interface MeetingProps {
  image?: string;
  title: string;
  description: string;
  month: string;
  startDay: string;
  year: string;
  duration?: string;
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
    <div className="md:flex md:flex-row flex flex-col md:justify-between md:gap-16 px-4 py-6 bg-white">
      <div className="md:flex md:flex-row flex flex-col md:items-center gap-8 w-full bg-white">
        <div className="w-full rounded-[1.25rem]">
        <Link href={`/our-meetings/${title.replace(" ", "-")}`}>
         { image && <img
            src={image}
            alt="Sample Image for a Meeting"
            className="h-full w-full object-fill rounded-[1.25rem]"
          />}
          </Link>
        </div>
        <div className="md:flex md:flex-col hidden">
        <Link href={`/our-meetings/${title.replace(" ", "-")}`}>
          <Typography
            variant="h3"
            color="secondary-main"
            customClassName="mb-4 md:text-[24px]"
          >
            {title}
          </Typography>
        </Link>
          <Typography variant="body-reg" customClassName="">
            {description}
          </Typography>
          <Link href={`/our-meetings/${title.replace(" ", "-")}`} className="w-fit flex items-center mt-auto">
            <Button
              variant="no-border"
              label="Learn More"
              color="primary"
              rightIcon={<RedirectIcon />}
            />
          </Link>
        </div>
        <div className="md:hidden">
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
                {duration && duration} {month} {year}
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
      <div className="md:w-3/12 hidden md:items-stretch md:flex flex-col">
        <Typography variant="caption-mid" align="center" customClassName="grow -mb-12 uppercase">
          {month}
        </Typography>
        <Typography
          color="secondary-main"
          fontWeight="bold"
          align="center"
          customClassName="!text-[7.5rem] hidden md:block grow -mb-12"
        >
          {startDay}
        </Typography>
        <Typography variant="caption-mid" align="center" customClassName="grow ml-2">
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
