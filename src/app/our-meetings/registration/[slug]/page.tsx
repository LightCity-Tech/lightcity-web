"use client";

import React from "react";
import { Typography } from "@/src/ui";
import MeetingForm from "@/src/app/components/meeting-form";

export type FormData = {
  fullname: string;
  email: string;
  phonenumber: string;
  circuit: any;
  location: string;
};

const meetingDLC = [
  { heading: "Date", description: "11th - 13th April, 2024" },
  {
    heading: "Location",
    description: " 179 Ziks Avenue (Second Floor), Uwani, Enugu State.",
  },
  { heading: "Contact", description: "08141748947, 08138720239" },
]; //DLC stands for Date, Location and Contact

const UpcomingMeeting = () => {

  return (
    <section>
        <section className="w-full h-[100vh] relative overflow-hidden bg-[url('/assets/images/hero-wc.jpg')] bg-cover flex items-center justify-center brightness-80">
          <div className="">
            <Typography
              align="center"
              color="white"
              fontWeight="semi-bold"
              variant="h1"
              customClassName=""
            >
              Faith Seminar
            </Typography>
            <Typography
              align="center"
              color="white"
              fontWeight="medium"
              variant="h3"
            >
              179 Ziks Avenue (Second Floor), Uwani, Enugu State.
            </Typography>
            <Typography
              align="center"
              color="white"
              fontWeight="medium"
              variant="h3"
            >
              11th - 13th April, 2024
            </Typography>
          </div>
        </section>
        <section className="bg-white flex justify-start items-center p-10 md:py-10 md:px-14 lg:px-24 lg:py-16">
          <div className="w-full flex flex-col lg:flex-row lg:divide-x-2 divide-secondary-main ">
            <div className="pr-10 max-sm:mb-4">
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
            <div className="mt-6 px-0 lg:mt-0 lg:px-4 lg:pl-8">
              <Typography
                align="left"
                color="black"
                variant="h2"
                fontWeight="semi-bold"
                customClassName="mb-4 lg:mb-8"
              >
                Complete your registration
              </Typography>
              <MeetingForm />
            </div>
          </div>
        </section>
    </section>
  );
};

export default UpcomingMeeting;
