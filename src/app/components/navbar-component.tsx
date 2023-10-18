'use client'

import Logo from "../logo";
import Link from "next/link";
import { Button } from "@/src/ui";
import BrownPlayIcon from "@/public/assets/svgs/brown-play-icon.svg";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      url: "",
    },
    {
      name: "About Us",
      url: "",
    },
    {
      name: "Sermon Library",
      url: "",
    },
    {
      name: "Our Meetings",
      url: "",
    },
    {
      name: "Give to Us",
      url: "",
    },
    {
      name: "Contact Us",
      url: "",
    },
    {
      name: "Our Gallery",
      url: "",
    },
  ];

  return (
    <nav className="w-full h-[10vh] bg-transparent py-4 px-24 flex justify-between items-center">
      <Logo />
      <nav className="grow flex justify-between mx-36">
        {links.map((link, index) => (
          <Link
            href={link.url}
            key={index}
            className="text-white text-body-reg"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <Button
        variant="primary"
        color="primary"
        label="Join Us Live"
        customClassName="mb-2"
        leftIcon = {<BrownPlayIcon/>}
      />
    </nav>
  );
};

export default Navbar;