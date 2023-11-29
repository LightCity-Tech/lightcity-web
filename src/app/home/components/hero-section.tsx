"use client";

import { Typography, Button } from "@/src/ui";
import BrownPlayIcon from "@/public/assets/svgs/brown-play-icon.svg";
import bgImage from "../services-bg.png";
import Image from "next/image";
import { Spacer } from "../../components/spacer";
import { kashuan } from "@/styles/font";
import { AutoplayCarousel } from "./carousel";

type Props = {
  title: string;
  subtitle: string;
  special?: string;
  imageUrl?: string;
  description?: string;
  buttonTitle?: string;
  buttonSvg?: any
};

const HeroSection = ({ title, subtitle, special, description, imageUrl, buttonTitle, buttonSvg }: Props) => {
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
      className="object-cover brightness-50"
      style={{ width: "100%", height: "100vh" }}
    />,
  ];

  const item = [
    <Image
    key="1"
    src={imageUrl as string}
    width={2592}
    height={1728}
    alt="1"
    style={{ width: "100%", height: "100vh" }}
    className="object-cover brightness-50"
  />,
  ]

  return (
    <section className="w-full h-[90vh] overflow-auto">
      <div className={`w-full md:w-full absolute lg:px-24 px-4 ${imageUrl ? 'top-[4%] md:top-[9%] lg:top-[8%] xl:top-[7%]' : 'top-[4%] xl:top-[5%]'} z-50 text-white`}>
        <Typography
          variant="body-mid"
          color="white"
          fontWeight="medium"
          align="left"
          customClassName="uppercase"
        >
          {title}
        </Typography>

        <div className="lg:w-[70%] w-full">
          <h1 className="text-[48px] lg:text-[84px] leading-[48px] lg:leading-[80px] mt-3 font-bold">
            {subtitle}{" "}
            <span
              className={`${kashuan.className} text-[48px] lg:text-[84px] text-secondary-200`}
            >
              {special}
            </span>
          </h1>
        </div>
        <div className="py-6 md:w-[50%] w-full">
          <p className="text-sm lg:text-base leading-6">{description}</p>
        </div>

        <Button
          variant="primary"
          color="primary"
          label={buttonTitle as any}
          leftIcon={buttonSvg}
          customClassName="mt-4"
        />
      </div>

       <AutoplayCarousel items={imageUrl ? item : items} />
   </section>
  );
};

export default HeroSection;
