

export enum ButtonVariants{
    primary = 'primary',
    secondary = 'secondary',
    tertiary = 'tertiary',
    outlined = 'outlined',
    text = 'text'
}

export type ButtonColors = "primary" | "secondary" | "yellow" | "pri-outlined" | "sec-outlined" ;




export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant: keyof typeof ButtonVariants;
    label: string;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    customClassName?: string;
    color: ButtonColors;
}