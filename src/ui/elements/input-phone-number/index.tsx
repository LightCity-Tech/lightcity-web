"use client";

import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import styles from "./index.module.scss";

interface InputPhoneNumberProps {
  label: string;
}

const InputPhoneNumber: React.FC<InputPhoneNumberProps> = ({ label }) => {
  const [value, setValue] = useState<any>();

  return (
    <div className="flex flex-col mb-3">
      <label
        className="cursor-pointer w-fit text-body-reg text-[#3C3C3C] uppercase"
        htmlFor=""
      >
        {label}
      </label>
      <PhoneInput
        className={styles.numberInput}
        international
        defaultCountry="NG"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export { InputPhoneNumber };
