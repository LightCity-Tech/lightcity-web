"use client";

import React from "react";
import MeetingCardComponent from "../components/meeting-card-component";
import MeetingCard from "@/src/ui/elements/meeting-card";
import SampleImg from "@/public/assets/images/sample-meeting-img.png";
import HeroSection from "../home/components/hero-section";

let data = [{}, {}, {}];

const Meetings = () => {
  return (
    <section>
      <HeroSection />
      <section className="px-28 md:px-2 py-12">
        <div className="">
          <MeetingCard
            title="Word Conference 2023"
            image="https://res.cloudinary.com/tochukwu/image/upload/w_250/v1700481884/lightcity/qek9s7hvd51k4yr0rta9.webp"
            description="We are a people of God with a mandate from God to herald the
          glorious message of Jesus; teaching and preaching until the whole
          earth is filled with his gospel as the waters cover the sea, and by
          God, we will not fail."
            month="December"
            startDay="08"
            duration="08TH - 10TH"
            year="2023"
            location="ENUGU, NIGERIA"
          />
           <MeetingCard
            title="Power Sunday 2024"
            image="https://res.cloudinary.com/tochukwu/image/upload/w_250/v1700481884/lightcity/qek9s7hvd51k4yr0rta9.webp"
            description="We are a people of God with a mandate from God to herald the
          glorious message of Jesus; teaching and preaching until the whole
          earth is filled with his gospel as the waters cover the sea, and by
          God, we will not fail."
            month="January"
            startDay="-"
            duration="TBA"
            year="2024"
            location="ENUGU, NIGERIA"
          />
          <MeetingCard
            title="Faith Seminar 2024"
            image="https://res.cloudinary.com/tochukwu/image/upload/w_250/v1700481884/lightcity/qek9s7hvd51k4yr0rta9.webp"
            description="We are a people of God with a mandate from God to herald the
          glorious message of Jesus; teaching and preaching until the whole
          earth is filled with his gospel as the waters cover the sea, and by
          God, we will not fail."
            month="January"
            startDay="-"
            duration="TBA"
            year="2024"
            location="ENUGU, NIGERIA"
          />
          <MeetingCard
            title="Fire Conference 2024"
            image="https://res.cloudinary.com/tochukwu/image/upload/w_250/v1700481884/lightcity/qek9s7hvd51k4yr0rta9.webp"
            description="We are a people of God with a mandate from God to herald the
          glorious message of Jesus; teaching and preaching until the whole
          earth is filled with his gospel as the waters cover the sea, and by
          God, we will not fail."
            month="January"
            startDay="-"
            duration="TBA"
            year="2024"
            location="ENUGU, NIGERIA"
          />
          <MeetingCard
            title="School of Prayer 2024"
            image="https://res.cloudinary.com/tochukwu/image/upload/w_250/v1700481884/lightcity/qek9s7hvd51k4yr0rta9.webp"
            description="We are a people of God with a mandate from God to herald the
          glorious message of Jesus; teaching and preaching until the whole
          earth is filled with his gospel as the waters cover the sea, and by
          God, we will not fail."
            month="January"
            startDay="-"
            duration="TBA"
            year="2024"
            location="ENUGU, NIGERIA"
          />
          <MeetingCard
            title="Word Conference 2024"
            image="https://res.cloudinary.com/tochukwu/image/upload/w_250/v1700481884/lightcity/qek9s7hvd51k4yr0rta9.webp"
            description="We are a people of God with a mandate from God to herald the
          glorious message of Jesus; teaching and preaching until the whole
          earth is filled with his gospel as the waters cover the sea, and by
          God, we will not fail."
            month="January"
            startDay="-"
            duration="TBA"
            year="2024"
            location="ENUGU, NIGERIA"
          />
        </div>
      </section>
    </section>
  );
};

export default Meetings;
