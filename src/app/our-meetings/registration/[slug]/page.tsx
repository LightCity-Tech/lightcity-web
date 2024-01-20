"use client";

import React from "react";
import { Typography, Button } from "@/src/ui";
import HeroSection from "@/src/app/home/components/hero-section";

const meetingDLC = [
  { heading: "Date", description: "16th - 18th February, 2024" },
  {
    heading: "Location",
    description: " 179 Ziks Avenue (Second Floor), Uwani. Enugu State",
  },
  { heading: "Contact", description: "08141748947, 08138720239" },
];

const UpcomingMeeting = () => {
  return (
    <section>
      <section className="w-full h-[100vh] relative overflow-hidden bg-[url('/assets/images/hero-wc.webp')] bg-cover flex items-center justify-center brightness-80">
        <div className="w-2/5">
          <Typography
            align="center"
            color="white"
            fontWeight="semi-bold"
            variant="h1"
          >
            Faith Seminar
          </Typography>
          <Typography
            align="center"
            color="white"
            fontWeight="medium"
            variant="h3"
          >
            179 Ziks Avenue (Second Floor), Uwani. Enugu State
          </Typography>
          <Typography
            align="center"
            color="white"
            fontWeight="medium"
            variant="h3"
          >
            08th - 10th February, 2024
          </Typography>
        </div>
      </section>
      <section className="bg-white flex justify-start items-center px-24 py-16">
        <div className="flex divide-x-2 divide-secondary-main">
          <div className="pr-10">
            {meetingDLC.map((item, index) => (
              <div key={index}>
                <Typography
                  variant="body-reg"
                  color="secondary-main"
                  align="left"
                  fontWeight="semi-bold"
                  customClassName="uppercase"
                >
                  {item.heading}
                </Typography>
                <Typography
                  variant="caption-mid"
                  color="main-black"
                  align="left"
                  fontWeight="regular"
                >
                  {item.description}
                </Typography>
              </div>
            ))}
          </div>
          <div className="px-4">
            <Typography
              align="left"
              color="black"
              variant="h2"
              fontWeight="semi-bold"
              customClassName="text-5xl"
            >
              Complete your registration
            </Typography>

            <Button
              variant="primary"
              color="primary"
              label="Submit"
              customClassName="w-full flex justify-center items-center"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default UpcomingMeeting;
