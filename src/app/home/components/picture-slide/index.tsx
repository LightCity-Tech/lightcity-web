"use client";

import React, { useState } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";
import Image from "next/image";

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
  })
  
  const settingsMobile = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // beforeChange: (prev: any, next: any) => {
    //   setState({ currentSlide: next });
    // },
    dotsClass: "button__bar",
    // afterChange: (index) => this.setState({ currentSlide: index }),
    // appendDots: (dots: any) => {
    //   return (
    //     <div>
    //       <ul>
    //         {dots.map((item: any, index: number) => {
    //           return <li className="border-blue-900 border-4" key={index}>{item.props.children}</li>;
    //         })}
    //       </ul>
    //     </div>
    //   );
    // },
    // customPaging: (index: any) => {
    //   return (
    //     <button className={index === state.currentSlide ? 'bg-red-600 border-red-900 border-4' : 'bg-green-500'}>
    //       {index}
    //     </button>
    //   );
    // },
  };

  return (
    <div>
      <div className="hidden lg:block">
        <Slider {...settings} className="hidden lg:block w-full">
          <div className="">
            <Image
              src="https://res.cloudinary.com/tochukwu/image/upload/w_500/v1699571651/lightcity/IMG_7328.webp"
              alt=""
              className="rounded w-[89%] md:w-[90%]"
              width={400}
              height={300}
            />
          </div>
          <div className="">
            <Image
              src="https://res.cloudinary.com/tochukwu/image/upload/w_500/v1699543758/lightcity/IMG_7820.webp"
              alt=""
              className="rounded w-[89%] md:w-[90%]"
              width={400}
              height={300}
            />
          </div>
          <div className="">
            <Image
              src="https://res.cloudinary.com/tochukwu/image/upload/w_500/v1699543759/lightcity/IMG_7309.webp"
              alt=""
              className="rounded w-[89%] md:w-[90%]"
              width={400}
              height={300}
            />
          </div>
          <div className="">
            <Image
              src="https://res.cloudinary.com/tochukwu/image/upload/w_500/v1699571667/lightcity/IMG_7244.webp"
              alt=""
              className="rounded w-[89%] md:w-[90%]"
              width={400}
              height={300}
            />
          </div>
          <div className="">
            <Image
              src="https://res.cloudinary.com/tochukwu/image/upload/w_500/lightcity/IMG_7229.webp"
              alt=""
              className="rounded w-[89%] md:w-[90%]"
              width={400}
              height={300}
            />
          </div>
          <div className="">
            <Image
              src="https://res.cloudinary.com/tochukwu/image/upload/w_500/v1699543758/lightcity/IMG_7920.webp"
              alt=""
              className="rounded w-[89%] md:w-[90%]"
              width={400}
              height={300}
            />
          </div>
          <div className="">
            <Image
              src="https://res.cloudinary.com/tochukwu/image/upload/w_500/v1699966569/lightcity/w4qj0tjxviw4ccfxuajm.webp"
              alt=""
              className="rounded w-[89%] md:w-[90%]"
              width={400}
              height={300}
            />
          </div>
        </Slider>
      </div>

      <div className="lg:hidden">
        <Slider {...settingsMobile} className="lg:hidden">
          <div className="">
            <Image
              src="https://res.cloudinary.com/tochukwu/image/upload/w_500/v1699571651/lightcity/w4qj0tjxviw4ccfxuajm.webp"
              alt=""
              className="rounded"
              width={400}
              height={300}
            />
          </div>
          <div className="">
            <Image
              src="https://res.cloudinary.com/tochukwu/image/upload/w_500/v1699543758/lightcity/ohciqtuoi2nndcbnqfhu.webp"
              alt=""
              className="rounded"
              width={400}
              height={300}
            />
          </div>
          <div className="">
            <Image
              src="https://res.cloudinary.com/tochukwu/image/upload/w_500/v1699543759/lightcity/toewrx3saggzxaw83hfa.webp"
              alt=""
              className="rounded "
              width={400}
              height={300}
            />
          </div>
          <div className="">
            <Image
              src="https://res.cloudinary.com/tochukwu/image/upload/w_500/v1699571667/lightcity/jggnc8d22ycrzrlsyzo7.webp"
              alt=""
              className="rounded"
              width={400}
              height={300}
            />
          </div>
          <div className="">
            <Image
              src="https://res.cloudinary.com/tochukwu/image/upload/w_500/v1699571653/lightcity/qds3yp2ujohkuh3usbn3.webp"
              alt=""
              className="rounded"
              width={400}
              height={300}
            />
          </div>
          <div className="">
            <Image
              src="https://res.cloudinary.com/tochukwu/image/upload/w_500/v1699543758/lightcity/rzhwsyjo50hztbi76j5a.webp"
              alt=""
              className="rounded"
              width={400}
              height={300}
            />
          </div>
          <div className="">
            <Image
              src="https://res.cloudinary.com/tochukwu/image/upload/w_500/v1699966569/lightcity/qdkoq9ihyuly2fmrelbm.webp"
              alt=""
              className="rounded"
              width={400}
              height={300}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default PicturesSlide;
