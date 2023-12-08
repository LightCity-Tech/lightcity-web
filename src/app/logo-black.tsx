'use client'

import LogoImage from "@/public/assets/svgs/lcc-logo-black.svg"
import Link from "next/link";

const LogoBlack = () => {
  return (
    <Link href="/" className="">
      <LogoImage />
    </Link>
  );
};

export default LogoBlack;