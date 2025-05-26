"use client";

import BgImage from "@/public/assets/images/slide02.webp";

const Live = () => {
  return (
    <section className="relative w-full h-[100vh] flex justify-center items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
        style={{
          backgroundImage: `url(${BgImage.src})`,
        }}
      ></div>
      <div className="relative z-10 flex flex-col justify-center items-center w-[inherit] h-auto">
        <iframe
          src="https://pastortochilightcitychurch.mixlr.com/embed"
          className="w-[60%] h-[36rem] border-0 rounded-[20px] shadow-xl mobile:w-[75%] small-mobile:!w-[90%]"
        ></iframe>
      </div>
    </section>
  );
};

export default Live;
