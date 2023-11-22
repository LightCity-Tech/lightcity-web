"use client";

import Logo from "../../logo";
import Link from "next/link";
import { Button } from "@/src/ui";
import BrownPlayIcon from "@/public/assets/svgs/brown-play-icon.svg";
import { useNavigation } from "../../hooks/use_navigation";
import useScroll from "../../hooks/use_scroll";
import Navigation from "@/public/assets/svgs/menu.svg";
import MLogo from "@/public/assets/svgs/lcc-logo-footer.png";

import "./style.css";
import { Spacer } from "../spacer";
import Image from "next/image";

const links = [
  {
    name: "Home",
    url: "/home",
  },
  {
    name: "About Us",
    url: "/about",
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
  {
    name: "Our Gallery",
    url: "/gallery",
  },
];

const Navbar = () => {
  const { onNavMenuClick, navOpen, onBodyClick, pathname } = useNavigation();
  const { hasBackground } = useScroll();

  return (
    <div>
      <nav
        className={`${hasBackground ? 'nav-bg' : 'nav-no-bg'} navigation fixed w-full h-[10vh] md:hidden py-4 px-24 flex justify-between items-center`}
      >
        <Logo />
        <nav className="grow flex justify-between mx-36">
          {links.map((link, index) => (
            <div className="text-white nav-links" key={index}>
              <Link href={link.url} className="text-white text-body-reg">
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
}

const MobileNavigation = ({
  onNavMenuClick,
  onBodyClick,
  navOpen,
  hasBackground
}: MobileNavigationProps) => {
  return (
    <div className={`${hasBackground ? 'nav-bg' : 'nav-no-bg'} mob-nav navigation fixed`}>
      <Image src={MLogo} width={64} height={64} alt="" />
      <button className="unstyle-button c-pointer" onClick={onNavMenuClick}>
        <Navigation />
        {/* <Image src={Navigation} width={24} height={24} className="navigation-icon" alt="navigation button" /> */}
      </button>
      {navOpen !== null && (
        <MobileNavigationItem
          className={navOpen ? "nav-open" : "nav-close"}
          onClick={onBodyClick}
          innerContent={<NavInnerContent />}
        />
      )}
    </div>
  );
};

interface MobileNavigationItemProps {
  className?: string;
  onClick?: any;
  innerContent?: any;
}

const MobileNavigationItem = ({
  className,
  onClick,
  innerContent,
}: MobileNavigationItemProps) => {
  return (
    <div
      className={`whole-area ${className || ""}`}
      onClick={(e) => onClick(e, false)}
    >
      <div onClick={(e) => onClick(e, true)} className="main-portion">
        {innerContent}
      </div>
    </div>
  );
};

export const NavInnerContent = () => (
  <div className="content">
    <ul className="mobile-ul">
      {links.map((link) => (
        <li className="nav-links" key={link.url}>
          <Link href={link.url}>{link.name}</Link>
          <Spacer width={40} />
        </li>
      ))}
    </ul>
  </div>
);
