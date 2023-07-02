import classNames from "classnames";
import { DetailsHTMLAttributes, ReactNode } from "react";

export type PopMenuItemProps = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  hoveredLeftIcon?: ReactNode;
  hoveredRightIcon?: ReactNode;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & DetailsHTMLAttributes<HTMLButtonElement>;

const popMenuLeftIconBaseStyle =
  "relative h-[24px] w-[24px] min-w-[24px] items-center justify-center";

const popMenuRightIconBaseStyle =
  "relative h-[16px] w-[16px] min-w-[16px] ml-auto items-center justify-center text-gray-500 dark:text-gray-300 duration-200";

export const PopMenuItem = ({
  className,
  children,
  leftIcon,
  rightIcon,
  hoveredLeftIcon,
  hoveredRightIcon,
  leftIconClassName,
  rightIconClassName,
  ...props
}: PopMenuItemProps) => {
  const leftIconStyle = classNames(popMenuLeftIconBaseStyle, leftIconClassName);
  const rightIconStyle = classNames(
    popMenuRightIconBaseStyle,
    rightIconClassName
  );

  return (
    <button
      {...props}
      className={classNames(
        "group flex h-[40px] items-center justify-start gap-10 px-[22px] font-normal text-gray-800 duration-200 hover:bg-gray-100 focus:outline-none active:bg-gray-200 dark:text-white dark:hover:bg-gray-800 dark:active:bg-gray-900",
        className
      )}
    >
      <div className={classNames("flex group-hover:hidden", leftIconStyle)}>
        {leftIcon}
      </div>
      <div className={classNames("hidden group-hover:flex", leftIconStyle)}>
        {hoveredLeftIcon || leftIcon}
      </div>
      {children}
      <div className={classNames("flex group-hover:hidden", rightIconStyle)}>
        {rightIcon}
      </div>
      <div className={classNames("hidden group-hover:flex", rightIconStyle)}>
        {hoveredRightIcon || rightIcon}
      </div>
    </button>
  );
};
