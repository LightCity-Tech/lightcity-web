"use client";

import React, { FC, useState, useRef, useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import styles from "./index.module.scss";

interface Options {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  options: Options[];
  name: string;
}

const Select: FC<SelectProps> = (props) => {
  const { label, options, name } = props;

  const {
    register,
    setValue,
    clearErrors,
    formState: { errors },
    control
  } = useFormContext();

  const errMessage = errors[name]?.message;

  const optionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  // const [selected, setSelected] = useState<Options | null>(null);

    const selectedValue = useWatch({
    name,
    control,
  });

  const selectedLabel =
    options.find((opt) => opt.value === selectedValue)?.label || "Select";

  //Toggle the dropdown on click
  const toggleSelect = (e: any) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  //Function to select an option
  const selectOption = (optionIndex: number) => {
    const selectedOption = options[optionIndex];
    // setSelected(selectedOption); // store full option object
    setIsActive(false);

    setValue(name, selectedOption.value); // form value = actual value
    clearErrors(name);
  };

  const formValues = useWatch();

//   useEffect(() => {
//   if (!formValues[name]) {
//     setSelected("Select");
//   }
// }, [formValues[name]]);

  //Blur function to close the dropdown
  const handleBlur: any = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsActive(false);
    }
  };

  //Removes the circuit dropdown if it is active, when you click elsewhere on the page
  useEffect(() => {
    document.addEventListener("mousedown", handleBlur);
    return () => {
      document.removeEventListener("mousedown", handleBlur);
    };
  }, []);

  return (
    <div className="flex flex-col mb-5">
      <label
        className="cursor-pointer w-fit text-body-reg text-[#3C3C3C] capitalize"
        htmlFor={name}
      >
        {label}
      </label>
      <div
        className={`cursor-pointer rounded-md border-2 ${styles.dropdown} ${
          errMessage ? " border-red-400" : "border-[#DEDEDE]"
        } ${isActive ? "border-primary-main" : "border-[#DEDEDE]"}`}
      >
        <div
          className={styles["dropdown-btn"]}
          onClick={toggleSelect}
          id={name}
          {...register(name, {
            // required: {
            //   value: true,
            //   message: "",
            // },
          })}
        >
          <p className={selectedValue ? "text-black" : "text-[#979797]"}>
            {selectedLabel}
          </p>
        </div>
        {isActive && (
          <div className={styles["dropdown-content"]} ref={dropdownRef}>
            {options.map((option, index) => (
              <div
                className={`${styles["dropdown-item"]} ${
                  selectedValue === option.value ? styles.selected : ""
                }`}
                key={index}
                ref={(element) => {
                  optionRefs.current[index] = element;
                }}
                onClick={() => selectOption(index)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      {errMessage && typeof errMessage === "string" && (
        <div className="text-caption-reg text-red-500">
          {/* Please select the circuit you belong to */}
        </div>
      )}
    </div>
  );
};

export { Select };
