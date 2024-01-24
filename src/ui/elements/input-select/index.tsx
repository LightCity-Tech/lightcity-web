"use client";

import React from 'react';
import Select from 'react-select';
import { SelectProps } from './index.types';


const InputSelect: React.FC<SelectProps> = (props) => {
    const {
        label,
        placeholder,
        options,
        customClassName
    } = props;

    const customStyles = {
        option: (defaultStyles: any, state: any) => ({
            ...defaultStyles,
            backgroundColor: state.isSelected ? "#32220A" : "#FFFEE8",
            "&:hover": {
                backgroundColor: "#FAAB30"
            }

        }),
        control: (defaultStyles: any) => ({
            ...defaultStyles,
            backgroundColor: "transparent",
            border: "2px solid #DEDEDE",
            borderRadius: "5rem",
            padding: ".75rem",
            "&:focus":{
                border: "2px solid #FAAB30"
            }
        })
    }

    return(
        <div className='mb-3'>
            <label className='cursor-pointer w-fit text-body-reg text-[#3C3C3C] uppercase'
             htmlFor=''>{label}</label>
            <Select options={options} styles={customStyles}/>
        </div>
    )
}

export {InputSelect};