"use client";

import React, { FC, useState, useRef, useEffect } from "react";
import { useFormContext } from "react-hook-form";
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
    formState: { errors },
  } = useFormContext();

  const errMessage = errors[name]?.message;

  const optionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Select");

  const toggleSelect = (e: any) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  const selectOption = (optionIndex: number) => {
    const option = options[optionIndex].value;
    setSelected(option);
    setIsActive(false);

    const selectedOptionRef = optionRefs.current[optionIndex];
    if (selectedOptionRef) {
      selectedOptionRef.classList.add(styles.selected);
    }
  };

  const handleClickOutside: any = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
          {...register(name)}
        >
          {selected}
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
        <div className="text-caption-reg text-red-500">{errMessage}</div>
      )}
    </div>
  );
};

export { Select };
