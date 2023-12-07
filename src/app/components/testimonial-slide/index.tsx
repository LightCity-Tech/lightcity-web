import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./testimonial-slide.css";

// import required modules
import { Pagination } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    body: "Deciding to commit to my local church has been one of the best decisions I have ever made.  I have experienced a tremendous growth in my faith and walk with God and a newfound sense of purpose. One of the most rewarding experiences for me is being a member of a community full of God’s saints, walking with the same purpose and vision that Jesus gave his church, influencing each other unto good works and having Christ days in our days. I have gained a better understanding both from God’s precisely taught and its practice, what it means to be part of, and fellowship with a faith filled community.",
    author: "Sis. Amaranna Ogbonna",
  },
  {
    id: 2,
    body: "It's been two years of growth that has stretched me and made me so much better in the service of Jesus and in my natural affairs. Of learning that has led to desire to learn more, God's word taught precisely, patiently till it makes sense. Of opportunities to put into practice every concept of scripture taught. Of meetings that have blessed me and kept me stable in God's will for my life. Of learning to walk with and trust God. Of miracles and diverse workings of God's power for and through me. Of the blessedness and gift of having Pastor Tochi as my Pastor and my Brethren too. ",
    author: "Sis. Chinonye Abonyi",
  },
  {
    id: 3,
    body: "I am grateful to God for the privilege of being in a local church as Light City Church Enugu. It has been a life changing experience submitting to the sound teachings from pastor Tochi, the practice and instructions put in place in the church, the fellowship of the brethren and most importantly the accountability present in my church. I have witnessed increased spiritual growth, much more effectiveness in ministering the things of the spirit, healings and deliverances from danger, open doors and miracles and new experiences of God’s help in my career, family and other natural affairs. ",
    author: "Bro. Onyedika Ugwu",
  },
  {
    id: 4,
    body: "LightCity Church has been that instrument that God has used and is using to furnish me. I have been edified, encouraged, comforted, strengthened, warned, instructed by the saints in this assembly, through various expressions of the supernatural. It has been, to me, a school where I have learned and do learn of God. It has also been to me a family where we laugh and pray and rejoice and praise God in one accord. In our meetings, I have come out of depression and anxiety on many occasions, I have received healings and miracles various times, I have been helped in natural affairs as well.",
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
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testimony, i) => (
          <SwiperSlide key={i}>
            <div className="px-5 py-8 rounded-[24px] lg:w-[50%] mx-auto">
              <p className="text-[#7E7A7A] text-[16px] font-normal leading-[28px]">
                {testimony.body}
              </p>
              <p className="text-[#32220A] font-semibold mt-6">
                {testimony.author}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
