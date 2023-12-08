import { Typography, Button } from "@/src/ui";
import React from "react";
import HeroSection from "../../home/components/hero-section";
import Image from "next/image";
import { kashuan } from "@/styles/font";
type Props = {};

const Meeting = (props: Props) => {
  return (
    <section>
      {/* <header className="bg-black h-[90vh]">
       <div className="box-sizing: border-box; flex: 0 0 100%; height: 100%; width: 100%;">
       
       <Image
          src="/assets/images/hero-wc.jpg"
          alt="Background Image"
          // layout="fill"
          width={800}
          height={800}
          className="w-full -z-50 object-cover"
           style={{ width: "100%", height: "100vh" }}
        />
     </div> 
     <div className="">
     <div className="lg:w-[70%] w-full">
          <h1 className="text-[48px] lg:text-[84px] leading-[48px] lg:leading-[80px] mt-3 font-bold">
          Word Conference
            <span
              className={`${kashuan.className} text-[48px] lg:text-[84px] text-secondary-200`}
            >
            
            </span>
          </h1>
        </div>
     <div className="py-6 md:w-[50%] w-full">
          <p className="text-sm lg:text-base leading-6">
          Word Conference is an annual special meeting of 
        LightCity Church put together by the Spirit of God to have believers camp around the teaching 
        of Gods word and the intense atmospheres of the demonstrations of the Spirit.</p>
        </div>

     </div>
      </header> */}
<header className="relative bg-black h-[90vh]">
  <div className="relative flex items-center  justify-center h-full">
    <Image
      src="/assets/images/hero-wc.jpg"
      alt="Background Image"
      width={800}
      height={800}
      className="w-full h-full object-cover brightness-50"
      style={{ width: "100%", height: "100%" }}
    />
  </div>

  <div className="absolute inset-0 flex flex-col items-center justify-center">
    <div className="lg:w-[70%] w-full text-center">
      <h1 className="text-[48px] lg:text-[84px] leading-[48px] lg:leading-[80px] mt-3 font-bold text-white">
        Word Conference
        <span className="text-secondary-200">{/* Add your span content here */}</span>
      </h1>
    </div>
    <div className="py-6 md:w-[50%] w-full text-center text-white">
      <p className="text-sm lg:text-base leading-6">
        Word Conference is an annual special meeting of LightCity Church put together by the Spirit of God to have believers camp around the teaching of God's word and the intense atmospheres of the demonstrations of the Spirit.
      </p>
    </div>
  </div>
</header>
    
      <div className="md:px-24 md:px-4 py-16 md:flex md:flex-row md:justify-around md:space-x-6 space-x-4 md:space-x-0 bg-white">
        <div className="md:w-full md:block hidden">
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
          <Button
          variant="primary"
          color="primary"
          label="Register Here"
          leftIcon=""
          customClassName="mt-4"
        />
        </div>
        <div className="w-3/4 md:w-full " style={{display:"inline"}}>
          <img src="https://res.cloudinary.com/tochukwu/image/upload/w_500/v1700481884/lightcity/qek9s7hvd51k4yr0rta9.webp"
            className="w-full h-[400px]" style={{width:""}} />
               <div className="md:w-full md:hidden">
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
          <Button
          variant="primary"
          color="primary"
          label="Register Here"
          leftIcon=""
          customClassName="mt-4"
        />
        </div>
          <div className="py-4 "> 
            <Typography variant="body-reg"
              color="secondary-main"
              fontWeight="regular"
              customClassName="mb-4 md:text-[15px] __className_99a66f text-main-black font-medium ">
              WORD CONFERENCE 2023 <br/>One Meeting • 3 Days • 6 Sessions <br/>Saints of
              God gathered in the Name of His Holy Son Jesus, <br/>The Word of God&apos;s
              Grace taught, <br/>The Holy Ghost in His Natural Habitat, <br/>The things
              and ALL the 9 gifts of the Spirit in graceful, yet mighty
              demonstrations - Utterances, Revelation and Power, <br/> ALL in FULL
              demonstration with sick bodies healed and diverse needs met.<br/>
              Encounters and experiences in the Glory and Power of God APLENTY &
              CEASELESS, <br/>Our lives and ministries FOREVER changed... <br/>This is
              God&apos;s plan for your life & ministry. <br/>Tell a friend! Pray, Prepare
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
