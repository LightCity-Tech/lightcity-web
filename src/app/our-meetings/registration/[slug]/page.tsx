"use client";

import React from "react";
import { Typography } from "@/src/ui";
import MeetingForm from "@/src/app/components/meeting-form";
import Link from "next/link";

export type FormData = {
  fullname: string;
  email: string;
  phonenumber: string;
  circuit: any;
  location: string;
};

const meetingDLC = [
  { heading: "Date", description: "28th - 31st August, 2025" },
  {
    heading: "Location",
    description: "Anglican Girls Grammar School Awkunanaw Enugu.",
  },
  { heading: "Contact", description: "08141748947, 08138720239" },
]; //DLC stands for Date, Location and Contact

const UpcomingMeeting = () => {
  return (
    <section>
      <section
        className="w-full h-[100vh] relative overflow-hidden bg-no-repeat bg-cover bg-center lg:bg-left flex items-center justify-center brightness-80"
        style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/images/pp2-1.jpg')" }}
      >
        <div className="">
          <Typography
            align="center"
            color="white"
            fontWeight="semi-bold"
            variant="h1"
            customClassName=""
          >
            Camp Meeting
          </Typography>
          <Typography
            align="center"
            color="white"
            fontWeight="medium"
            variant="h3"
            style={{marginTop: "1rem", fontSize: '20px', padding: '0 12px'}}
          >
            Anglican Girls Grammar School, Awkunanaw, Enugu State.
          </Typography>
          <Typography
            align="center"
            color="white"
            fontWeight="medium"
            variant="h3"
            style={{marginTop: "1rem"}}
          >
            28th - 31st August, 2025
          </Typography>
        </div>
      </section>
      <section className="">
        <div className="absolute w-full top-[120px] h-full bg-black bg-opacity-50 z-[100] flex justify-center items-center">
          <div className="w-9/10 absolute h-auto top-0 mx-4 bg-white rounded-lg border-r-2 p-10 flex flex-col justify-start items-center md:w-3/5 lg:w-1/2 lg:p-20">
            <Typography
              variant="h3"
              align="center"
              fontWeight="semi-bold"
              customClassName="text-red-600"
            >
              Registration is closed
            </Typography>
            <div className="mt-10 mb-4">
              <Typography
                variant="h5"
                color="secondary-main"
                align="center"
                fontWeight="semi-bold"
              >
                Sorry, registration is currently closed.
              </Typography>
            </div>
            {/* <Typography
              variant="h5"
              color="secondary-main"
              align="center"
              fontWeight="semi-bold"
              customClassName="cursor-pointer hover:text-secondary-200 hover:underline underline-offset-[5px]"
            >
              <Link href="/our-meetings">
                Click here to view other upcoming meetings.
              </Link>
            </Typography> */}
          </div>
        </div>
        <div className="bg-white flex justify-start items-center p-6 md:py-10 md:px-14 lg:px-24 lg:py-16">
          <div className="w-full flex flex-col lg:flex-row lg:divide-x-2 divide-secondary-main ">
            <div className="pr-10 max-sm:mb-4">
              {meetingDLC.map((item, index) => (
                <div key={index}>
                  <Typography
                    variant="body-reg"
                    color="secondary-main"
                    align="left"
                    fontWeight="semi-bold"
                    customClassName="uppercase mt-3"
                    // className="mt-3"
                  >
                    {item.heading}
                  </Typography>
                  <Typography
                    variant="caption-mid"
                    color="main-black"
                    align="left"
                    fontWeight="regular"
                    className="mt-1"
                  >
                    {item.description}
                  </Typography>
                </div>
              ))}
            </div>
            <div className="mt-6 px-0 lg:mt-0 lg:px-4 lg:pl-8">
              <h3
                // align="left"
                color="black"
                // variant="h2"
                // fontWeight="semi-bold"
                className="mb-4 lg:mb-8 text-2xl font-semibold text-secondary-main lg:text-4xl"
              >
                Complete your registration
              </h3>
              <MeetingForm />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default UpcomingMeeting;
