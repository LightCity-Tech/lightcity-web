"use client";

import React from "react";
import MeetingCard from "@/src/ui/elements/meeting-card";
import SampleImg from "@/public/assets/images/sample-meeting-img.png";
import HeroSection from "../home/components/hero-section";
import ArrowUpIcon from "@/public/assets/svgs/arrow-up-right.svg";

const meetingsMockData = [
  {
    title: "Word Conference 2023",
    image:
      "https://res.cloudinary.com/tochukwu/image/upload/w_250/v1700481884/lightcity/qek9s7hvd51k4yr0rta9.webp",
    description:
      "We are a people of God with a mandate from God to herald the glorious message of Jesus; teaching and preaching until the whole earth is filled with his gospel as the waters cover the sea, and by God, we will not fail.",
    month: "December",
    startDay: "08",
    duration: "08TH - 10TH",
    year: "2023",
    location: "ENUGU, NIGERIA",
  },
  {
    title: "Power Sunday 2024",
    image:
      "https://res.cloudinary.com/tochukwu/image/upload/w_250/v1700481884/lightcity/qek9s7hvd51k4yr0rta9.webp",
    description:
      "We are a people of God with a mandate from God to herald the glorious message of Jesus; teaching and preaching until the whole earth is filled with his gospel as the waters cover the sea, and by God, we will not fail.",
    month: "January",
    startDay: "TBA",
    duration: "TBA",
    year: "2024",
    location: "ENUGU, NIGERIA",
  },
  {
    title: "Faith Seminar",
    image:
      "https://res.cloudinary.com/tochukwu/image/upload/w_250/v1700481884/lightcity/qek9s7hvd51k4yr0rta9.webp",
    description:
      "We are a people of God with a mandate from God to herald the glorious message of Jesus; teaching and preaching until the whole earth is filled with his gospel as the waters cover the sea, and by God, we will not fail.",
    month: "January",
    startDay: "TBA",
    duration: "TBA",
    year: "2024",
    location: "ENUGU, NIGERIA",
  },
  {
    title: "Fire Conference",
    image:
      "https://res.cloudinary.com/tochukwu/image/upload/w_250/v1700481884/lightcity/qek9s7hvd51k4yr0rta9.webp",
    description:
      "We are a people of God with a mandate from God to herald the glorious message of Jesus; teaching and preaching until the whole earth is filled with his gospel as the waters cover the sea, and by God, we will not fail.",
    month: "May/June",
    startDay: "TBA",
    duration: "TBA",
    year: "2024",
    location: "ENUGU, NIGERIA",
  },
  {
    title: "School of Prayer",
    image:
      "https://res.cloudinary.com/tochukwu/image/upload/w_250/v1700481884/lightcity/qek9s7hvd51k4yr0rta9.webp",
    description:
      "We are a people of God with a mandate from God to herald the glorious message of Jesus; teaching and preaching until the whole earth is filled with his gospel as the waters cover the sea, and by God, we will not fail.",
    month: "September",
    startDay: "13",
    duration: "13TH - 15TH",
    year: "2024",
    location: "ENUGU, NIGERIA",
  },
  {
    title: "Word Conference 2024",
    image:
      "https://res.cloudinary.com/tochukwu/image/upload/w_250/v1700481884/lightcity/qek9s7hvd51k4yr0rta9.webp",
    description:
      "We are a people of God with a mandate from God to herald the glorious message of Jesus; teaching and preaching until the whole earth is filled with his gospel as the waters cover the sea, and by God, we will not fail.",
    month: "November/December",
    startDay: "29",
    duration: "29TH - 1ST",
    year: "2024",
    location: "ENUGU, NIGERIA",
  },
];

const Meetings = () => {
  return (
    <section>
      <HeroSection
        title="Upcoming Meetings"
        subtitle="<h1 class='text-[48px] inline lg:text-[60px] xl:text-[84px] leading-[48px] lg:leading-[80px] mt-3 font-bold'> Word Conference </h1>"
        imageUrl="/assets/images/hero-wc.webp"
        buttonTitle="Register Online"
        buttonIconDirection="right"
        description="Word Conference is an annual special meeting of LightCity Church put together by the Spirit of God to have believers camp around the teaching of God's word and the intense atmospheres of the demonstrations of the Spirit."
      />
      <section className="lg:px-32 px-4 py-12 bg-white">
        <div className="divide-y divide-gray-300 space-y-4">
          {meetingsMockData.map((meetingMockData, index) => (
            <MeetingCard
              title={meetingMockData.title}
              image={meetingMockData.image}
              description={meetingMockData.description}
              month={meetingMockData.month}
              startDay={meetingMockData.startDay}
              duration={meetingMockData.duration}
              year={meetingMockData.year}
              location={meetingMockData.location}
              key={index}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Meetings;
