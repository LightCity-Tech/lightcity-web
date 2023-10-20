"use client";

import { Button, Typography } from "@/src/ui";
import Image from "next/image";
import bgImage from "../services-bg.png";
import BrownPlayIcon from "@/public/assets/svgs/brown-play-icon.svg";

const FooterSection = () => {
  return (
    <section className="w-full h-auto px-24 py-14 relative">
      <div>
        <Image
          src={bgImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="w-full -z-50"
        />
      </div>

      <div className="p-12 bg-secondary-main rounded-[3.13rem]">
        <div></div>
        <div>
          <div>
            <Button
              variant="primary"
              color="primary"
              label="Join Us Live"
              leftIcon={<BrownPlayIcon />}
            />
            <div></div>
          </div>
          <div className="border-secondary-25 border-t h-0 w-full my-8"></div>
          <div className="flex justify-between">
            <div>
              <Typography
                fontWeight="regular"
                color = "secondary-25"
                customClassName="!text-[0.75rem]"
              >© 2023 LightCity Church. All rights reserved.</Typography>
            </div>
            <div className="flex gap-4">
              <Typography
                color = "secondary-25"
                fontWeight="regular"
                customClassName="!text-[0.75rem]"
              >Terms</Typography>
              <Typography
                color = "secondary-25"
                fontWeight="regular"
                customClassName="!text-[0.75rem]"
              >Privacy</Typography>
              <Typography
                color = "secondary-25"
                fontWeight="regular"
                customClassName="!text-[0.75rem]"
              >Cookies</Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
