
interface Options{
    value: string;
    label: string;
}


export interface SelectProps{
    label?: string;
    placeholder?: string;
    customClassName?: string;
    options: Options[]
}