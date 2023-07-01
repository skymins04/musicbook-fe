import classNames from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonColor =
  | "primary"
  | "secondary"
  | "twitch"
  | "youtube"
  | "danger";
export type ButtonVariant = "solid" | "ghost" | "outlined" | "text";
export type ButtonSize = "xs" | "sm" | "md" | "lg";

export type ButtonProps = {
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  iconClassName?: string;
  isLoading?: boolean;
  isAllowInteract?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonBaseStyle =
  "flex justify-center items-center gap-8 rounded-6 duration-200 font-normal";

const buttonBaseInteractStyle =
  "disabled:cursor-not-allowed disabled:opacity-40";

const buttonSizeStyleMap: Record<ButtonSize, string> = {
  xs: "px-8 h-24 text-12",
  sm: "px-12 h-32 text-14",
  md: "px-16 h-[40px] text-16",
  lg: "px-24 h-48 text-18",
};

const buttonIconBaseStyle = "relative flex justify-center items-center";
const buttonIconSizeStyleMap: Record<ButtonSize, string> = {
  xs: "w-[18px] h-[18px] min-w-[18px] text-[18px]",
  sm: "w-20 h-20 min-w-20 text-20",
  md: "w-[22px] h-[22px] min-w-[22px] text-[22px]",
  lg: "w-[28px] h-[28px] min-w-[28px] text-[28px]",
};

const buttonColorVariantStyleMap: Record<
  ButtonColor,
  Record<ButtonVariant, string>
> = {
  primary: {
    solid: "bg-teal-500 text-white dark:bg-teal-200 dark:text-gray-800",
    ghost: "text-teal-400 dark:text-teal-200",
    outlined:
      "border-1 border-teal-400 text-teal-400 dark:border-teal-200 dark:text-teal-200",
    text: "text-teal-400 dark:text-teal-200",
  },
  secondary: {
    solid: "bg-gray-200 text-gray-800",
    ghost: "text-gray-800 dark:text-white",
    outlined: "border-1 border-gray-300 text-gray-800 dark:text-white",
    text: "text-gray-800 dark:text-white",
  },
  twitch: {
    solid: "bg-purple-500 text-white dark:bg-purple-200 dark:text-gray-800",
    ghost: "text-purple-400 dark:text-purple-200",
    outlined:
      "border-1 border-purple-400 text-purple-400 dark:border-purple-200 dark:text-purple-200",
    text: "text-purple-400 dark:text-purple-200",
  },
  youtube: {
    solid: "bg-red-500 text-white dark:bg-red-200 dark:text-gray-800",
    ghost: "text-red-400 dark:text-red-200",
    outlined:
      "border-1 border-red-400 text-red-400 dark:border-red-200 dark:text-red-200",
    text: "text-red-400 dark:text-red-200",
  },
  danger: {
    solid: "bg-pink-400 text-white dark:bg-pink-200 dark:text-gray-800",
    ghost: "text-pink-400 dark:text-pink-200",
    outlined:
      "border-1 border-pink-400 text-pink-400 dark:border-pink-300 dark:text-pink-300",
    text: "text-pink-400 dark:text-pink-200",
  },
};

const buttonColorVariantHoverActiveStyleMap: Record<
  ButtonColor,
  Record<ButtonVariant, string>
> = {
  primary: {
    solid:
      "hover:bg-teal-600 active:bg-teal-700 disabled:!bg-teal-500 dark:hover:bg-teal-300 dark:active:bg-teal-400 dark:disabled:!bg-teal-200",
    ghost:
      "hover:bg-blackAlpha-200 active:bg-teal-700/20 disabled:!bg-transparentdark:hover:bg-whiteAlpha-200 dark:active:bg-teal-200/20",
    outlined:
      "hover:bg-teal-400/10 active:bg-teal-400/20 disabled:!bg-transparent dark:hover:bg-teal-200/10 dark:active:bg-teal-200/20",
    text: "",
  },
  secondary: {
    solid: "hover:bg-gray-300 active:bg-gray-400 disabled:!bg-gray-200",
    ghost:
      "hover:bg-blackAlpha-200 active:bg-gray-400/20 disabled:!bg-transparent dark:hover:bg-whiteAlpha-200",
    outlined:
      "hover:bg-blackAlpha-200 active:bg-gray-400/20 dark:active:bg-gray-400/20 disabled:!bg-transparent dark:hover:bg-whiteAlpha-200",
    text: "",
  },
  twitch: {
    solid:
      "hover:bg-purple-600 active:bg-purple-700 disabled:!bg-purple-500 dark:hover:bg-purple-300 dark:active:bg-purple-400 dark:disabled:!bg-purple-200",
    ghost:
      "hover:bg-blackAlpha-200 active:bg-purple-700/20 disabled:!bg-transparent dark:hover:bg-whipurplepha-200 dark:active:bg-purple-200/20",
    outlined:
      "hover:bg-purple-400/10 active:bg-purple-400/20 disabled:!bg-transparent dark:hover:bg-purple-200/10 dark:active:bg-purple-200/20",
    text: "",
  },
  youtube: {
    solid:
      "hover:bg-red-600 active:bg-red-700 disabled:!bg-red-500 dark:hover:bg-red-300 dark:active:bg-red-400 dark:disabled:!bg-red-200",
    ghost:
      "hover:bg-blackAlpha-200 active:bg-red-700/20 disabled:!bg-transparent dark:hover:bg-whiredpha-200 dark:active:bg-red-200/20",
    outlined:
      "hover:bg-red-400/10 active:bg-red-400/20 disabled:!bg-transparent dark:hover:bg-red-200/10 dark:active:bg-red-200/20",
    text: "",
  },
  danger: {
    solid:
      "hover:bg-pink-500 active:bg-pink-600 disabled:!bg-pink-400 dark:hover:bg-pink-300 dark:active:bg-pink-400 dark:disabled:!bg-pink-200",
    ghost:
      "hover:bg-blackAlpha-200 active:bg-pink-700/20 disabled:!bg-transparent dark:hover:bg-whipinkpha-200 dark:active:bg-pink-200/20",
    outlined:
      "hover:bg-pink-400/10 active:bg-pink-400/20 disabled:!bg-transparent dark:hover:bg-pink-200/10 dark:active:bg-pink-200/20",
    text: "",
  },
};

export const Button = ({
  color = "primary",
  variant = "solid",
  size = "lg",
  leftIcon,
  rightIcon,
  className,
  iconClassName,
  children,
  isLoading,
  isAllowInteract = true,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={classNames(
        buttonBaseStyle,
        isAllowInteract && buttonBaseInteractStyle,
        buttonSizeStyleMap[size],
        buttonColorVariantStyleMap[color][variant],
        isAllowInteract &&
          buttonColorVariantHoverActiveStyleMap[color][variant],
        className
      )}
    >
      {(leftIcon || isLoading) && (
        <div
          className={classNames(
            buttonIconBaseStyle,
            buttonIconSizeStyleMap[size]
          )}
        >
          {isLoading ? (
            <div
              className={classNames(
                buttonIconSizeStyleMap[size],
                "box-border animate-spin rounded-full border-[2px] border-blackAlpha-500 border-b-white"
              )}
            ></div>
          ) : (
            leftIcon
          )}
        </div>
      )}
      {children}
      {rightIcon && (
        <div
          className={classNames(
            buttonIconBaseStyle,
            buttonIconSizeStyleMap[size]
          )}
        >
          {rightIcon}
        </div>
      )}
    </button>
  );
};
