import { Typography } from "@/src/ui";
import React from "react";

type Props = {};

const Meeting = (props: Props) => {
  return (
    <section>
      <header className="bg-black h-[90vh]"></header>
      <div className="px-24 md:px-4 py-16 flex md:flex md:flex-col-reverse space-x-6 md:space-x-0">
        <div className="md:w-full">
          <div>
            <Title text="DATE" />
            <Typography
              variant="body-reg"
              color="secondary-main"
              fontWeight="regular"
              customClassName="mb-4 md:text-[16px] uppercase"
            >
              08TH - 10TH DECEMBER 2023
            </Typography>
          </div>
          <div>
            <Title text="LOCATION" />
            <Typography
              variant="body-reg"
              color="secondary-main"
              fontWeight="regular"
              customClassName="mb-4 md:text-[16px] uppercase"
            >
              Main Hall, University of Nigeria, Enugu Campus (UNEC), Nigeria.
            </Typography>
          </div>
          <div>
            <Title text="DATE" />
            <Typography
              variant="body-reg"
              color="secondary-main"
              fontWeight="regular"
              customClassName="mb-4 md:text-[16px] uppercase"
            >
              08141748947, 08138720239
            </Typography>
          </div>
        </div>
        <div className="w-3/4 md:w-full">
          <img src="https://res.cloudinary.com/tochukwu/image/upload/w_500/v1700481884/lightcity/qek9s7hvd51k4yr0rta9.webp"
            className="" />

          <div className="py-4"> 
            <Typography variant="body-reg"
              color="secondary-main"
              fontWeight="regular"
              customClassName="mb-4 md:text-[24px] md:hidden">
              WORD CONFERENCE 2023 <br/>One Meeting • 3 Days • 6 Sessions <br/>Saints of
              God gathered in the Name of His Holy Son Jesus, <br/>The Word of God's
              Grace taught, <br/>The Holy Ghost in His Natural Habitat, <br/>The things
              and ALL the 9 gifts of the Spirit in graceful, yet mighty
              demonstrations - Utterances, Revelation and Power, <br/> ALL in FULL
              demonstration with sick bodies healed and diverse needs met.<br/>
              Encounters and experiences in the Glory and Power of God APLENTY &
              CEASELESS, <br/>Our lives and ministries FOREVER changed... <br/>This is
              God's plan for your life & ministry. <br/>Tell a friend! Pray, Prepare
              and attend! Welcome
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meeting;

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <Typography
      variant="body-reg"
      color="secondary-main"
      fontWeight="medium"
      customClassName="md:text-[18px] uppercase"
    >
      {text}
    </Typography>
  );
};
