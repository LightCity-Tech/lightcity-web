import React from "react";
import { useSwiper } from "swiper/react";

const SwiperButtonPrevious = ({ children }: { children: React.ReactNode }) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slidePrev()}>{children}</button>;
};

export default SwiperButtonPrevious