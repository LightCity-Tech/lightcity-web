"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";
import Image from "next/image";
import {
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
} from "@/public/assets/images";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 6,
  autoplay: true,
  speed: 80000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const PicturesSlide = () => {
  const [state, setState] = useState({
    currentSlide: 0,
  });

  const settingsMobile = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "button__bar",
  };

  const slideImages = [
    Img1,
    Img2,
    Img3,
    Img5,
    Img6,
    Img7,
    Img10,
    Img11,
    Img13,
  ];

  return (
    <div>
      <div className="hidden lg:block">
        <Slider {...settings} className="hidden lg:block w-full">
          {slideImages.map((image, index) => (
            <div key={index}>
              <Image
                src={image}
                alt="Slide Image"
                className="rounded w-[89%] md:w-[90%]"
                width={400}
                height={300}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="lg:hidden">
        <Slider {...settingsMobile} className="lg:hidden">
          {slideImages.map((image, index) => (
            <div key={index}>
              <Image
                src={image}
                alt="Slide Image"
                className="rounded"
                width={400}
                height={300}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PicturesSlide;
