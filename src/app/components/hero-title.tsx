import { kashuan } from "@/styles/font";
import React from "react";

type Props = {
  subtitle: string;
  special?: string;
};

const HeroTitle = (props: Props) => {
  return (
    <h1 dangerouslySetInnerHTML={{__html: props.subtitle}} >
      
      <span
        className={`${kashuan.className} text-[42px] inline-block text-secondary-200`}
      >
       {props.special}
      </span>
    </h1>
  );
};

export default HeroTitle;
