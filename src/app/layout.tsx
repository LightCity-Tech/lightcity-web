// "use client";

import type { Metadata } from "next";
import { uncutSans } from "@/styles/font";
import "@/styles/globals.css";
import Navbar from "./components/navigation/navbar-component";
import FooterSection from "./components/footer-section";
import Head from "./head";
import { Toaster } from 'sonner'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

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
  // const [queryClient] = useState(() => new QueryClient());
  return (
    // <QueryClientProvider client={queryClient}>
    <html lang="en">
      <Head />
      <body className={`${uncutSans.className}`}>
        <section className="relative overflow-auto">
          <Navbar />
          {children}
          <FooterSection />
        </section>
        <Toaster richColors={true} position="top-center" expand={true} />
      </body>
    </html>
    // </QueryClientProvider>
  );
}
