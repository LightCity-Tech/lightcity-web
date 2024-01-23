"use client";

import React, { ForwardedRef } from "react";
import clsx from "clsx";
import { FieldValues, Path, InternalFieldName, UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { InputProps } from "..";

const InputComponent = <FV extends FieldValues>(
  props: InputProps<FV>,
  ref?: ForwardedRef<HTMLInputElement>
) => {
  const { name, label, placeholder, customClassName, fieldCustomClassName, register, ...rest } = props;

  //React Hook Form
  const registerInput: UseFormRegisterReturn <Path<FV>> | object = register ? register(name, {required: rest.required}) : {};

  return (
    <div className={clsx(`flex flex-col mb-3`, fieldCustomClassName)}>
      <label className="cursor-pointer w-fit text-body-reg text-[#3C3C3C] uppercase" htmlFor={name}>
        {label}
      </label>
      <input
        className={clsx(
          `block w-full rounded-full border-2 border-[#DEDEDE] bg-transparent p-4 placeholder:text-[#979797] focus:outline-primary-main`,
          customClassName
        )}
        id={name}
        placeholder={placeholder}
        {...rest}
        {...registerInput}
      />
    </div>
  );
};

export type InputComponentType = <FV extends FieldValues, TFieldNames extends InternalFieldName>(
    props: InputProps<FV> & {
        ref?: React.ForwardedRef<HTMLInputElement> | UseFormRegisterReturn<TFieldNames>;
    }
) => ReturnType<typeof InputComponent>

const Input = React.forwardRef(InputComponent) as InputComponentType 

export { Input };
export * from "./index.types";
