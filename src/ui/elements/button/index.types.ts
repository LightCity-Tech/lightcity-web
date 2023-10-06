

export enum ButtonVariants{
    primary = 'primary',
    secondary = 'secondary',
    tertiary = 'tertiary',
    outlined = 'outlined'
}

export type ButtonColors = "primary" | "secondary" ;




export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant: keyof typeof ButtonVariants;
    label: string;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;left
    customClassName?: string;
    color: ButtonColors;
}