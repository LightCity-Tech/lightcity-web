"use client";

import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import Select from "react-select";
import { SelectProps } from "./index.types";

const InputSelect: React.FC<SelectProps> = (props) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();
  const { label, options, customClassName, name } = props;
  const errMessage = errors[name]?.message;
  

  const customStyles = {
    option: (defaultStyles: any, state: any) => ({
      ...defaultStyles,
      backgroundColor: state.isSelected ? "#32220A" : "#FFFEE8",
      "&:hover": {
        backgroundColor: "#FAAB30",
      },
    }),
    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: "transparent",
      border: "2px solid #DEDEDE",
      borderRadius: "5rem",
      padding: ".75rem",
      "&:focus": {
        border: "2px solid #FAAB30",
      },
    }),
  };

  return (
    <div className="mb-3">
      <label
        className="cursor-pointer w-fit text-body-reg text-[#3C3C3C] uppercase"
        htmlFor="circuit"
      >
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <Select
              {...field}
              options={options}
              styles={customStyles}
              isClearable
              {...register(name)}
            />
          );
        }}
      />
      {errMessage && typeof errMessage === "string" && (
        <div className="text-caption-reg text-red-500">{errMessage}</div>
      )}
    </div>
  );
};

export { InputSelect };
