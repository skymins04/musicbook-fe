import classNames from "classnames";
import { ReactNode } from "react";

export type MenuItemProps = {
  className?: string;
  iconAreaClassName?: string;
  children?: ReactNode;
  icon?: ReactNode;
  hoveredIcon?: ReactNode;
  rightIcon?: ReactNode;
  hoveredRightIcon?: ReactNode;
  onClick?: () => void;
};

export const MenuItem = ({
  className,
  iconAreaClassName,
  children,
  icon,
  hoveredIcon,
  rightIcon,
  hoveredRightIcon,
  onClick,
}: MenuItemProps) => {
  const isShowRightIcon = rightIcon || hoveredRightIcon;

  return (
    <div
      className={classNames(
        " group flex h-max w-full items-stretch justify-between gap-10 px-[22px] py-8 text-gray-700 duration-100 hover:cursor-pointer hover:bg-gray-200 dark:text-white hover:dark:bg-gray-800",
        className
      )}
      onClick={onClick}
    >
      <div
        className={classNames(
          "flex h-24 w-24 items-stretch justify-stretch",
          iconAreaClassName
        )}
      >
        <div className="flex h-full w-full items-stretch justify-stretch group-hover:hidden">
          {icon}
        </div>
        <div className="hidden h-full w-full items-stretch justify-stretch group-hover:flex">
          {hoveredIcon || icon}
        </div>
      </div>
      <div className="flex w-full items-center justify-start">{children}</div>
      {isShowRightIcon && (
        <div className="flex h-24 w-24 items-center justify-center">
          <div className="flex h-24 w-24 items-center justify-center group-hover:hidden">
            {rightIcon}
          </div>
          <div className="hidden h-24 w-24 items-center justify-center group-hover:flex">
            {hoveredRightIcon || rightIcon}
          </div>
        </div>
      )}
    </div>
  );
};
