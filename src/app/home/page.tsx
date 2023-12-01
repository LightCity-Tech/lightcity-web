"use client";

import HeroSection from "./components/hero-section";
import DescriptionSection from "./components/description-section";
import SeriesSection from "./components/series-section";
import ServiceSection from "./components/service-section";
import GiveSection from "./components/give-section";
import BrownPlayIcon from "@/public/assets/svgs/brown-play-icon.svg";

const HomePage = () => {
  return (
    <section>
      <HeroSection
        title="WELCOME TO LIGHTCITY CHURCH"
        subtitle="<h1 class='text-[48px] inline lg:text-[60px] xl:text-[84px] leading-[48px] lg:leading-[80px] mt-3 font-bold'>...where we are <br class='hidden md:block'/> committed to giving your <br class='hidden md:block'/> life an </h1>"
        special="eternal relevance!"
        buttonTitle="Listen Online"
        buttonSvg={<BrownPlayIcon />}
        buttonIconDirection={'left'}
      />
      <DescriptionSection />
      <SeriesSection />
      <ServiceSection />
      <GiveSection />
    </section>
  );
};

export default HomePage;
