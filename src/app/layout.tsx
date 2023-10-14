import type { Metadata } from "next";
import { uncutSans } from "@/styles/font";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "LightCity Church",
  description: "...giving your life eternal value",
  icons: {
    icon: [{url: "../../public/favicon/favicon.png", sizes: "32x32", type: "image/png"}]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${uncutSans.className}`}>{children}</body>
    </html>
  );
}
