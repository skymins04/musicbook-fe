import classNames from "classnames";
import { ReactNode } from "react";

export type DrawerTitleVariant = "primary" | "secondary";

export type DrawerTitleProps = {
  children: ReactNode;
  variant?: DrawerTitleVariant;
  className?: string;
};

const drawerTitleFontStyle: Record<DrawerTitleVariant, string> = {
  primary: "text-16 font-bold h-[17px]",
  secondary: "text-16 font-bold h-[23px]",
};

export const DrawerTitle = ({
  children,
  variant = "primary",
  className,
}: DrawerTitleProps) => {
  return (
    <div
      className={classNames(
        "ml-8 w-full text-left",
        drawerTitleFontStyle[variant],
        className
      )}
    >
      {children}
    </div>
  );
};
