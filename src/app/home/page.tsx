'use client';

import HeroSection from "./components/hero-section";
import DescriptionSection from "./components/description-section";
import SeriesSection from "./components/series-section";
import ServiceSection from "./components/service-section";
import GiveSection from "./components/give-section";
import FooterSection from "./components/footer-section";

const HomePage = () => {
    return (
        <section>
            <HeroSection/>
            <DescriptionSection/>
            <SeriesSection/>
            <ServiceSection/>
            <GiveSection/>
            <FooterSection/>
        </section>
    );
}
 
export default HomePage;