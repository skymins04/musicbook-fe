import { Close } from "@mui/icons-material";
import classNames from "classnames";
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

export type FormInputSize = "xs" | "sm" | "md" | "lg";
export type FormInputProps = {
  size?: FormInputSize;
  leftIcon?: ReactNode;
  hoveredLeftIcon?: ReactNode;
  leftIconClassName?: string;
  rightIcon?: ReactNode;
  hoveredRightIcon?: ReactNode;
  rightIconClassName?: string;
  inputClassName?: string;
  onClear?: () => void;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
>;

const inputBaseStyle =
  "box-border bg-white dark:bg-gray-700 text-gray-700 dark:text-white font-normal placeholder-gray-300 dark:placeholder-gray-500 outline outline-gray-200 dark:outline-gray-800 duration-200 focus:outline-teal-500 dark:focus:outline-teal-200";
const inputSizeMap: Record<FormInputSize, string> = {
  xs: "rounded-3 px-8 py-4 text-12 outline-1",
  sm: "rounded-5 px-12 py-8 text-14 outline-2",
  md: "rounded-5 px-16 py-10 text-16 outline-2",
  lg: "rounded-6 px-16 py-14 text-18 outline-2",
};

const inputLeftIconPaddingSizeMap: Record<FormInputSize, string> = {
  xs: "pl-[22px]",
  sm: "pl-32",
  md: "pl-[40px]",
  lg: "pl-[50px]",
};

const inputRightIconPaddingSizeMap: Record<FormInputSize, string> = {
  xs: "pr-[22px]",
  sm: "pr-32",
  md: "pr-[40px]",
  lg: "pr-[50px]",
};

const inputClearButtonBaseStyle =
  "rounded-full bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600 absolute top-[50%] -translate-y-[50%] flex justify-center items-center";
const inputIconBaseStyle =
  "flex absolute top-[50%] -translate-y-[50%] flex justify-center items-center flex group-hover:hidden";
const inputHoveredIconBaseStyle =
  "flex absolute top-[50%] -translate-y-[50%] flex justify-center items-center hidden group-hover:flex";

const inputRightIconSizeMap: Record<FormInputSize, string> = {
  xs: "w-[22px] h-[22px] text-[22px] right-0",
  sm: "w-32 h-32 text-32 right-0",
  md: "w-[40px] h-[40px] text-[40px] right-0",
  lg: "w-[50px] h-[50px] text-[50px] right-0",
};
const inputLeftIconSizeMap: Record<FormInputSize, string> = {
  xs: "w-[22px] h-[22px] text-[22px] left-0",
  sm: "w-32 h-32 text-32 left-0",
  md: "w-[40px] h-[40px] text-[40px] left-0",
  lg: "w-[50px] h-[50px] text-[50px] left-0",
};

export const FormInput = ({
  className,
  inputClassName,
  size = "md",
  leftIcon,
  hoveredLeftIcon,
  leftIconClassName,
  rightIcon,
  hoveredRightIcon,
  rightIconClassName,
  onClear,
  ...props
}: FormInputProps) => {
  const isShowLeftIconArea = !!(leftIcon || hoveredLeftIcon);
  const isShowRightIconArea = !!(rightIcon || hoveredRightIcon || onClear);
  const isShowRightIcon = !!(rightIcon || hoveredRightIcon) && !onClear;

  return (
    <div className={classNames("group relative h-max w-max", className)}>
      <input
        {...props}
        autoComplete={props.autoComplete || "off"}
        className={classNames(
          inputBaseStyle,
          inputSizeMap[size],
          isShowLeftIconArea && inputLeftIconPaddingSizeMap[size],
          isShowRightIconArea && inputRightIconPaddingSizeMap[size],
          inputClassName
        )}
      />
      {onClear && (
        <button
          className={classNames(
            "!flex",
            inputIconBaseStyle,
            inputRightIconSizeMap[size]
          )}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClear();
          }}
        >
          <Close
            className={classNames(inputClearButtonBaseStyle)}
            sx={{ fontSize: "16px" }}
          />
        </button>
      )}
      {isShowLeftIconArea && (
        <>
          <div
            className={classNames(
              inputIconBaseStyle,
              inputLeftIconSizeMap[size],
              leftIconClassName
            )}
          >
            {leftIcon}
          </div>
          <div
            className={classNames(
              inputHoveredIconBaseStyle,
              inputLeftIconSizeMap[size],
              leftIconClassName
            )}
          >
            {hoveredLeftIcon || leftIcon}
          </div>
        </>
      )}
      {isShowRightIcon && (
        <>
          <div
            className={classNames(
              inputIconBaseStyle,
              inputRightIconSizeMap[size],
              rightIconClassName
            )}
          >
            {rightIcon}
          </div>
          <div
            className={classNames(
              inputHoveredIconBaseStyle,
              inputRightIconSizeMap[size],
              rightIconClassName
            )}
          >
            {hoveredRightIcon || rightIcon}
          </div>
        </>
      )}
    </div>
  );
};

export type ControlledFormInputProps = {
  name: string;
  option?: FormInputProps;
};

export const ControlledFormInput = ({
  name,
  option,
}: ControlledFormInputProps) => {
  const { control, setValue, trigger } = useFormContext();

  const handleClear = () => {
    setValue(name, "", { shouldDirty: true });
    trigger(name);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormInput
            {...option}
            {...field}
            onClear={field.value ? handleClear : undefined}
          />
        );
      }}
    />
  );
};
