"use client";

import { Button } from "@/src/ui";
import BrownPlayIcon from "@/public/assets/svgs/brown-play-icon.svg";
import YellowPlayIcon from "@/public/assets/svgs/yellow-play-icon.svg";

const ButtonComponent = () => {
  return (
    <details className="w-full">
      <summary className="pb-5 text-3xl font-bold">Button Component</summary>
      <Button
        variant="primary"
        color="primary"
        label="Primary Button without Icon"
        customClassName="mb-2"
      />
      <Button
        variant="primary"
        color="primary"
        label="Primary Button with Icon"
        leftIcon={<BrownPlayIcon />}
        customClassName="mb-2"
      />

      <Button
        variant="secondary"
        color="primary"
        label="Secondary Button without Icon"
        customClassName="mb-2"
      />
      <Button
        variant="secondary"
        color="primary"
        label="Secondary Button with Icon"
        leftIcon={<BrownPlayIcon />}
        customClassName="mb-2"
      />
      <Button
        variant="outlined"
        color="pri-outlined"
        label="Outlined Button with Icon"
        leftIcon={<YellowPlayIcon />}
        customClassName="mb-2"
      />
      <Button
        variant="outlined"
        color="sec-outlined"
        label="Outlined Button without Icon"
        customClassName="mb-2"
      />
      <Button
        variant="tertiary"
        color="primary"
        label="Tertiary Button"
        customClassName="mb-2"
      />
    </details>
  );
};

export { ButtonComponent };
