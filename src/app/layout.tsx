import type { Metadata } from "next";
import { uncutSans, kaushan } from "@/styles/font";
import "@/styles/globals.css";
import Navbar from "./components/navigation/navbar-component";
import FooterSection from "./components/footer-section";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "LightCity Church",
  description: "...giving your life eternal value",
  icons: {
    icon: [
      {
        url: "/favicon/favicon.png",
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
    <html lang="en" className={`${uncutSans.variable} ${kaushan.variable}`}>
      <body>
        <section className="relative overflow-auto">
          <Navbar />
          {children}
          <FooterSection />
        </section>
        <Toaster richColors={true} position="top-right" expand={true} />
        <SpeedInsights />
      </body>
    </html>
  );
}
