import classNames from "classnames";
import { Controller, useFormContext } from "react-hook-form";
import { FormInput, FormInputProps, FormInputSize } from "../FormInput";
import { Divider } from "@components/Divider";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

export type FormNumberInputProps = {
  onClickUp?: () => void;
  onClickDown?: () => void;
} & FormInputProps;

const formNumberInputRightButtonBaseStyle =
  "w-full hover:bg-gray-100 dark:hover:bg-gray-600 active:bg-gray-200 dark:active:bg-gray-500 duration-200 flex justify-center items-center text-gray-800 dark:text-gray-400";
const formNumberInputRightTopButtonSizeMap: Record<FormInputSize, string> = {
  xs: "text-16 h-[calc(50%-0.5px)] rounded-tr-3",
  sm: "text-18 h-[calc(50%)] rounded-tr-[5px]",
  md: "text-20 h-[calc(50%-1px)] rounded-tr-[5px]",
  lg: "text-22 h-[calc(50%-0.5px)] rounded-tr-6",
};
const formNumberInputRightDownButtonSizeMap: Record<FormInputSize, string> = {
  xs: "text-16 h-[calc(50%-0.5px)] rounded-br-3",
  sm: "text-18 h-[calc(50%)] rounded-br-[5px]",
  md: "text-20 h-[calc(50%-1px)] rounded-br-[5px]",
  lg: "text-22 h-[calc(50%-0.5px)] rounded-br-6",
};

export const FormNumberInput = ({
  size = "md",
  onClickUp,
  onClickDown,
  ...props
}: FormNumberInputProps) => {
  return (
    <FormInput
      {...props}
      size={size}
      onClear={undefined}
      type="number"
      rightIcon={
        <div
          className={classNames(
            "flex h-full w-full flex-col items-stretch justify-center border-l-1 border-gray-200 dark:border-gray-800"
          )}
        >
          <button
            className={classNames(
              formNumberInputRightButtonBaseStyle,
              formNumberInputRightTopButtonSizeMap[size]
            )}
            onClick={onClickUp}
          >
            <KeyboardArrowUp sx={{ fontSize: "100%" }} />
          </button>
          <Divider />
          <button
            className={classNames(
              formNumberInputRightButtonBaseStyle,
              formNumberInputRightDownButtonSizeMap[size]
            )}
            onClick={onClickDown}
          >
            <KeyboardArrowDown sx={{ fontSize: "100%" }} />
          </button>
        </div>
      }
    />
  );
};

export type ControlledFormNumberInputProps = {
  name: string;
  min?: number;
  max?: number;
  step?: number;
  option?: FormNumberInputProps;
};

export const ControlledFormNumberInput = ({
  name,
  min,
  max,
  step = 1,
  option,
}: ControlledFormNumberInputProps) => {
  const { control, setValue, trigger } = useFormContext();
  const handleClickUp =
    (value = 0) =>
    () => {
      const steppedValue = value + step;
      if (!max || steppedValue <= max) {
        setValue(name, steppedValue, { shouldDirty: true });
        trigger(name);
      }
    };

  const handleClickDown =
    (value = 0) =>
    () => {
      const steppedValue = value - step;
      if (!min || steppedValue >= min) {
        setValue(name, steppedValue, { shouldDirty: true });
        trigger(name);
      }
    };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, ...field } }) => {
        return (
          <FormNumberInput
            {...option}
            {...field}
            value={value || 0}
            onClear={undefined}
            onClickUp={handleClickUp(value)}
            onClickDown={handleClickDown(value)}
          />
        );
      }}
    />
  );
};
