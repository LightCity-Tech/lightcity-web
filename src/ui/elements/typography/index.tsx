import React from "react";
import { TypographyProps, variantMapping } from "./index.types";
import { cva } from "class-variance-authority";
import { uncutSans, kashuan } from "@/styles/font";

const typography = cva("", {
  variants: {
    intent: {
      h1: "text-h-1",
      h2: "text-h-2",
      h3: "text-h-3",
      h4: "text-h-4",
      h5: "text-h-5",
      h6: "text-h-6",
      "body-mid": "text-body-mid",
      "body-reg": "text-body-reg",
      "caption-mid": "text-caption-mid",
      "caption-reg": "text-caption-reg",
    },
    font: {
      uncutSans: uncutSans.className,
      kashuan: kashuan.className,
    },
    color: {
      white: "text-white",
      black: "text-black",
      "primary-main": "text-primary-main",
      "primary-50": "text-primary-50",
      "primary-100": "text-primary-100",
      "primary-200": "text-primary-200",
      "primary-300": "text-primary-300",
      "primary-400": "text-primary-400",
      "primary-500": "text-primary-500",
      "primary-600": "text-primary-600",
      "primary-700": "text-primary-700",
      "primary-800": "text-primary-800",
      "secondary-main": "text-secondary-main",
      "secondary-25": "text-secondary-25",
      "secondary-50": "text-secondary-50",
      "secondary-100": "text-secondary-100",
      "secondary-200": "text-secondary-200",
    },
    fontWeight: {
      thin: "font-thin",
      "extra-light": "font-extra-light",
      light: "font-light",
      regular: "font-regular",
      medium: "font-medium",
      "semi-bold": "font-semi-bold",
      bold: "font-bold",
      "extra-bold": "font-extra-bold",
      black: "font-black",
    },
    align: {
      center: "text-center",
      start: "text-start",
      end: "text-end",
      left: "text-left",
      right: "text-right",
      justify: "text-justify",
    },
  },
  compoundVariants: [],
});

const Typography: React.FC<TypographyProps> = (props) => {
  const {
    variant = "body-reg",
    color = "black",
    children,
    tag,
    font = "uncutSans",
    customClassName = "",
    align,
    fontWeight,
    ...rest
  } = props;

  //Resolved Tag
  const Tag = (tag ||
    variantMapping[variant] ||
    "p") as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={typography({
        intent: variant,
        color,
        font,
        align,
        fontWeight,
        className: `${customClassName}`,
      })}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export { Typography };
export * from "./index.types";
