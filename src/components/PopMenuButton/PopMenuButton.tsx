import classNames from "classnames";
import {
  DetailsHTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
} from "react";
import { PopMenu, PopMenuItem, PopMenuItemProps } from "..";
import { useBoolean } from "@hooks/useBoolean";

type PopMenuDirection =
  | "top-left"
  | "top-center"
  | "top-right"
  | "center-left"
  | "center-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export type PopMenuButtonProps = {
  className?: string;
  popMenuClassName?: string;
  btn: ReactElement;
  menuItems: ReactNode;
  menuDirection?: PopMenuDirection;
};

const PopMenuDirectionMap: Record<PopMenuDirection, string> = {
  "top-left": "-top-16 right-0 -translate-y-[100%]",
  "top-center": "-top-16 right-[50%] translate-x-[50%] -translate-y-[100%]",
  "top-right": "-top-16 left-0 -translate-y-[100%]",
  "center-left": "-left-16 bottom-[50%] -translate-x-[100%] translate-y-[50%]",
  "center-right": "-right-16 bottom-[50%] translate-x-[100%] translate-y-[50%]",
  "bottom-left": "-bottom-16 right-0 translate-y-[100%]",
  "bottom-center":
    "-bottom-16 left-[50%] -translate-x-[50%] translate-y-[100%]",
  "bottom-right": "-bottom-16 left-0 translate-y-[100%]",
};

export const PopMenuButton = ({
  className,
  popMenuClassName,
  btn,
  menuItems,
  menuDirection = "bottom-left",
}: PopMenuButtonProps) => {
  const [isOpen, setIsOpen] = useBoolean(false);

  const button = cloneElement(btn, {
    onClick: () => setIsOpen.toggle(),
  } as DetailsHTMLAttributes<HTMLButtonElement>);

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 z-10 w-full h-full"
          onClick={() => setIsOpen.off()}
        ></div>
      )}
      <div className={classNames("relative z-20 h-max w-max", className)}>
        {button}
        <PopMenu
          className={classNames(
            "pointer-events-none absolute w-max scale-90 opacity-0 !duration-200",
            isOpen && "!pointer-events-auto !flex !scale-100 !opacity-100",
            PopMenuDirectionMap[menuDirection],
            popMenuClassName
          )}
        >
          {menuItems}
        </PopMenu>
      </div>
    </>
  );
};
