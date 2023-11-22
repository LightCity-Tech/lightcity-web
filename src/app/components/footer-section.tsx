"use client";

import { Button, Typography } from "@/src/ui";
import Image from "next/image";
import bgImage from "../home/services-bg.png";
import BrownPlayIcon from "@/public/assets/svgs/brown-play-icon.svg";
import FooterLogo from "/public/assets/svgs/lcc-logo-footer.png";

const FooterSection = () => {
  return (
    <section className="w-full h-auto px-24 py-14 md:px-6 relative">
      <div>
        <Image
          src={bgImage}
          alt="Background Image"
          layout="fill"
          className="w-full -z-50 object-cover"
        />
      </div>

      <div className="p-12 md:py-8 md:px-6 bg-secondary-main rounded-[3.13rem]">
        <div className="w-full flex justify-between md:flex-col ">
          <div className="footer-logo">
            <Image
              src={FooterLogo}
              alt="LightCity logo"
              // width={273}
              // height={171}
              // style={{
              //   width: '100%',
              //   height: 'auto',
              // }}
            />
          </div>
          <div className="flex space-x-16 w-3/5 md:w-full md:gap-x-4 md:grid md:grid-cols-2 md:mt-8 md:space-x-0">
            <section className="space-y-4">
              <Typography
                variant="h5"
                fontWeight="semi-bold"
                color="secondary-25"
              >
                Get to know us
              </Typography>
              <Typography
                variant="body-mid"
                color="secondary-25"
                fontWeight="regular"
              >
                Home
              </Typography>
              <Typography
                variant="body-mid"
                color="secondary-25"
                fontWeight="regular"
              >
                About us
              </Typography>
              <Typography
                variant="body-mid"
                color="secondary-25"
                fontWeight="regular"
              >
                Contact us
              </Typography>
              <Typography
                variant="body-mid"
                color="secondary-25"
                fontWeight="regular"
              >
                Location
              </Typography>
            </section>
            <section className="space-y-4">
              <Typography
                variant="h5"
                fontWeight="semi-bold"
                color="secondary-25"
              >
                Quick Links
              </Typography>
              <Typography
                variant="body-mid"
                color="secondary-25"
                fontWeight="regular"
              >
                Foundation class
              </Typography>
              <Typography
                variant="body-mid"
                color="secondary-25"
                fontWeight="regular"
              >
                Meetings
              </Typography>
              <Typography
                variant="body-mid"
                color="secondary-25"
                fontWeight="regular"
              >
                Sermon Library
              </Typography>
            </section>
            <section className="md:mt-8 md:w-max">
              <Typography
                variant="h5"
                fontWeight="semi-bold"
                color="secondary-25"
              >
                Partner with us
              </Typography>
              <div className="space-y-1 mt-4">
                <Typography
                  variant="body-mid"
                  color="secondary-25"
                  fontWeight="regular"
                >
                  Account number - 0627104443
                </Typography>
                <Typography
                  variant="body-mid"
                  color="secondary-25"
                  fontWeight="regular"
                >
                  Account name - The Lighthouse Church{" "}
                </Typography>
                <Typography
                  variant="body-mid"
                  color="secondary-25"
                  fontWeight="regular"
                >
                  Bank - GT Bank
                </Typography>
                <div className="relative top-6">
                  <Button
                    variant="tertiary"
                    label="Give Online"
                    color="primary"
                    className="mt-12"
                  >
                    Give Online
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="mt-36 md:mt-20">
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
                color="secondary-25"
                customClassName="!text-[0.75rem]"
              >
                © 2023 LightCity Church. All rights reserved.
              </Typography>
            </div>
            <div className="flex gap-4">
              <Typography
                color="secondary-25"
                fontWeight="regular"
                customClassName="!text-[0.75rem]"
              >
                Terms
              </Typography>
              <Typography
                color="secondary-25"
                fontWeight="regular"
                customClassName="!text-[0.75rem]"
              >
                Privacy
              </Typography>
              <Typography
                color="secondary-25"
                fontWeight="regular"
                customClassName="!text-[0.75rem]"
              >
                Cookies
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
