"use client";

import React, { FC } from "react";
import clsx from "clsx";
import { InputProps } from "..";
import { useFormContext } from "react-hook-form";

const Input: FC<InputProps> = (props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const {
    name,
    label,
    placeholder,
    customClassName,
    fieldCustomClassName,
    ...rest
  } = props;
  const errMessage = errors[name]?.message;

  return (
    <div className={clsx(`flex flex-col mb-3`, fieldCustomClassName)}>
      <label
        className="cursor-pointer w-fit text-body-reg text-[#3C3C3C] uppercase"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={clsx(
          `block w-full rounded-full border-2  bg-transparent p-4 placeholder:text-[#979797] focus:outline-primary-main ${
            errMessage ? "border-red-400" : "border-[#DEDEDE]"
          }`,
          customClassName
        )}
        placeholder={placeholder}
        {...rest}
        {...register(name, { required: true })}
        id={name}
        aria-invalid={errors[name] ? "true" : "false"}
      />
      {errMessage && typeof errMessage === "string" && (
        <div className="text-caption-reg text-red-500">{errMessage}</div>
      )}
    </div>
  );
};

export { Input };
export * from "./index.types";
