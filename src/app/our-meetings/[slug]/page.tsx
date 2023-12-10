"use client";

import { Button, Typography } from "@/src/ui";
import React from "react";
import HeroSection from "../../home/components/hero-section";
import ArrowUpIcon from "@/public/assets/svgs/arrow-up-right.svg";
import Link from "next/link";
import ButtonLeft from "@/public/assets/svgs/button-icon-left.svg";

type Props = {};

const Meeting = (props: Props) => {
  return (
    <section>
      <HeroSection
        title="Upcoming Meetings"
        subtitle="<h1 class='text-[48px] inline lg:text-[60px] xl:text-[84px] leading-[48px] lg:leading-[80px] mt-3 font-bold'> Word Conference </h1>"
        imageUrl="/assets/images/hero-wc.webp"
        buttonTitle="Learn More"
        buttonSvg={<ArrowUpIcon />}
        buttonIconDirection={'right'}
        link={''}
        description="Word Conference is an annual special meeting of LightCity Church put together by the Spirit of God to have believers camp around the teaching of God's word and the intense atmospheres of the demonstrations of the Spirit."
      />
      <div className="lg:px-24 px-5 md:py-16 md:flex md:flex-row flex flex-col-reverse md:space-x-6 space-x-0">
        <div className="md:w-2/5">
          <div>
            <Title text="DATE" />
            <Typography
              variant="body-reg"
              color="secondary-main"
              fontWeight="regular"
              customClassName="mb-4 md:text-[16px] uppercase"
            >
              08TH - 10TH DECEMBER 2023
            </Typography>
          </div>
          <div>
            <Title text="LOCATION" />
            <Typography
              variant="body-reg"
              color="secondary-main"
              fontWeight="regular"
              customClassName="mb-4 md:text-[16px] uppercase"
            >
              Main Hall, University of Nigeria, Enugu Campus (UNEC), Nigeria.
            </Typography>
          </div>
          <div>
            <Title text="CONTACT" />
            <Typography
              variant="body-reg"
              color="secondary-main"
              fontWeight="regular"
              customClassName="mb-4 md:text-[16px] uppercase"
            >
              08141748947, 08138720239
            </Typography>
          </div>
        </div>
        <div className="md:w-3/5 w-full md:border-l-2">
          <div
            className="md:bg-[url('/assets/images/image-frame.png')] bg-[url('/assets/images/sample-meeting-img.png')] -mt-12 w-[100%] h-[500px] bg-no-repeat bg-center">
            </div>
          <div className="py-4"> 
            <Typography variant="body-reg"
              color="secondary-main"
              fontWeight="regular" sample-meeting-img
              customClassName="mb-4 px-6 text-[24px] hidden md:block">
              WORD CONFERENCE 2023 <br/>One Meeting • 3 Days • 6 Sessions <br/>Saints of
              God gathered in the Name of His Holy Son Jesus, <br/>The Word of God&apos;s
              Grace taught, <br/>The Holy Ghost in His Natural Habitat, <br/>The things
              and ALL the 9 gifts of the Spirit in graceful, yet mighty
              demonstrations - Utterances, Revelation and Power, <br/> ALL in FULL
              demonstration with sick bodies healed and diverse needs met.<br/>
              Encounters and experiences in the Glory and Power of God APLENTY &
              CEASELESS, <br/>Our lives and ministries FOREVER changed... <br/>This is
              God&apos;s plan for your life & ministry. <br/>Tell a friend! Pray, Prepare
              and attend! Welcome
            </Typography>
          </div>
          <div className="px-4 hidden md:block">
          <Link href="/meetings">
        <Button
          variant="no-border"
          color="primary"
          label={"Back to All Meetings"}
          leftIcon={<ButtonLeft />}
          customClassName="bg-[#fff]"
        />
        </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meeting;

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <Typography
      variant="body-reg"
      color="secondary-main"
      fontWeight="medium"
      customClassName="md:text-[18px] uppercase"
    >
      {text}
    </Typography>
  );
};
