"use client";

import Logo from "../../logo";
import Link from "next/link";
import { Button } from "@/src/ui";
import BrownPlayIcon from "@/public/assets/svgs/brown-play-icon.svg";
import { useNavigation } from "../../hooks/use_navigation";
import useScroll from "../../hooks/use_scroll";
import Navigation from "@/public/assets/svgs/menu.svg";
import NavigationBlack from "@/public/assets/svgs/menu-black.svg";
import CloseNavigation from "@/public/assets/svgs/close.svg";
import MLogo from "@/public/assets/svgs/lcc-logo-footer.png";

import "./style.css";
import { Spacer } from "../spacer";
import Image from "next/image";
import { useEffect, useState } from "react";
import LogoBlack from "../../logo-black";
import { usePathname } from "next/navigation";
import MobileLogoBlack from "../../mobile-logo-black";

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
    name: "Partner with us",
    url: "#partnership",
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
    name: "Partner",
    url: "#partnership",
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

  const { onNavMenuClick, navOpen, onBodyClick, pathname, setNavOpen } =
    useNavigation();
  const { hasBackground } = useScroll();

  const [hasBg, setHasBg] = useState(false);
  useEffect(() => {
    if (pathname.includes("/sermons")  || pathname === "/about-us") {
      setHasBg(true);
      
    } else {
      setHasBg(false)
    }
  }, [pathname]);

  return (
    <div>
      <nav
        className={`${hasBg ? "nav-bg relative" : "nav-no-bg"
        } navigation w-full h-[10vh] hidden py-4 md:px-10 lg:px-20 xl:px-24 md:flex justify-between items-center`}
      >
        {hasBg ? <LogoBlack /> : <Logo />}
        <nav className="grow flex justify-between mx-auto md:px-6 lg:mx-8 xl:mx-16 2xl:mx-28">
          {links.map((link, index) => (
            <div
              className={`${
                pathname.includes(link.url) ? "nav-active" : hasBg ? "text-black" : "text-white nav-links"
              }`}
              key={index}
            >
              <Link href={link.url}>{link.name}</Link>
            </div>
          ))}
        </nav>
        <Link href="https://pastortochilightcitychurch.mixlr.com">
          <Button
            variant="primary"
            color="primary"
            label="Join Us Live"
            customClassName="mb-2"
            leftIcon={<BrownPlayIcon />}
          />
        </Link>
      </nav>
      <MobileNavigation
        onBodyClick={onBodyClick}
        onNavMenuClick={onNavMenuClick}
        navOpen={navOpen}
        hasBackground={hasBg}
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
  setNavOpen: any;
}

const MobileNavigation = ({
  onNavMenuClick,
  onBodyClick,
  navOpen,
  hasBackground,
  setNavOpen,
}: MobileNavigationProps) => {

  const pathname = usePathname()
  return (
    <div className={`${hasBackground ? 'nav-bg relative' : 'nav-no-bg' } mob-nav flex navigation md:hidden`}>
      { (pathname.includes('/sermons') || pathname==='/about-us' ) ?  <MobileLogoBlack /> : <Image src={MLogo} width={64} height={64} alt="" /> }
      {/* <Image src={MLogo} width={64} height={64} alt="" /> */}
      <button className="unstyle-button c-pointer" onClick={onNavMenuClick}>
       {pathname.includes('/sermons') || pathname==='/about-us' ? <NavigationBlack /> : <Navigation />} 
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
  onBodyClick: any;
}

const MobileNavigationItem = ({
  className,
  onClick,
  innerContent,
  setNavOpen,
  onBodyClick,
}: MobileNavigationItemProps) => {
  return (
    <div
      className={`whole-area ${className || "overflow-hidden"}`}
      onClick={(e) => onClick(e, false)}
    >
      <div onClick={(e) => onClick(e, true)} className="main-portion">
        <div className="bg-secondary-main flex justify-between px-10 py-3">
          <Image src={MLogo} width={64} height={64} alt="" />
          <button
            className="unstyle-button c-pointer"
            onClick={(e) => onClick(e, false)}
          >
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
