import classNames from "classnames";
import { DetailsHTMLAttributes, ReactNode } from "react";

export type PopMenuItemProps = {
  icon?: ReactNode;
  hoveredIcon?: ReactNode;
} & DetailsHTMLAttributes<HTMLButtonElement>;

export const PopMenuItem = ({
  className,
  children,
  icon,
  hoveredIcon,
  ...props
}: PopMenuItemProps) => {
  return (
    <button
      {...props}
      className={classNames(
        "group flex h-[40px] items-center justify-start px-[22px] text-gray-800 duration-100 hover:bg-gray-100 focus:outline-none active:bg-gray-200 dark:text-white dark:hover:bg-gray-800 dark:active:bg-gray-900",
        className
      )}
    >
      <div className="relative flex h-[24px] w-[24px] min-w-[24px] items-center justify-center group-hover:hidden">
        {icon}
      </div>
      <div className="relative hidden h-[24px] w-[24px] min-w-[24px] items-center justify-center group-hover:flex">
        {hoveredIcon || icon}
      </div>
      {children}
    </button>
  );
};
