"use client";

import React, { useState, useEffect, FC } from "react";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import countriesData from "@/src/data/country-codes.json";
import styles from "./index.module.scss";

type CountryType = {
  callingCodes: string[];
  flags: any;
};

interface PhoneProps {
  label: string;
  name: string;
}

const InputPhone: FC<PhoneProps> = (props) => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const [countries, setCountries] = useState<CountryType[]>([]);

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  const { label, name } = props;

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
        <div className={styles.customSelect}>
          <select
            className="cursor-pointer w-full"
            {...register("dialCode", { required: true })}
          >
            {countries.map((country, index) => {
              return (
                <option
                  key={index}
                  style={{ backgroundImage: `url(${country.flags.svg})` }}
                  value={`+${country.callingCodes[0]}`}
                  selected={true ? country.callingCodes[0] === "234" : false}
                >
                  +{country.callingCodes[0]}
                </option>
              );
            })}
          </select>
        </div>
        <div className="grow">
          <input
            type="number"
            className={clsx(
              `block w-full rounded-full border-2 border-[#DEDEDE] bg-transparent p-4 placeholder:text-[#979797] focus:outline-primary-main`
            )}
            {...register(name)}
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
