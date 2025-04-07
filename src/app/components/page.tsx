"use client";

import Link from "next/link";

import { Typography } from "@/src/ui";
import { TypographyComponent } from "./typography-component";
import { ButtonComponent } from "./button-component";
import MeetingCardComponent from "./meeting-card-component";
import SeriesDropdownComponent from "./series-dropdown";

const Components = () => {
  return (
    <main className="p-24">
      <Link href="/" className="mb-6 inline-block underline hover:text-blue-700">
        Go back
      </Link>
      <Typography variant="h2" customClassName="mb-10">
        Welcome to the Components Page
      </Typography>
      <TypographyComponent />
      <ButtonComponent />
      <MeetingCardComponent/>
      <SeriesDropdownComponent/>
    </main>
  );
};

export default Components;
