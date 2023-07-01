import { DetailsHTMLAttributes, ReactNode } from "react";
import { DrawerBaseProps } from "./Drawer";
import classNames from "classnames";
import { useGlobalDisclosure } from "@/hooks";

export type DrawerItemProps = {
  icon?: ReactNode;
  hoveredIcon?: ReactNode;
} & DrawerBaseProps &
  DetailsHTMLAttributes<HTMLButtonElement>;

export const DrawerItem = ({
  className,
  children,
  icon,
  hoveredIcon,
  isAllowMinified,
  ...props
}: DrawerItemProps) => {
  const { data: isMinifiedDrawer } = useGlobalDisclosure(
    "drawer-minified",
    false
  );

  const isMinified = isAllowMinified && isMinifiedDrawer;

  return (
    <button
      {...props}
      className={classNames(
        "group box-border flex w-full items-center rounded-6 bg-white font-normal text-gray-700 duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-800 dark:active:bg-gray-900",
        isMinified
          ? "h-[74px] flex-col justify-center gap-[5px] px-12 text-12"
          : "h-[40px] flex-row justify-start gap-16 px-8 text-16",
        className
      )}
    >
      <div className="min-w-24 relative flex h-24 w-24 items-center justify-center text-24 group-hover:hidden">
        {icon}
      </div>
      <div className="min-w-24 relative hidden h-24 w-24 items-center justify-center text-24 group-hover:flex">
        {hoveredIcon || icon}
      </div>
      {children}
    </button>
  );
};
