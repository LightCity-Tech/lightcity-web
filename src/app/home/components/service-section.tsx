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
    <section className="py-36 px-16 md:px-2 flex justify-end relative bg-gradient-to-l from-secondary-25">
      <div className="-z-50 absolute inset-0 w-full h-full">
        <Image src={bgImage} alt="Background Image" layout="fill" objectFit="cover" className="w-full" />
      </div>
      <section className="w-1/2 md:w-full h-full flex flex-col gap-6">
        <Typography
          variant="h2"
          color="secondary-main"
          fontWeight="semi-bold"
          align="left"
        >
          We value the physical gathering of the saints together in one place.
        </Typography>
        <div className="w-3/5 md:w-full flex flex-col gap-2 mt-6">
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
              <div className="p-3 rounded bg-black">
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
