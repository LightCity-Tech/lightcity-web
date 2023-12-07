"use client";

import { Typography, Button } from "@/src/ui";
import BrownPlayIcon from "@/public/assets/svgs/brown-play-icon.svg";
import bgImage from "../services-bg.png";
import Image from "next/image";
import { Spacer } from "../../components/spacer";
import { kashuan } from "@/styles/font";
import { AutoplayCarousel } from "./carousel";

type Props = {
  title?: string;
  subtitle: string;
  special?: string;
  imageUrl?: string;
  description?: string;
  buttonTitle?: string;
  buttonSvg?: any;
  buttonIconDirection?: string;
};

const HeroSection = ({
  title,
  subtitle,
  special,
  description,
  imageUrl,
  buttonTitle,
  buttonSvg,
  buttonIconDirection,
}: Props) => {
  const items = [
    <Image
      key="1"
      src="/assets/images/slide01.webp"
      width={2592}
      height={1728}
      alt="1"
      style={{ width: "100%", height: "100vh" }}
      className="object-cover brightness-50"
    />,
    <Image
      key="2"
      src="/assets/images/slide02.webp"
      width={5472}
      height={3248}
      className="object-cover brightness-50"
      alt="2"
      style={{ width: "100%", height: "100vh" }}
    />,
    <Image
      key="3"
      src="/assets/images/slide03.webp"
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
  ];

  return (
    <section className="w-full h-[100vh] relative overflow-hidden">
      <div
        className={`w-full md:w-full absolute sm:px-8 md:px-10 xl:px-20 top-[50%] -translate-y-1/2 px-4 z-[1] text-white`}
      >
        <div className="relative">
          <Typography
            variant="body-mid"
            color="white"
            fontWeight="medium"
            align="left"
            customClassName="uppercase"
          >
            {title}
          </Typography>

          <div
            className="w-full inline"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
          <span
            className={`${kashuan.className} text-[45px] lg:text-[60px] xl:text-[84px] text-secondary-200`}
          >
            {special}
          </span>

          <div className="py-6 md:w-[50%] w-full">
            <p className="text-sm lg:text-base leading-6">{description}</p>
          </div>
          {buttonTitle && (
            <Button
              variant="primary"
              color="primary"
              label={buttonTitle as any}
              leftIcon={buttonIconDirection === "left" && buttonSvg}
              rightIcon={buttonIconDirection === "right" && buttonSvg}
              customClassName=""
            />
          )}
        </div>
      </div>

      <AutoplayCarousel items={imageUrl ? item : items} />
    </section>
  );
};

export default HeroSection;
