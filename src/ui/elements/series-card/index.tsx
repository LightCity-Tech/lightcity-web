"use client";

import { Typography, Button } from "..";
import BrownPlayIcon from "@/public/assets/svgs/brown-play-icon.svg";
import Link from "next/link";

interface SeriesCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
}

const SeriesCard = ({
  image,
  title,
  subtitle,
  description,
  url,
}: SeriesCardProps) => {
  return (
    <div className="flex flex-col md:flex md:flex-row md:gap-12">
      <div
        className="md:w-2/5 w-full rounded-[1.25rem]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          height: "300px",
        }}
      >
      </div>
      <div className="md:w-3/5 py-[0.75rem] mt-3 md:mt-0 ">
        <Typography
          variant="h3"
          color="secondary-main"
          fontWeight="semi-bold"
          align="left"
        >
          {title}
        </Typography>
        <Typography
          variant="body-mid"
          color="main-black"
          fontWeight="medium"
          align="left"
          customClassName="mb-4"
        >
          {subtitle}
        </Typography>
        <Typography
          variant="body-reg"
          color="main-black"
          fontWeight="regular"
          align="left"
        >
          {description}
        </Typography>
        <div className="w-3/5 mt-5">
          <Link href={`/sermons/${url}`}>
            <Button
              variant="outlined"
              color="dark-outlined"
              label="Listen online"
              leftIcon={<BrownPlayIcon className = "fill-secondary-main group-hover:fill-white" />}
              customClassName="mb-2 group"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export { SeriesCard };
