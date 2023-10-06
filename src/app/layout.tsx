import type { Metadata } from "next";
import { uncutSans } from "@/styles/font";
import "@/styles/globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "LightCity Church",
  description: "...giving your life eternal value",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../../public/favicon/favicon.png"
        />
      </Head>
      <body className={`${uncutSans.className}`}>{children}</body>
    </html>
  );
}
