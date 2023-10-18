'use client';

import HeroSection from "./components/hero-section";
import DescriptionSection from "./components/description-section";
import SeriesSection from "./components/series-section";

const HomePage = () => {
    return (
        <section>
            <HeroSection/>
            <DescriptionSection/>
            <SeriesSection/>
        </section>
    );
}
 
export default HomePage;