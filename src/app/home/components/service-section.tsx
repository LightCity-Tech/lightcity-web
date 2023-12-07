"use client";

import { Typography } from "@/src/ui";
import Image from "next/image";
import LocationIcon from "@/public/assets/svgs/location.svg";
import bgImage from "../services-bg.png";

const ServiceSection = () => {
  const services = [
    { service: "Sunday Service", time: "08:00AM" },
    { service: "Wednesday Service", time: "05:00PM" },
    { service: "Friday Prayers", time: "05:30PM" },
  ];

  return (
    <section className="flex flex-col-reverse lg:py-36 xl:px-12 lg:flex lg:flex-row lg:justify-end relative lg:bg-gradient-to-r lg:from-transparent lg:from-35% lg:via-secondary-25 lg:via-55% lg:to-secondary-25">
      <div className="lg:-z-50 lg:absolute lg:inset-0 w-full lg:h-full h-[500px]">
        <Image src={bgImage} alt="Background Image" className="w-full h-full object-cover" />
      </div>
      <section className="lg:w-[45%] w-full py-3 px-5 h-full flex bg-secondary-25 flex-col gap-6">
        <Typography
          variant="h2"
          color="secondary-main"
          fontWeight="semi-bold"
          align="left"
        >
          We value the physical gathering of the saints together in one place.
        </Typography>
        <div className="lg:w-3/5 w-full flex flex-col gap-2 mt-6">
          {services.map((service, index) => (
            <div key={index} className="flex justify-between items-center">
              <div>
                <Typography
                  variant="h4"
                  color="secondary-main"
                  fontWeight="medium"
                  align="left"
                >
                  {service.service}
                </Typography>
              </div>
              <div className="py-3 px-5 rounded bg-black">
                <Typography
                  variant="h6"
                  color="secondary-25"
                  fontWeight="bold"
                  align="center"
                >
                  {service.time}
                </Typography>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-start items-center gap-2">
          <LocationIcon />
          <Typography
            variant="h5"
            color="secondary-main"
            fontWeight="medium"
            align="left"
          >
            179 Ziks Avenue, Uwani Enugu State (Second Floor)
          </Typography>
        </div>
      </section>
    </section>
  );
};

export default ServiceSection;
