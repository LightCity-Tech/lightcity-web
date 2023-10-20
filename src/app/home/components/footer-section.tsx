"use client";

import Image from "next/image";
import bgImage from "../services-bg.png";

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

      <div className="p-12 bg-secondary-main"></div>
    </section>
  );
};

export default FooterSection;
