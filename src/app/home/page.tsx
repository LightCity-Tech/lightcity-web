"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./components/hero-section"));
const DescriptionSection = dynamic(
  () => import("./components/description-section")
);
const SeriesSection = dynamic(() => import("./components/series-section"));
const ServiceSection = dynamic(() => import("./components/service-section"));
const GiveSection = dynamic(() => import("./components/give-section"));
const BrownPlayIcon = dynamic(() => import("./components/hero-section"));

const HomePage = () => {
  return (
    <section>
      <HeroSection
        title="WELCOME TO LIGHTCITY CHURCH"
        subtitle="<h1 class='text-[45px] inline lg:text-[60px] xl:text-[84px] leading-[48px] lg:leading-[80px] mt-3 font-bold'>...where we are <br class='hidden md:block'/> committed to giving your <br class='hidden md:block'/> life <br class='block md:hidden' /> </h1>"
        special="eternal relevance!"
        buttonTitle="Listen Online"
        buttonIconDirection="left"
        link="/sermons"
      />
      <DescriptionSection />
      <SeriesSection />
      <ServiceSection />
      <GiveSection />
    </section>
  );
};

export default HomePage;
