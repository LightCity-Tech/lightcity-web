"use client";

import React, { FC } from "react";
import clsx from "clsx";
import { useFormContext} from "react-hook-form";

interface PhoneProps {
  label: string;
  name: string;
}

const InputPhone: FC<PhoneProps> = (props) => {
  const { label, name } = props;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errMessage = errors[name]?.message;

  return (
    <div className="flex flex-col mb-5">
      <label
        className="cursor-pointer w-fit text-body-reg text-[#3C3C3C] capitalize"
        htmlFor={name}
      >
        {label}
      </label>
      <div className="flex justify-start items-center gap-4">
        <div className="grow">
          <input
            type="tel"
            placeholder="070X XXX XXXX"
            className={clsx(
              `block w-full rounded-md border-2 bg-transparent px-4 py-2 placeholder:text-[#979797] focus:outline-primary-main ${
                errMessage ? "border-red-400" : "border-[#DEDEDE]"
              }`
            )}
            {...register(name, { required: true })}
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
