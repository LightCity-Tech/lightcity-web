"use client";

import React, { useState, useEffect, FC } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./index.module.scss";

interface Options {
  value: string;
  label: string;
}

interface DropdownProps {
  label: string;
  options: Options[];
  name: string;
}

const InputDropdown: FC<DropdownProps> = (props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { label, options, name } = props;

  const errMessage = errors[name]?.message;

  return (
    <div className="flex flex-col mb-3">
      <label
        htmlFor={name}
        className="cursor-pointer w-fit text-body-reg text-[#3C3C3C] uppercase"
      >
        {label}
      </label>
      <div className={styles.customSelect}>
        <select id={name} {...register(name)}>
          <option selected disabled style={{ color: "#979797" }}>
            Select
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {errMessage && typeof errMessage === "string" && (
        <div className="text-caption-reg text-red-500">{errMessage}</div>
      )}
    </div>
  );
};

export { InputDropdown };
