import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import ArrowLeft from "@/public/assets/svgs/arrow-left.svg";
import ArrowRight from "@/public/assets/svgs/arrow-right.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./testimonial-slide.css";

// import required modules
import { Pagination } from "swiper/modules";
import SwiperButtonPrevious from "../previousButton";
import SwiperButtonNext from "../nextButton";

const testimonials = [
  {
    id: 1,
    body: "Deciding to commit to my local church has been one of the best decisions I have ever made.  I have experienced a tremendous growth in my faith and walk with God and a newfound sense of purpose. One of the most rewarding experiences for me is being a member of a community full of God’s saints.",
    author: "Sis. Amaranna Ogbonna",
  },
  {
    id: 2,
    body: "It's been two years of growth that has stretched me and made me so much better in the service of Jesus and in my natural affairs. Of learning that has led to desire to learn more, God's word taught precisely, patiently till it makes sense. Of opportunities to put into practice every concept of scripture taught. ",
    author: "Sis. Chinonye Abonyi",
  },
  {
    id: 3,
    body: "I am grateful to God for the privilege of being in a local church as Light City Church Enugu. It has been a life changing experience submitting to the sound teachings from pastor, the practice and instructions put in place in the church, the fellowship of the brethren and most importantly the accountability present in church. ",
    author: "Bro. Onyedika Ugwu",
  },
  {
    id: 4,
    body: "LightCity Church has been that instrument that God has used and is using to furnish me. I have been edified, encouraged, comforted, strengthened, warned, instructed by the saints in this assembly, through various expressions of the supernatural. It has been, to me, a school where I have learned and do learn of God.",
    author: "Bro. Ebuka Nkemena",
  },
];

export default function TestimonialSlide() {
  const swiperSlide = useSwiperSlide();
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={60}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testimony, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <div
                className={`${
                  isActive ? "bg-secondary-25 border-secondary-25" : "bg-[#fff]"
                } rounded-[24px]`}
              >
                <div className="px-5 py-20 lg:w-[80%] mx-auto">
                  <p className="text-[#7E7A7A] text-[16px] font-normal leading-[28px]">
                    {testimony.body}
                  </p>
                  <p className="text-[#32220A] font-semibold mt-6">
                    {testimony.author}
                  </p>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
        <div className="text-center mt-8">
          <SwiperButtonPrevious>
            <ArrowLeft />
          </SwiperButtonPrevious>
          <SwiperButtonNext>
            <ArrowRight />
          </SwiperButtonNext>
        </div>
      </Swiper>
    </>
  );
}
