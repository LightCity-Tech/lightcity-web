"use client";

import React, { FC, useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import countriesData from "@/src/data/country-codes.json";
import Image from "next/image";
import styles from "./index.module.scss";

type FlagObj = {
  svg: string;
  png: string;
};

type CountryType = {
  callingCodes: string[];
  flags: FlagObj;
  name: string;
};

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

  const [countries, setCountries] = useState<CountryType[]>([]);

  const [isActive, setIsActive] = useState<boolean>(false);
  const [selectedCode, setSelectedCode] = useState<string>("+234");
  const [selectedFlag, setSelectedFlag] = useState<string>(
    "https://flagcdn.com/ng.svg"
  );

  const dialCodeDropdownRef = useRef<HTMLDivElement>(null);

  //Toggle the dropdown on click
  const toggleSelect = (e: any) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  //Blur function to close the dropdown
  const handleBlur: any = (e: MouseEvent) => {
    if (
      dialCodeDropdownRef.current &&
      !dialCodeDropdownRef.current.contains(e.target as Node)
    ) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  //Removes the dial codes dropdown if it is active, when you click elsewhere on the page
  useEffect(() => {
    document.addEventListener("mousedown", handleBlur);
    return () => {
      document.removeEventListener("mousedown", handleBlur);
    };
  }, []);

  // const selectOption = (selectedCountry: CountryType) => {
  //   setSelectedFlag(selectedCountry.flags.svg);
  //   setSelectedCode(`+${selectedCountry.callingCodes[0]}`);
  //   setIsActive(false);
  // };

  return (
    <div className="flex flex-col mb-3">
      <label
        className="cursor-pointer w-fit text-body-reg text-[#3C3C3C] uppercase"
        htmlFor={name}
      >
        {label}
      </label>
      <div className="flex justify-start items-center gap-4">
        {/* <div className={styles.dropdown}>
          <div className={styles["dropdown-btn"]} onClick={toggleSelect}>
            <Image
              src={selectedFlag}
              alt="Selected Country's Flag"
              width={25}
              height={25}
              className="mr-1.5"
            />
            <p>{selectedCode}</p>
          </div>
          {isActive && (
            <div
              className={styles["dropdown-content"]}
              ref={dialCodeDropdownRef}
            >
              {countries.map((country, index) => (
                <div
                  className={styles["dropdown-item"]}
                  key={index}
                  onClick={() => selectOption(country)}
                >
                  <Image
                    src={country.flags.svg}
                    alt="Country's Flag"
                    width={40}
                    height={40}
                  />
                  <p>+{country.callingCodes[0]}</p>
                </div>
              ))}
            </div>
          )}
        </div> */}

        <div className="grow">
          <input
            type="tel"
            placeholder="+234 XXX XXX XXXX"
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
