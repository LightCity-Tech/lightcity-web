"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import BgImage from "@/public/assets/images/slide02.webp";

const Live = () => {
  const [mixlr, setMixlr] = useState<boolean>(true);

  const streamMixlr = () => {
    setMixlr(true);
  };

  const streamTelegram = () => {
    setMixlr(false);
  };

  const commonStyles = "p-4 text-medium";

  const MixlrStyles = mixlr
    ? "text-secondary-main bg-secondary-200 hover:bg-primary-700"
    : "text-white bg-transparent hover:text-secondary-200";

  const TelegramStyles = mixlr
    ? "text-white bg-transparent hover:text-secondary-200"
    : "text-secondary-main bg-secondary-200 hover:bg-primary-700";

  return (
    <section className="relative h-[100vh] w-full flex flex-col justify-center items-center ">
      <div className="z-20 my-[2.5rem] flex justify-center items-center gap-4">
        <button
          onClick={streamMixlr}
          className={`${MixlrStyles} ${commonStyles}`}
        >
          Listen on Mixlr
        </button>
        <button
          onClick={streamTelegram}
          className={`${TelegramStyles} ${commonStyles}`}
        >
          Listen on Telegram
        </button>
      </div>

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
        style={{
          backgroundImage: `url(${BgImage.src})`,
        }}
      ></div>
      <div className="relative z-10 flex flex-col justify-center items-center w-[inherit] h-auto">
        <AnimatePresence mode="wait">
          {mixlr ? (
            <motion.div
              key="mixlr"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-white w-[60%] h-[36rem] border-0 rounded-[20px] shadow-xl mobile:w-[75%] small-mobile:!w-[90%]"
            >
              <iframe
                src="https://pastortochilightcitychurch.mixlr.com/embed"
                className="w-full h-full border-0 rounded-[20px]"
              ></iframe>
            </motion.div>
          ) : (
            <motion.div
              key="telegram"
              className="bg-white w-[60%] h-[36rem] border-0 rounded-[20px] shadow-xl mobile:w-[75%] small-mobile:!w-[90%]"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Live;
