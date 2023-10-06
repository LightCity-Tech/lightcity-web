export const variantMapping = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    "body-mid": "p",
    "body-reg": "p",
    "caption-mid": "p",
    "caption-reg": "p",
}

export type TypographyVariant = keyof typeof variantMapping;

export type TypographyColors = 'white' | 'primary-main' | 'primary-10' | 'black'; 

export type TypographyFont = "uncutSans" | "kashuan";

export type TypographyAlign = "left" | "center" | "right" | "end" | "start" | "justify";

export type TypographyFontWeight =
  | "thin"
  | "extra-light"
  | "light"
  | "regular"
  | "medium"
  | "semi-bold"
  | "bold"
  | "extra-bold"
  | "black";


export interface TypographyProps extends React.HTMLAttributes<HTMLOrSVGElement>{
    tag?: keyof JSX.IntrinsicElements;
    color?: TypographyColors;
    children?: React.ReactNode;
    variant?: TypographyVariant;
    font?: TypographyFont;
    customClassName?: string;
    align?: TypographyAlign;
    fontWeight?: TypographyFontWeight
}