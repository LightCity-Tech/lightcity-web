export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label: string;
    fieldCustomClassName?: string;
    customClassName?: string;
}