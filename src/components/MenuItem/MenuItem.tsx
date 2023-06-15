import classNames from "classnames";
import { ReactNode } from "react";

export type MenuItemProps = {
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
  hoveredIcon?: ReactNode;
  onClick?: () => void;
};

export const MenuItem = ({
  className,
  children,
  icon,
  hoveredIcon,
  onClick,
}: MenuItemProps) => {
  return (
    <div
      className={classNames(
        " group flex h-max w-full items-center justify-between gap-10 px-[22px] py-8 text-gray-700 duration-100 hover:cursor-pointer hover:bg-gray-200 dark:text-white hover:dark:bg-gray-800",
        className
      )}
      onClick={onClick}
    >
      <div className="flex h-24 w-24 items-center justify-center">
        <div className="flex h-24 w-24 items-center justify-center group-hover:hidden">
          {icon}
        </div>
        <div className="hidden h-24 w-24 items-center justify-center group-hover:flex">
          {hoveredIcon || icon}
        </div>
      </div>
      <div className="flex w-full items-center justify-start">{children}</div>
    </div>
  );
};
