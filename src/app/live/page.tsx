"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import BgImage from "@/public/assets/images/slide02.webp";
import { Typography } from "@/src/ui";
import Link from "next/link";

const Live = () => {
  const [mixlr, setMixlr] = useState<boolean>(true);

  const streamMixlr = () => {
    setMixlr(true);
  };

  const streamTelegram = () => {
    setMixlr(false);
  };

  const commonStyles = "outline-0 p-4 font-medium transition duration-300 ease-in-out small-mobile:text-sm"; 

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
              className="bg-white w-[60%] h-[36rem] border-0 rounded-[20px] shadow-xl mobile:w-[75%] mobile:h-[24rem] small-mobile:!w-[90%]"
            >
              <iframe
                src="https://pastortochilightcitychurch.mixlr.com/embed"
                className="w-full h-full border-0 rounded-[20px]"
              ></iframe>
            </motion.div>
          ) : (
            <motion.div
              key="telegram"
              className="bg-white w-[60%] h-[36rem] border-0 rounded-[20px] shadow-xl flex flex-col justify-start items-center gap-12 p-4 mobile:gap-6 mobile:w-[75%] small-mobile:!w-[90%] mobile:h-auto mobile:p-14 small-mobile:p-6"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Typography
                variant="body-reg"
                align="center"
                fontWeight="black"
                color="secondary-main"
                customClassName="mt-20 text-7xl lg:text-9xl mobile:mt-0 small-mobile:text-4xl"
              >
                Ooops!
              </Typography>
              <div className="flex flex-col justify-center items-center">
                <Typography
                  variant="body-reg"
                  align="center"
                  color="secondary-main"
                  customClassName="text-xl small-mobile:text-base"
                >
                  Live streaming from Telegram is not available here at this
                  moment.
                </Typography>
                <Link
                  href="https://t.me/PastorTochi"
                  target="_blank"
                  className="mt-4 text-secondary-main underline underline-offset-4 font-medium transition duration-700 ease-in-out text-center text-base mobile:text-sm hover:no-underline hover:scale-110 hover:text-secondary-100"
                >
                  Please, click link to tune in from Telegram
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Live;
