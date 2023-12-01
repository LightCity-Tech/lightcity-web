"use client";

import Logo from "../../logo";
import Link from "next/link";
import { Button } from "@/src/ui";
import BrownPlayIcon from "@/public/assets/svgs/brown-play-icon.svg";
import { useNavigation } from "../../hooks/use_navigation";
import useScroll from "../../hooks/use_scroll";
import Navigation from "@/public/assets/svgs/menu.svg";
import CloseNavigation from "@/public/assets/svgs/close.svg";
import MLogo from "@/public/assets/svgs/lcc-logo-footer.png";

import "./style.css";
import { Spacer } from "../spacer";
import Image from "next/image";
import { useEffect, useState } from "react";

export const sizes = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const bigLinks = [
  {
    name: "Home",
    url: "/home",
  },
  {
    name: "About Us",
    url: "/about-us",
  },
  {
    name: "Sermon Library",
    url: "/sermons",
  },
  {
    name: "Our Meetings",
    url: "/our-meetings",
  },
  {
    name: "Give to Us",
    url: "/give",
  },
  {
    name: "Contact Us",
    url: "/contact-us",
  },
  // {
  //   name: "Our Gallery",
  //   url: "/gallery",
  // },
];

const smallLinks = [
  {
    name: "Home",
    url: "/home",
  },
  {
    name: "About Us",
    url: "/about-us",
  },
  {
    name: "Sermons",
    url: "/sermons",
  },
  {
    name: "Meetings",
    url: "/our-meetings",
  },
  {
    name: "Give",
    url: "/give",
  },
  {
    name: "Contact Us",
    url: "/contact-us",
  },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth > 768 && window.innerWidth < 1250) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const links = isMobile ? smallLinks : bigLinks;

  const { onNavMenuClick, navOpen, onBodyClick, pathname, setNavOpen } = useNavigation();
  const { hasBackground } = useScroll();

  return (
    <div>
      <nav
        className={`navigation w-full h-[10vh] hidden py-4 md:px-10 lg:px-20 xl:px-24 md:flex justify-between items-center`}
      >
        <Logo />
        <nav className="grow flex justify-between mx-auto md:px-6 lg:mx-8 xl:mx-16 2xl:mx-28">
          {links.map((link, index) => (
            <div
              className={`${
                pathname === link.url ? "nav-active" : "nav-links"
              }`}
              key={index}
            >
              <Link
                href={link.url}
                className={`${
                  pathname === link.url ? "text-secondary-200" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>
        <Button
          variant="primary"
          color="primary"
          label="Join Us Live"
          customClassName="mb-2"
          leftIcon={<BrownPlayIcon />}
        />
      </nav>
      <MobileNavigation
        onBodyClick={onBodyClick}
        onNavMenuClick={onNavMenuClick}
        navOpen={navOpen}
        hasBackground={hasBackground}
        setNavOpen={setNavOpen}
      />
    </div>
  );
};

export default Navbar;

interface MobileNavigationProps {
  onBodyClick: any;
  onNavMenuClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  navOpen?: boolean | any;
  hasBackground: boolean;
  setNavOpen: any
}

const MobileNavigation = ({
  onNavMenuClick,
  onBodyClick,
  navOpen,
  hasBackground,
  setNavOpen
}: MobileNavigationProps) => {
  return (
    <div className="mob-nav flex navigation md:hidden">
      <Image src={MLogo} width={64} height={64} alt="" />
      <button className="unstyle-button c-pointer" onClick={onNavMenuClick}>
        <Navigation />
      </button>
      {navOpen !== null && (
        <MobileNavigationItem
          className={navOpen ? "nav-open" : "nav-close"}
          onClick={onBodyClick}
          innerContent={<NavInnerContent />}
          setNavOpen={setNavOpen}
          onBodyClick={onBodyClick}
        />
      )}
    </div>
  );
};

interface MobileNavigationItemProps {
  className?: string;
  onClick?: any;
  innerContent?: any;
  setNavOpen: any;
  onBodyClick: any
}

const MobileNavigationItem = ({
  className,
  onClick,
  innerContent,
  setNavOpen,
  onBodyClick
}: MobileNavigationItemProps) => {
  return (
    <div
      className={`whole-area ${className || "overflow-hidden"}`}
      onClick={(e) => onClick(e, false)}
    >
      <div onClick={(e) => onClick(e, true)} className="main-portion">
        <div className="bg-secondary-main flex justify-between px-10 py-3">
          <Image src={MLogo} width={64} height={64} alt="" />
          <button className="unstyle-button c-pointer" onClick={(e) => onClick(e, false)}>
            <CloseNavigation />
          </button>
        </div>
        {innerContent}
      </div>
    </div>
  );
};

export const NavInnerContent = () => (
  <div className="content">
    <ul className="mobile-ul">
      {bigLinks.map((link) => (
        <li className="nav-links" key={link.url}>
          <Link href={link.url}>{link.name}</Link>
          <Spacer width={40} />
        </li>
      ))}
    </ul>
    <Button
      variant="primary"
      color="primary"
      label="Join Us Live"
      customClassName="mb-2"
      leftIcon={<BrownPlayIcon />}
    />
  </div>
);
