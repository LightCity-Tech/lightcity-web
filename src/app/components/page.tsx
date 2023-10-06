"use client";

import { Typography } from "@/src/ui";
import { TypographyComponent } from "./typography-component";
import { ButtonComponent } from "./button-component";

const Components = () => {
  return (
    <main className="p-24">
      <Typography variant="h2" customClassName="mb-10">Welcome to the Components Page</Typography>
      <TypographyComponent />
      <ButtonComponent />
      
    </main>
  );
};

export default Components;
