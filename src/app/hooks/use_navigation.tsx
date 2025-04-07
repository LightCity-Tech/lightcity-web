import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';


export const useNavigation = () => {
  const [navOpen, setNavOpen] = useState<boolean | null>(null);
  const pathname = usePathname();

  const onNavMenuClick = () => {
    setNavOpen(true);
  };

  const onBodyClick = (e: any, value: boolean) => {
    setNavOpen(value);
    e.stopPropagation();
  };

  //close nav on new route
  useEffect(() => {
    setNavOpen(null);
  }, [pathname]);

  return { onNavMenuClick, navOpen, onBodyClick, pathname, setNavOpen };
};