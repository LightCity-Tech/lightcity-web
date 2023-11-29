import { kashuan } from "@/styles/font";
import React from "react";

type Props = {
  subtitle: string;
  special?: string;
};

const HeroTitle = (props: Props) => {
  return (
    <h1 className="text-[42px] leading-[48px] mt-3 font-bold">
      {props.subtitle}{" "}
      <span
        className={`${kashuan.className} text-[42px] inline-block text-secondary-200`}
      >
       {props.special}
      </span>
    </h1>
  );
};

export default HeroTitle;
