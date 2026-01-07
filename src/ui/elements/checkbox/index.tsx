import { IoMdCheckmark } from "react-icons/io";
import { useFormContext } from "react-hook-form";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  name: string;
};

const Checkbox = (props: CheckboxProps) => {
  const { name, label = "", disabled = true, id, ...rest } = props;

  const { register, watch } = useFormContext();

  const checked = watch(name);

  return (
    <label
      className={`w-fit flex items-center gap-2 ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
      htmlFor={id}
    >
      <div className="flex items-center justify-center rounded">
        <input
          type="checkbox"
          id={id}
          disabled={disabled}
          {...register(name)}
          className="w-0 h-0"
          {...rest}
        />
        <div className="flex h-8 w-8 items-center justify-center rounded border-2 border-[#6F4B16]">
          {checked && (
            <IoMdCheckmark className="text-3xl text-secondary-main" />
          )}
        </div>
      </div>
      <span className="text-[#6F4B16] font-medium">{label}</span>
    </label>
  );
};

export { Checkbox };
