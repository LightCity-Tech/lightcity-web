import React from "react";
import { useSwiper } from "swiper/react";

const SwiperButtonNext = ({ children }: { children: React.ReactNode }) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slideNext()}>{children}</button>;
};

export default SwiperButtonNext