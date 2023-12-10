"use client";

import { Button, Typography } from "@/src/ui";
import Image from "next/image";
import bgImage from "../home/services-bg.png";
import BrownPlayIcon from "@/public/assets/svgs/brown-play-icon.svg";
import Twitter from "@/public/assets/svgs/twitter.svg";
import Facebook from "@/public/assets/svgs/facebook.svg";
import Instagram from "@/public/assets/svgs/instagram.svg";
import Youtube from "@/public/assets/svgs/youtube.svg";
import FooterLogo from "/public/assets/svgs/lcc-logo-footer.png";
import Link from "next/link";

const FooterSection = () => {
  return (
    <section className="w-full h-auto lg:px-20 xl:px-24
     py-14 px-6 relative">
      <div>
        <Image
          src={bgImage}
          alt="Background Image"
          layout="fill"
          className="w-full -z-50 object-cover"
        />
      </div>

      <div className="px-6 py-12 lg:px-12 xl:px-24 bg-secondary-main rounded-[3.13rem]">
        <div className="w-full flex lg:flex-row justify-between lg:space-x-0 xl:space-x-6 flex-col ">
          <div className="footer-logo lg:w-1/3 w-full">
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
          <div className="lg:flex lg:space-x-0 lg:w-3/5 w-full gap-x-4 lg:gap-x-0 grid grid-cols-2 lg:mt-0 mt-8">
            <section className="space-y-4 w-full lg:w-1/3">
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
            <section className="space-y-4 w-full lg:w-1/3">
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
            <section className="mt-8 lg:mt-0 w-max lg:w-1/3" id="partnership">
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
                {/* <div className="relative top-6">
                  <Button
                    variant="tertiary"
                    label="Give Online"
                    color="primary"
                    className="mt-12"
                  >
                    Give Online
                  </Button>
                </div> */}
              </div>
            </section>
          </div>
        </div>
        <div className="mt-36 md:mt-20">
          <div className="flex flex-col-reverse space-y-12 lg:flex-row lg:justify-between lg:items-center">
            <div className="mt-8 lg:mt-0">
            <Button
              variant="primary"
              color="primary"
              label="Join Us Live"
              leftIcon={<BrownPlayIcon />}
            />
            </div>
            <div className="flex space-x-4">
              <InstagramIcon />
              <TwitterIcon />
              <FacebookIcon />
             <YoutubeIcon />
            </div>
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


const YoutubeIcon = () => {
  return (
    <Link href="https://youtube.com/@lightcitychurchmedia2477?si=55shg00UGFq_ySV8" className="">
      <Youtube />
    </Link>
  );
};


const TwitterIcon = () => {
  return (
    <Link href="https://x.com/the_lightcity?s=21&t=2ml2yWBwSbMXl3AHtNxACw" className="">
      <Twitter />
    </Link>
  );
};


const FacebookIcon = () => {
  return (
    <Link href="https://www.facebook.com/the.lightcityng?mibextid=LQQJ4d" className="">
      <Facebook />
    </Link>
  );
};


const InstagramIcon = () => {
  return (
    <Link href="https://instagram.com/the.lightcityng?igshid=OGQ5ZDc2ODk2ZA==" className="">
      <Instagram />
    </Link>
  );
};
