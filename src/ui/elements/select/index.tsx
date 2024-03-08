"use client";

import React, { FC, useState, useRef, useEffect } from "react";
import { useFormContext, useForm } from "react-hook-form";
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

  const methods = useForm();

  const errMessage = methods.formState.errors[name]?.message;

  const optionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Select");

  //Toggle the dropdown on click
  const toggleSelect = (e: any) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  //Function to select an option
  const selectOption = (optionIndex: number) => {
    const option = options[optionIndex].value;
    setSelected(option);
    setIsActive(false);

    const selectedOptionRef = optionRefs.current[optionIndex];
    if (selectedOptionRef) {
      selectedOptionRef.classList.add(styles.selected);
    }
    methods.setValue(name, option); //assigning an option to the 'circuit' key
    methods.clearErrors(name);
  };

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
    <div className="flex flex-col mb-3">
      <label
        className="cursor-pointer w-fit text-body-reg text-[#3C3C3C] uppercase"
        htmlFor={name}
      >
        {label}
      </label>
      <div className={styles.dropdown}>
        <div
          className={styles["dropdown-btn"]}
          onClick={toggleSelect}
          id={name}
          {...methods.register(name, {
            required: {
              value: true,
              message: "Please select the circuit you belong to",
            },
          })}
        >
          {selected === "Select" ? (
            <p className="text-[#979797]">{selected}</p>
          ) : (
            <p className="text-black">{selected}</p>
          )}
        </div>
        {isActive && (
          <div className={styles["dropdown-content"]} ref={dropdownRef}>
            {options.map((option, index) => (
              <div
                className={`${styles["dropdown-item"]} ${
                  selected === option.value ? styles.selected : ""
                }`}
                key={index}
                ref={(element) => (optionRefs.current[index] = element)}
                onClick={() => selectOption(index)}
              >
                {option.value}
              </div>
            ))}
          </div>
        )}
      </div>
      {errMessage && typeof errMessage === "string" && (
        <div className="text-caption-reg text-red-500">Please select the circuit you belong to</div>
      )}
    </div>
  );
};

export { Select };
