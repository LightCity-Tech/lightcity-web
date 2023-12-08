"use client";

import React from "react";
import HeroSection from "../home/components/hero-section";
import Image from "next/image";
import { kashuan } from "@/styles/font";
import TestimonialSlide from "../components/testimonial-slide";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <section className="bg-white">
      <div className="bg-white px-5 h-full lg:px-24">
        <div className="text-center lg:max-w-[90%] lg:py-12 mx-auto">
          <h3 className="text-[48px] font-bold text-blackA md:px-24 md:text-[72px]">
            Welcome to LightCity Church
          </h3>
          <p className="text-[rgb(126, 122, 122)] py-8 lg:w-[50%] mx-auto">
            We are a people of God with a mandate from God to herald the
            glorious message of Jesus; teaching and preaching until the whole
            earth is filled with his gospel as the waters cover the sea, and by
            God, we will not fail.{" "}
          </p>
        </div>
        <div className="w-[100%] lg:hidden h-[405px]">
          <Image src="/assets/images/about-hero.webp" width={400} height={500} className="w-full h-full rounded-[10px]" alt="" />
        </div>
        <div className="lg:block hidden">
          <Image src="/assets/images/about-hero.webp" width={400} height={300} className="w-full object-contain rounded-[10px]" alt="" />
        </div>
      </div>
      <div className="mx-auto ">
        <div className="px-5 lg:px-24">
          <div className="flex mt-8 lg:py-10 text-[#A6A2A2]">
            <span className="block w-[80%] md:w-[10%]"> OUR VISION</span>
            <span className="relative w-full -top-1.5 -left-5 border-b-black/20 border-b block"></span>
          </div>

          <div className="md:flex md:flex-row items-center md:space-x-4 space-x-0 flex flex-col">
            <div className="w-full md:w-1/2">
              <h3 className="mt-8 text-[24px] md:text-[40px] font-semibold">
                To see the whole earth filled with the knowledge of God
              </h3>
              <p className="text-[#7E7A7A] text-[14px] md:text-[24px] py-6">
                At LightCity Church, we work in partnership with God to birth
                his will on the Earth; that is to see that all the Nations of
                the Earth is filled with the knowledge of the Son of God, as the
                waters covers the sea.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <Image
                src="/assets/images/hero-about.webp"
                alt=""
                width={608}
                height={488}
                className="rounded-[12.91px]"
              />
            </div>
          </div>
        </div>
        <div className="py-6 px-5 lg:px-24 ">
          <div className="flex mt-6 text-[#A6A2A2]">
            <span className="block w-[90%] md:w-[12%]"> OUR MISSION</span>
            <span className="relative -top-1.5 -left-8 border-b-black/20 border-b w-full block"></span>
          </div>
          <div className="md:flex md:flex-row items-center md:mt-12 flex flex-col-reverse">
            <div className="w-full md:w-1/2">
              <Image
                src="/assets/images/vision-pic.webp"
                alt=""
                width={608}
                height={488}
                className="rounded-[12.91px]"
              />
            </div>
            <div className="md:w-1/2 w-full lg:p-10">
              <h3 className="mt-8 text-[24px] md:text-[40px] font-semibold">
                Giving your life eternal relevance
              </h3>
              <p className="text-[#7E7A7A] text-[14px] md:text-[24px] py-6">
                Through God&apos;s word taught in clarity and simplicity and our
                discipleship structures at LightCity Church, ministry is
                discovered, developed and deployed as is God&apos;s plan for
                you.
              </p>
            </div>
          </div>
        </div>
        <section className="py-8 bg-white">
          <div className="py-5 text-center px-5 lg:px-24">
            <h3 className="font-bold text-[24px] md:text-[40px]">
              My LightCity Experience
            </h3>
          </div>
          <TestimonialSlide />
        </section>
        <div className="lg:flex lg:flex-row flex flex-col-reverse w-full justify-between lg:items-center py-20 lg:py-20 bg-black text-white lg:px-24">
          <div className="lg:w-[45%] w-full lg:mt-0 px-5">
            <h3
              className={`${kashuan.className} hidden md:block text-[24px] lg:text-[34px] xl:text-[44px] text-secondary-200`}
            >
              From our Pastor&apos;s Desk
            </h3>
            <p className="lg:py-6 mt-8 lg:mt-0 text-[14px] lg:text-[24px] leading-[25.68px] md:leading-[43.2px]">
              On behalf of LightCity Church, I welcome you. Here, we are very
              much committed to the teaching of God&apos; word and in the
              training of the same. We have a mandate from God to take the
              Gospel of his Son to the ends of the Earth. We trust that
              God&apos;s word taught here gives you clarity in your role in
              God&apos;s grand plan for the world. Don&apos;t just surf through;
              come to church, deliberately join in what God is doing and we trust God to see growth
              in your christian work and stability in the same. I call you
              blessed !!!
            </p>
            <div className={`${kashuan.className} text-secondary-200 mt-5`}>
              <p className="text-[24px]">Dr. Tochi Davies Madubuobi</p>
              <p className="text-[16px]">Pastor, LightCity Church.</p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full px-5">
            <h3
              className={`${kashuan.className} lg:hidden py-3 text-[24px] lg:text-[34px] xl:text-[44px] text-secondary-200`}
            >
              From our Pastor&apos;s Desk
            </h3>
            <div
              className="rounded-[17.11px] h-[300px] lg:h-[600px]"
              style={{
                backgroundImage: `url('/assets/images/pastor.webp')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
