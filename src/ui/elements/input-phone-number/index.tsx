"use client";

import React from "react";

interface InputPhoneNumberProps{
    label: string
}

const InputPhoneNumber: React.FC<InputPhoneNumberProps> = ({
    label
}) => {

    return(
        <div className="flex flex-col mb-3">
            <label className="cursor-pointer w-fit text-body-reg text-[#3C3C3C] uppercase" htmlFor="">{label}</label>

        
        </div>
    )

}

export {InputPhoneNumber}