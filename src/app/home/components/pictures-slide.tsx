"use client";

import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 6,
  autoplay: true,
  speed: 80000,
  autoplaySpeed: 1000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const PicturesSlide = () => {
  return (
    <div>

      <Slider {...settings} className="w-full">
        <div className="">
          <img
            src="https://res.cloudinary.com/tochukwu/image/upload/w_500/v1699571651/lightcity/w4qj0tjxviw4ccfxuajm.webp"
            alt=""
            className="rounded w-[89%] md:w-[90%]"
          />
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/tochukwu/image/upload/w_500/v1699543758/lightcity/ohciqtuoi2nndcbnqfhu.webp"
            alt=""
            className="rounded w-[89%] md:w-[90%]"
          />
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/tochukwu/image/upload/w_500/v1699543759/lightcity/toewrx3saggzxaw83hfa.webp"
            alt=""
            className="rounded w-[89%] md:w-[90%]"
          />
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/tochukwu/image/upload/w_500/v1699571667/lightcity/jggnc8d22ycrzrlsyzo7.webp"
            alt=""
            className="rounded w-[89%] md:w-[90%]"
          />
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/tochukwu/image/upload/w_500/v1699571653/lightcity/qds3yp2ujohkuh3usbn3.webp"
            alt=""
            className="rounded w-[89%] md:w-[90%]"
          />
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/tochukwu/image/upload/w_500/v1699543758/lightcity/rzhwsyjo50hztbi76j5a.webp"
            alt=""
            className="rounded w-[89%] md:w-[90%]"
          />
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/tochukwu/image/upload/w_500/v1699966569/lightcity/qdkoq9ihyuly2fmrelbm.webp"
            alt=""
            className="rounded w-[89%] md:w-[90%]"
          />
        </div>
      </Slider>
    </div>
  );
};

export default PicturesSlide;
