"use client";

import React from "react";
import dynamic from "next/dynamic";

const MeetingCard = dynamic(() => import('@/src/ui/elements/meeting-card'))
const HeroSection = dynamic(() => import('../home/components/hero-section'))

type meetingsMockDataType =  {
  title: string;
  description: string;
  month: string;
  startDay: string;
  duration: string;
  year: string;
  location: string;
  link?: any;
  image?: string;
}

const meetingsMockData: meetingsMockDataType[] = [

  {
    title: "Faith Seminar",
    // image:
    //   "https://res.cloudinary.com/tochukwu/image/upload/w_250/v1700481884/lightcity/qek9s7hvd51k4yr0rta9.webp",
    description:
      "This is a meeting put together specially by the Spirit of God for this times and seasons to have believers grounded in the rudiments of the faith walk. This meeting will make walking in faith an everyday part of your life.",
    month: "May",
    startDay: "01",
    duration: "1st to 4th",
    year: "2025",
    location: "ENUGU, NIGERIA",
    link: ""
  },
  {
    title: "Camp Meeting 2025",
    // image:
    //   "/assets/images/pp2-1.jpg",
    description:
      "This is an annual special meeting put together by the Spirit of God to have believers camp around God's word and intense atmospheres of the demonstration of the Spirit.",
    month: "August",
    startDay: "28",
    duration: "28TH - 31ST",
    year: "2025",
    location: "ENUGU, NIGERIA",
  },
  {
    title: "Fire Conference 2025",
    // image:
    //   "https://res.cloudinary.com/tochukwu/image/upload/w_250/v1700481884/lightcity/qek9s7hvd51k4yr0rta9.webp",
    description:
      "This is a meeting where the fire of God's Spirit will be regnited and made to burn much more in the hearts of believers to the end that they are much more effective in the ministry of the word and the Spirit",
    month: "November",
    startDay: "28",
    duration: "28th to 30th",
    year: "2025",
    location: "ENUGU, NIGERIA",
  },

];

const Meetings = () => {
  return (
    <section>
      <HeroSection
        title="Upcoming Meetings"
        subtitle="<h1 class='text-[48px] inline lg:text-[60px] xl:text-[84px] leading-[48px] lg:leading-[80px] mt-3 font-bold'> Camp Meeting</h1>"
        imageUrl="/assets/images/pp2-1.jpg"
        buttonTitle="Register Online"
        buttonIconDirection="right"
        description="This is an annual special meeting put together by the Spirit of God to have believers camp around God's word and intense atmospheres of the demonstration of the Spirit."
        link="/register"
      
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
