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
  placeholder?: string;
}

const Select: FC<SelectProps> = ({
  label,
  options,
  name,
  placeholder = "Select",
}) => {
  const {
    setValue,
    clearErrors,
    formState: { errors },
    control,
    register,
  } = useFormContext();

  const errMessage = errors[name]?.message as string | undefined;

  const optionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isActive, setIsActive] = useState(false);

  const value = useWatch({ control, name });

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || placeholder;

  // Set up focus-outside logic
  useEffect(() => {
    const handleBlur = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleBlur);
    return () => document.removeEventListener("mousedown", handleBlur);
  }, []);

  const toggleSelect = (e: React.MouseEvent) => {
    e.preventDefault();
    document.activeElement instanceof HTMLElement &&
      document.activeElement.blur(); // fix iOS
    setIsActive(!isActive);
  };

  const selectOption = (optionIndex: number) => {
    const option = options[optionIndex];
    setValue(name, option.value, { shouldValidate: true, shouldDirty: true });
    clearErrors(name);
    setIsActive(false);

    const selectedOptionRef = optionRefs.current[optionIndex];
    if (selectedOptionRef) {
      selectedOptionRef.classList.add(styles.selected);
    }

    // ✅ Tell react-hook-form about the change
    setValue(name, option.value, { shouldValidate: true });
    clearErrors(name);
  };

  return (
    <div className="flex flex-col mb-5">
      <label
        htmlFor={name}
        className="cursor-pointer text-body-reg text-[#3C3C3C] capitalize"
      >
        {label}
      </label>

      <div
        ref={dropdownRef}
        className={`cursor-pointer rounded-md border-2 ${styles.dropdown} ${
          errMessage
            ? "border-red-400"
            : isActive
            ? "border-primary-main"
            : "border-[#DEDEDE]"
        }`}
      >
        <div
          className={styles["dropdown-btn"]}
          onClick={toggleSelect}
          id={name}
          {...register(name)} // still register for validation and RHF reset
        >
          <p
            className={
              selectedLabel === placeholder ? "text-[#979797]" : "text-black"
            }
          >
            {selectedLabel}
          </p>
        </div>

        {isActive && (
          <div className={styles["dropdown-content"]}>
            {options.map((option, index) => (
              <div
                key={index}
                ref={(el) => {
                  optionRefs.current[index] = el;
                }}
                className={`${styles["dropdown-item"]} ${
                  value === option.value ? styles.selected : ""
                }`}
                onClick={() => selectOption(index)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {errMessage && (
        <div className="text-caption-reg text-red-500">{errMessage}</div>
      )}
    </div>
  );
};

export { Select };
