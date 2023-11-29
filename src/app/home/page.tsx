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
        subtitle="...where we are committed to giving your life an"
        special="eternal relevance!"
        buttonTitle="Listen Online"
        buttonSvg={<BrownPlayIcon />}
      />
      <DescriptionSection />
      <SeriesSection />
      <ServiceSection />
      <GiveSection />
    </section>
  );
};

export default HomePage;
