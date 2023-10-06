'use client'

import LogoImage from "@/public/assets/svgs/lcc-logo.svg"
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <LogoImage />
    </Link>
  );
};

export default Logo;
