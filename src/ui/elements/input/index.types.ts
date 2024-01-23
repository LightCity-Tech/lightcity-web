
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';


export interface InputProps<IFormValues extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement>{
    name: Path<IFormValues>;
    label: string;
    fieldCustomClassName?: string;
    customClassName?: string;
    required?: boolean;
    register?: UseFormRegister<IFormValues>
}