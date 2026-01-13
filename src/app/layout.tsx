import type { Metadata } from "next";
import { uncutSans, kashuan } from "@/styles/font";
import "@/styles/globals.css";
import Navbar from "./components/navigation/navbar-component";
import FooterSection from "./components/footer-section";
import Head from "./head";
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: "LightCity Church",
  description: "...giving your life eternal value",
  icons: {
    icon: [
      {
        url: "../../public/favicon/favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${uncutSans.className} ${kashuan.variable}`}>
      <Head />
      <body>
        <section className="relative overflow-auto">
          <Navbar />
          {children}
          <FooterSection />
        </section>
        <Toaster richColors={true} position="top-right" expand={true} />
      </body>
    </html>
  );
}
