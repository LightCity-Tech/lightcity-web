"use client";

import { Typography, Button } from "@/src/ui";
import BrownPlayIcon from "@/public/assets/svgs/brown-play-icon.svg";
import bgImage from "../services-bg.png";
import Navbar from "../../components/navigation/navbar-component";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image"; 
import SwiperButtonNext from "../../components/nextButton";
import SwiperButtonPrevious from "../../components/previousButton";
import { Spacer } from "../../components/spacer";
import { kashuan } from "@/styles/font";

const HeroSection = () => {
  return (
    <div>
    {/* <section className="w-full h-[90vh] px-24 md:px-6 flex items-center" >
      <div className="w-9/12 md:w-full">
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
          fontWeight= "bold"
          align="left"
          customClassName="md:text-5xl md:leading-[48px]"
        >
          ...where we are committed to giving your life an{" "}
          <Typography
           variant="h1"
           font="kashuan"
           fontWeight="regular"
           color="primary-main"
           customClassName="inline md:text-[42px]"
          >eternal relevance!</Typography>
        </Typography>

        <Button
          variant="primary"
          color="primary"
          label="Listen Online"
          // leftIcon={<BrownPlayIcon />}
          customClassName="mt-16"
        />
      </div>
    </section> */}
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper hero"
      >
        <div className="absolute top-[280px] md:w-[350px] text-white left-[110px] md:left-[20px] z-20">
        <div className="w-8/12 md:w-full">
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
          fontWeight= "bold"
          align="left"
          customClassName="md:text-5xl md:leading-[48px]"
        >
          ...where we are committed to giving your life{" "}
          <span
           className={`inline text-[90px] text-primary-main ${kashuan.className} md:text-[42px]`}
          >eternal relevance!</span>
        </Typography>

        <Button
          variant="primary"
          color="primary"
          label="Listen Online"
          // leftIcon={<BrownPlayIcon />}
          customClassName="mt-16"
        />
      </div>
        </div>
        {/* <div className="md:hidden sw-buttons z-20 absolute top-[310px] right-[200px]">
        <SwiperButtonPrevious>
            <BsArrowLeftCircle color="#798490" style={{display: 'block'}} size="5em" />
          </SwiperButtonPrevious>
          <Spacer width={30} height={20}/>
          <SwiperButtonNext>
            <BsArrowRightCircle color="#798490" size="5em" />
          </SwiperButtonNext>
        </div> */}
        <SwiperSlide>
          <div className="slider-image-01">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-image-02">
            {/* <Image fill src={Slide04} alt="" /> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-image-03">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-image-04">
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
