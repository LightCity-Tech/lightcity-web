import type { Metadata } from "next";
import { uncutSans } from "@/styles/font";
import "@/styles/globals.css";
import Navbar from "./components/navigation/navbar-component";
import FooterSection from "./components/footer-section";
import Head from "./head";

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
       <Head />
      <body className={`${uncutSans.className}`}>
        <section className="relative overflow-auto">
        <Navbar  />
          {children}
        <FooterSection />
        </section>
      </body>
    </html>
  );
}
