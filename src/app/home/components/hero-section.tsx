"use client";

import { Typography, Button } from "@/src/ui";
import BrownPlayIcon from "@/public/assets/svgs/brown-play-icon.svg";
import bgImage from "../services-bg.png";
import Navbar from "../../components/navigation/navbar-component";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { Spacer } from "../../components/spacer";
import { kashuan } from "@/styles/font";
import { AutoplayCarousel } from "./carousel";

const HeroSection = () => {
  const items = [
    <Image
      key="1"
      src="/assets/images/slide01.jpg"
      width={2592}
      height={1728}
      alt="1"
      style={{ width: "100%", height: "100vh" }}
      className="object-cover brightness-50"
    />,
    <Image
      key="2"
      src="/assets/images/slide02.jpg"
      width={5472}
      height={3248}
      className="object-cover brightness-50"
      alt="2"
      style={{ width: "100%", height: "100vh" }}
    />,
    <Image
      key="3"
      src="/assets/images/slide03.jpg"
      width={5472}
      height={3248}
      alt="3"
      className="object-cover filter brightness-50"
      style={{ width: "100%", height: "100vh"}}
    />,
  ];

  return (
    <section className="w-full h-[100vh] overflow-auto">
      <div className="w-full md:w-full absolute lg:px-24 px-4 top-[5%] z-50 text-white">
        <Typography
          variant="body-mid"
          color="white"
          fontWeight="medium"
          align="left"
        >
          WELCOME TO LIGHTCITY CHURCH
        </Typography>
        <Typography
          variant="h1"
          color="white"
          fontWeight="bold"
          align="left"
          customClassName="text-5xl leading-[48px]"
        >
          ...where we are committed to giving your life an{" "}
          <Typography
            variant="h1"
            font="kashuan"
            fontWeight="regular"
            color="primary-main"
            customClassName="inline text-[42px]"
          >
            eternal relevance!
          </Typography>
        </Typography>

        <Button
          variant="primary"
          color="primary"
          label="Listen Online"
          // leftIcon={<BrownPlayIcon />}
          customClassName="mt-16"
        />
      </div>

      <AutoplayCarousel items={items} />
    </section>
  );
};

export default HeroSection;
