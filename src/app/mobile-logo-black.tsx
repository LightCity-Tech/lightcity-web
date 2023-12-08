'use client'

import LogoImage from "@/public/assets/svgs/mobile-logo-black.svg"
import Link from "next/link";

const MobileLogoBlack = () => {
  return (
    <Link href="/" className="">
      <LogoImage />
    </Link>
  );
};

export default MobileLogoBlack;