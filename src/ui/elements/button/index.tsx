import React from 'react';
import { ButtonProps } from './index.types';
import { cva } from  'class-variance-authority';
import clsx from 'clsx';
import { uncutSans } from '@/styles/font';
import styles from  './index.module.scss';

const button = cva("", {
    variants: {
        variant:{ 
            primary: 'bg-primary-main border-0 px-[1.5rem] rounded-[6.25rem] hover:bg-primary-700 active:border-2 active:border-[rgba(252, 199, 117, 0.98)]',
            secondary: 'bg-secondary-25 border-0 px-[1.5rem] rounded-[6.25rem] hover:bg-secondary-50 active:border-2 active:border-secondary-50',
            tertiary: 'bg-secondary-25 border-0 px-[1.5rem] rounded hover:bg-secondary-50',
            outlined: 'bg-transparent border-2 px-[1.5rem] rounded-[6.25rem]',
            text: 'bg-transparent border-0 px-[1.5rem]',
            "no-border": "bg-transparent border-0"
        },
        color: {
            primary: 'text-secondary-main',
            secondary: 'text-secondary-25',
            yellow: 'text-primary-main',
            "pri-outlined": 'text-primary-main',
            "sec-outlined": 'text-secondary-25',
            "dark-outlined": 'text-black'
        }
    },
    compoundVariants:[
        {
            variant: "outlined",
            color: "pri-outlined",
            class: "border-primary-main text-primary-main"
        },
        {
            variant: "outlined",
            color: "sec-outlined",
            class: "border-secondary-25 text-secondary-25"
        },
        {
            variant: "outlined",
            color: "dark-outlined",
            class: "border-blackA text-blackA"
        }
    ]
})

const Button:React.FC<ButtonProps> = (props) => {
    const {
        variant,
        color = 'primary',
        label = '',
        rightIcon,
        leftIcon,
        customClassName
    } =  props;

    const className = clsx(
        'flex justify-content items-center py-[0.75rem] text-center font-medium',
        uncutSans.className,
        customClassName,
        styles['text-white']
    );
    

    return (
        <button
            type='button'
            className= {button({
                className,
                variant,
                color,
                
            })}
        >
            {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
            {label}
            {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
        </button>
    );
}
 
export {Button};
export * from './index.types';