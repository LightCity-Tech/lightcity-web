"use client";

import React from "react";
import dynamic from "next/dynamic";

const MeetingCard = dynamic(() => import('@/src/ui/elements/meeting-card'))
const HeroSection = dynamic(() => import('../home/components/hero-section'))

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
    title: "Power Sunday 1.0 2024",
    // image:
    //   "https://res.cloudinary.com/tochukwu/image/upload/w_250/v1700481884/lightcity/qek9s7hvd51k4yr0rta9.webp",
    description:
      "We gather under the rain of God's grace and glory where we receive healings, miracles, divine interventions and an encounter with the living Jesus. It's a day of encounter with the supernatural power of God.",
    month: "February",
    startDay: "25",
    // duration: "25TH",
    year: "2024",
    location: "ENUGU, NIGERIA",
  },
  {
    title: "Faith Seminar",
    // image:
    //   "https://res.cloudinary.com/tochukwu/image/upload/w_250/v1700481884/lightcity/qek9s7hvd51k4yr0rta9.webp",
    description:
      "This is a meeting put together specially by the Spirit of God for this times and seasons to have believers grounded in the rudiments of the faith walk. This meeting will make walking in faith an everyday part of your life.",
    month: "April",
    startDay: "11",
    duration: "11th to 14th",
    year: "2024",
    location: "ENUGU, NIGERIA",
    link: ""
  },
  {
    title: "Fire Conference 2024",
    // image:
    //   "https://res.cloudinary.com/tochukwu/image/upload/w_250/v1700481884/lightcity/qek9s7hvd51k4yr0rta9.webp",
    description:
      "This is a meeting where the fire of God's Spirit will be regnited and made to burn much more in the hearts of believers to the end that they are much more effective in the ministry of the word and the Spirit",
    month: "July",
    startDay: "26",
    duration: "26th to 27th",
    year: "2024",
    location: "ENUGU, NIGERIA",
  },
  {
    title: "School of Prayer 2024",
    // image:
    //   "https://res.cloudinary.com/tochukwu/image/upload/w_250/v1700481884/lightcity/qek9s7hvd51k4yr0rta9.webp",
    description:
      "This is a meeting where we come for depths and heights in our prayer lives. We come to receive fresh fire on our prayer altars. We come to be used of the Lord much more in the place of prayers.",
    month: "September",
    startDay: "13",
    duration: "13TH - 15TH",
    year: "2024",
    location: "ENUGU, NIGERIA",
  },
  {
    title: "Word Conference 2024",
    // image:
    //   "https://res.cloudinary.com/tochukwu/image/upload/w_250/v1700481884/lightcity/qek9s7hvd51k4yr0rta9.webp",
    description:
      "This is an annual special meeting put together by the Spirit of God to have believers camp around God's word and intense atmospheres of the demonstration of the Spirit.",
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
        subtitle="<h1 class='text-[48px] inline lg:text-[60px] xl:text-[84px] leading-[48px] lg:leading-[80px] mt-3 font-bold'> Faith Seminar </h1>"
        imageUrl="/assets/images/wc-hero.jpg"
        buttonTitle="Register Online"
        buttonIconDirection="right"
        description="We are a people of God with a mandate from God to herald the glorious message of Jesus; teaching and preaching until the whole earth is filled with his gospel as the waters cover the sea, and by God, we will not fail."
        link="/our-meetings/registration/faith-seminar"
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
