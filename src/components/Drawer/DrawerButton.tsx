import classNames from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { DrawerCommonProps } from "./Drawer";
import { useGlobalDisclosure } from "@/hooks";

export type DrawerButtonProps = {
  children?: ReactNode;
  icon?: ReactNode;
  hoveredIcon?: ReactNode;
} & DrawerCommonProps &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const DrawerButton = ({
  className,
  isShowMinified,
  children,
  icon,
  hoveredIcon,
  ...options
}: DrawerButtonProps) => {
  const { data: isDrawerMinified } = useGlobalDisclosure(
    "drawer-minified",
    false
  );
  const isMinified = isDrawerMinified && isShowMinified;

  return (
    <button
      {...options}
      className={classNames(
        "group flex w-full select-none rounded-6 text-gray-700 duration-100 hover:cursor-pointer hover:bg-gray-200 focus:outline-none dark:text-white dark:hover:bg-gray-800",
        isMinified
          ? "h-[74px] flex-col items-center justify-center gap-[5px] px-10"
          : "items-center justify-start gap-16 p-8",
        className
      )}
    >
      <div className="flex h-24 w-24 items-center justify-center text-24 group-hover:hidden">
        {icon}
      </div>
      <div className="hidden h-24 w-24 items-center justify-center text-24 group-hover:flex">
        {hoveredIcon || icon}
      </div>

      <div
        className={classNames(
          "w-full",
          isMinified
            ? "h-14 text-center text-[10px]"
            : "h-max text-left text-14"
        )}
      >
        {children}
      </div>
    </button>
  );
};
