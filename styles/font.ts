import localFont from "next/font/local";
import { Kaushan_Script } from "next/font/google";

//Uncut Sans Font Setup
export const uncutSans = localFont({
  src: [
    {
      path: "./fonts/uncut_sans/Uncut-Sans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/uncut_sans/Uncut-Sans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/uncut_sans/Uncut-Sans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/uncut_sans/Uncut-Sans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: '--font-uncut'
});

//Kaushan Script Font Setup
export const kaushan = Kaushan_Script({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: '--font-kaushan'
});