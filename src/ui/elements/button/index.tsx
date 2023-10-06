import React from 'react';
import { ButtonProps } from './index.types';
import {cva} from  'class-variance-authority';
import clsx from 'clsx';
import { uncutSans } from '@/styles/font';
import styles from  './index.module.scss';

const button = cva("", {
    variants: {
        variant:{ 
            primary: 'bg-primary-main border-0 rounded-[6.25rem] hover:bg-primary-700 active:border-2 active:border-[rgba(252, 199, 117, 0.98)]',
            secondary: 'bg-secondary-25 border-0 rounded-[6.25rem] hover:bg-secondary-50 active:border-2 active:border-secondary-50',
            tertiary: 'bg-secondary-25 border-0 rounded hover:bg-secondary-50',
            outlined: 'bg-transparent border-2  border-secondary-body rounded-[6.25rem]'
        },
        color: {
            primary: 'text-secondary-body',
            secondary: 'text-secondary-body'
            
        }
    },
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
        'flex justify-content items-center px-[1rem] py-[0.75rem] text-center font-medium',
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