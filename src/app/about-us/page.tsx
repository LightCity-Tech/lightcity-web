import React from "react";
import HeroSection from "../home/components/hero-section";
import Image from "next/image";
import { kashuan } from "@/styles/font";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <section className="bg-white">
      <HeroSection
        subtitle="<h1 class='text-[48px] inline lg:text-[60px] xl:text-[84px] leading-[48px] lg:leading-[80px] mt-3 font-bold'> Welcome to Light City Church</h1>"
        imageUrl="/assets/images/hero-about.webp"
        description="We are a people of God with a mandate from God to herald the glorious message of Jesus; teaching and preaching until the whole earth is filled with his gospel as the waters cover the sea, and by God, we will not fail.  "
      />
      <div className="mx-auto px-6 lg:px-24 lg:py-12 ">
        <div>
          <div className="flex mt-20 text-[#A6A2A2]">
            <span className="block w-[10%]"> OUR VISION</span>
            <span className="relative w-full -top-1.5 -left-5 border-b-black/20 border-b block"></span>
          </div>

          <div className="md:flex md:flex-row items-center md:space-x-4 space-x-0 flex flex-col">
            <div className="w-full px-4 md:w-1/2">
              <h3 className="mt-8 text-[40px] font-semibold">
                To see the whole earth filled with the knowledge of God
              </h3>
              <p className="text-[#7E7A7A] text-[24px] py-6">
                We at Light City Church in partnership with God via his word and
                his Spirit envision all the nations of the earth filled with the
                knowledge of the Son of God, just as the waters covers the sea ~
                Habbakuk 2:14
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <Image
                src="/assets/images/hero-about.webp"
                alt=""
                width={608}
                height={488}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
        <div className="py-12">
          <div className="flex mt-20 text-[#A6A2A2]">
            <span className="block w-[10%]"> OUR MISSION</span>
            <span className="relative -top-1.5 -left-8 border-b-black/20 border-b w-full block"></span>
          </div>
          <div className="md:flex md:flex-row items-center md:mt-12 flex flex-col">
            <div className="w-full md:w-1/2">
              <Image
                src="/assets/images/vision-pic.webp"
                alt=""
                width={608}
                height={488}
                className="rounded-3xl"
              />
            </div>
            <div className="md:w-1/2 w-full lg:p-10">
              <h3 className="mt-8 text-[40px] font-semibold">
                Giving your life eternal relevance
              </h3>
              <p className="text-[#7E7A7A] text-[24px] py-6">
                Through God&apos;s word taught in clarity and simplicity and our
                discipleship structures at LightCity Church, ministry is
                discovered, developed and deployed as is God&apos;s plan for
                you.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-row flex flex-col-reverse w-full justify-between lg:mt-28 mt-10">
          <div className="lg:w-2/5 w-full mt-6 lg:mt-0">
            <h3
              className={`${kashuan.className} text-[24px] lg:text-[34px] xl:text-[44px] text-secondary-200`}
            >
              From our Pastor&apos;s Desk
            </h3>
            <p className="mt-6">Here goes a placeholder text for our mission statement. It should not be more than five lines as used in template placeholder text message. Here goes a placeholder text for our mission statement. It should not be more than five lines as used in template placeholder text message.  Here goes a placeholder text for our mission statement. It should not be more than five lines as used in template placeholder text</p>
          </div>
          <div className="lg:w-1/2 w-full">
            <Image
              src="/assets/images/pastor.webp"
              width={424}
              height={346}
              alt=""
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
