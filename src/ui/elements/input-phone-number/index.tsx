"use client";

import React, { useEffect, useState } from "react";
import PhoneInput, { isValidPhoneNumber, isPossiblePhoneNumber } from "react-phone-number-input";
import { useForm, Controller } from "react-hook-form";
import "react-phone-number-input/style.css";
import styles from "./index.module.scss";

interface InputPhoneNumberProps {
  label: string;
  name: string;
}

const InputPhoneNumber: React.FC<InputPhoneNumberProps> = ({ label, name }) => {
  const {
    control,
    formState: { errors },
  } = useForm();
  const errMessage = errors[name]?.message;

  return (
    <div className="flex flex-col mb-3">
      <label
        className="cursor-pointer w-fit text-body-reg text-[#3C3C3C] uppercase"
        htmlFor=""
      >
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        rules={{
          validate: (value) => isPossiblePhoneNumber(`${value}`)
        }}
        render={({ field: { onChange, value } }) => (
          <PhoneInput
            className={styles.numberInput}
            international
            defaultCountry="NG"
            value={value}
            onChange={onChange}
          />
        )}
      />
      {errMessage && typeof errMessage === "string" && (
        <div className="text-caption-reg text-red-500">{errMessage}</div>
      )}
    </div>
  );
};

export { InputPhoneNumber };
