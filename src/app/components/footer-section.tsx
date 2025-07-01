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

interface InfoLink {
  href: string;
  text: string;
}

const FooterSection = () => {
  const socials = [
    {
      icon: <Instagram />,
      href: "https://instagram.com/the.lightcityng?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
      icon: <Twitter />,
      href: "https://x.com/the_lightcity?s=21&t=2ml2yWBwSbMXl3AHtNxACw",
    },
    {
      icon: <Facebook />,
      href: "https://www.facebook.com/the.lightcityng?mibextid=LQQJ4d",
    },
    {
      icon: <Youtube />,
      href: "https://youtube.com/@lightcitychurchmedia2477?si=55shg00UGFq_ySV8",
    },
  ];

  const infoLinks: InfoLink[] = [
    { href: "/home", text: "Home" },
    { href: "/about-us", text: "About Us" },
    { href: "#", text: "Contact Us" },
    {
      href: "https://www.google.com/maps/place/LightCity+Church/@6.4207336,7.4840509,17z/data=!4m6!3m5!1s0x1044a194ae359ad7:0x9b96dca3bf9c316c!8m2!3d6.4207336!4d7.4866312!16s%2Fg%2F11nmj129jk?authuser=0&entry=ttui",
      text: "Worship with Us",
    },
  ];

  const quickLinks = [
    { href: "/our-meetings", text: "Meetings" },
    { href: "/sermons", text: "Sermons Library" },
  ];

  return (
    <section className="w-full h-auto lg:px-20 xl:px-24 py-14 px-6 relative">
      <div className="relative w-full h-auto">
        <Image
          src={bgImage}
          alt="Background Image"
          fill
          className="w-full -z-50 object-cover"
        />
      </div>

      <div className="px-6 py-12 lg:px-12 xl:px-24 bg-secondary-main rounded-[3.13rem]">
        <div className="w-full flex lg:flex-row justify-between lg:space-x-0 xl:space-x-6 flex-col ">
          <div className="footer-logo lg:w-1/3 w-full">
            <Image src={FooterLogo} alt="LightCity logo" />
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
              {infoLinks.map((infoLink, index) => (
                <Typography
                  variant="body-mid"
                  color="secondary-25"
                  fontWeight="regular"
                  key={index}
                >
                  <Link
                    href={infoLink.href}
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary-25 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    target={infoLink.href.includes("maps") ? "_blank" : "_self"}
                  >
                    {infoLink.text}
                  </Link>
                </Typography>
              ))}
            </section>
            <section className="space-y-4 w-full lg:w-1/3">
              <Typography
                variant="h5"
                fontWeight="semi-bold"
                color="secondary-25"
              >
                Quick Links
              </Typography>
              {quickLinks.map((quickLink, index) => (
                <Typography
                  variant="body-mid"
                  color="secondary-25"
                  fontWeight="regular"
                  key={index}
                >
                  <Link
                    href={quickLink.href}
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary-25 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                  >
                    {quickLink.text}
                  </Link>
                </Typography>
              ))}
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
              </div>
            </section>
          </div>
        </div>
        <div className="mt-36 md:mt-20">
          <div className="flex flex-col-reverse space-y-12 lg:flex-row lg:justify-between lg:items-center">
            <div className="mt-8 lg:mt-0">
              <Link href="/live">
                {" "}
                <Button
                  variant="primary"
                  color="primary"
                  label="Join Us Live"
                  leftIcon={<BrownPlayIcon className="fill-secondary-main" />}
                />
              </Link>
            </div>
            <div className="flex space-x-4">
              {socials.map((social, index) => (
                <Link
                  href={social.href}
                  key={index}
                  target="_blank"
                  className="transition ease-in-out delay-150 duration-150 hover:-translate-y-1"
                >
                  {social.icon}
                </Link>
              ))}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
