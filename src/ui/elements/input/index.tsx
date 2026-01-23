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
    testimony = false,
    ...rest
  } = props;
  const errMessage = errors[name]?.message;

  const testimonyLabel = testimony
    ? "text-[#6F4B16] font-medium text-xl mb-1"
    : "text-[#3C3C3C]";

  const testimonyPlaceholder = testimony
    ? "text-[#6F4B16] text-lg font-medium placeholder:text-[#C5A069]"
    : "placeholder:text-[#979797]";

  const testimonyOutline = testimony
    ? "focus:outline-[#C5A069]"
    : "focus:outline-primary-main";

  const borderClass = errMessage
    ? "border-red-400"
    : testimony
    ? "border-[#6F4B16]"
    : "border-[#DEDEDE]";

  return (
    <div className={clsx("flex flex-col mb-5", fieldCustomClassName)}>
      <label
        className={clsx("cursor-pointer w-fit text-body-reg", testimonyLabel)}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={clsx(
          `block w-full rounded-md border-2 bg-transparent px-4 py-2 `,
          testimonyOutline,
          borderClass,
          testimonyPlaceholder,
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
