"use client";

import React, { useState } from "react";
import { Typography } from "../typography";
import Link from "next/link";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

interface ISeries {
  dateUploaded: string;
  _id: string;
  title: string;
  yearTaught: string;
  thumbnail: any;
  tracks: Tracks[];
}

interface DropdownProps {
  title: string;
  sermons: ISeries[];
}

const SeriesDropdown: React.FC<DropdownProps> = ({ title, sermons }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative w-auto">
      <button
        className={`w-full bg-white p-4 flex items-center justify-between border-2 rounded-lg active:text-secondary-50 ${
          isOpen
            ? "border-secondary-main hover:border-secondary-main font-semibold"
            : "border-secondary-25 hover:border-secondary-50 font-regular hover:font-semi-bold"
        }`}
        onClick={toggleDropdown}
      >
        {title}
        {isOpen ? <SlArrowUp /> : <SlArrowDown />}
      </button>
      {isOpen && (
        <div className=" bg-white px-4 py-2 w-full rounded-lg divide-y mt-2 max-h-[20rem] overflow-y-scroll">
          {sermons.map((sermon, index) => {
            const { title } = sermon;

            const slugifiedTitle = title
              .trim()
              .replace(/\s+/g, "-")
              .toLowerCase();

            return (
              <div className="cursor-pointer py-2" key={index}>
                <Link
                  href={{
                    pathname: `sermons/${slugifiedTitle}`,
                    query: { id: sermon._id },
                  }}
                  className="block p-4 hover:bg-secondary-25 hover:font-medium rounded-lg"
                >
                  <Typography variant="body-reg" color="secondary-main">
                    {sermon.title}
                  </Typography>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export { SeriesDropdown };
