"use client";

import { Typography } from "@/src/ui";

const TypographyComponent = () => {
  return (
    <details className="w-full">
      <summary className="pb-5 text-3xl font-bold">
        Typography Component
      </summary>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="body-mid">Body Mid</Typography>
      <Typography variant="body-reg">Body Reg</Typography>
      <Typography variant="caption-mid">Caption Mid</Typography>
      <Typography variant="caption-reg">Caption Reg</Typography>
      <Typography variant="body-reg" color = "primary-main">Body Reg with Main Primary Color</Typography>
      <Typography variant="body-reg" color = "secondary-main">Body Reg with Main Secondary Colour</Typography>
    </details>
  );
};

export { TypographyComponent };
