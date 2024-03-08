"use client";

import React, { FC } from "react";
import clsx from "clsx";
import { useFormContext, useForm } from "react-hook-form";

interface PhoneProps {
  label: string;
  name: string;
}

const InputPhone: FC<PhoneProps> = (props) => {
  const { label, name } = props;

  // const methods = useForm();

  const {register, formState: {errors}} = useFormContext();

  const errMessage = errors[name]?.message;

  return (
    <div className="flex flex-col mb-3">
      <label
        className="cursor-pointer w-fit text-body-reg text-[#3C3C3C] uppercase"
        htmlFor={name}
      >
        {label}
      </label>
      <div className="flex justify-start items-center gap-4">
        <div className="grow">
          <input
            type="tel"
            placeholder="+234 XXX XXX XXXX"
            className={clsx(
              `block w-full rounded-full border-2 bg-transparent p-4 placeholder:text-[#979797] focus:outline-primary-main ${errMessage ? "border-red-400" : "border-[#DEDEDE]"}`
            )}
            {...register(name, {required: true})}
            id={name}
          />
        </div>
      </div>
      {errMessage && typeof errMessage === "string" && (
        <div className="text-caption-reg text-red-500">{errMessage}</div>
      )}
    </div>
  );
};

export { InputPhone };
