import React from "react";
import { useSwiper } from "swiper/react";

const SwiperButtonPrevious = ({ children }: { children: React.ReactNode }) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slidePrev()} className="w-auto h-auto rounded-full cursor-pointer bg-transparent transition ease-in-out delay-75 duration-150 hover:bg-secondary-25">{children}</button>;
};

export default SwiperButtonPrevious;