

export enum ButtonVariants{
    primary = 'primary',
    secondary = 'secondary',
    tertiary = 'tertiary',
    outlined = 'outlined',
    text = 'text',
    "no-border" = 'no-border'
}

export type ButtonColors = "primary" | "secondary" | "yellow" | "pri-outlined" | "sec-outlined" | "dark-outlined" ;




export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant: keyof typeof ButtonVariants;
    label: string | undefined;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    customClassName?: string;
    color: ButtonColors;
    buttonType?: "button" | "submit" | "reset" | undefined
}