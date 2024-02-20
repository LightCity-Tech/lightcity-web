"use client";

import React, { FC } from "react";
import clsx from "clsx";
<<<<<<< HEAD
import { useFormContext } from "react-hook-form";

type FlagObj = {
  svg: string;
  png: string;
};
=======
import { useForm } from "react-hook-form";
import countriesData from "@/src/data/country-codes.json";
import styles from "./index.module.scss";
>>>>>>> fc7d269 (resolved dependency issues and page build errors)

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
<<<<<<< HEAD
  } = useFormContext();
=======
  } = useForm();
  const [countries, setCountries] = useState<CountryType[]>([]);

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  const { label, name } = props;

>>>>>>> fc7d269 (resolved dependency issues and page build errors)
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
