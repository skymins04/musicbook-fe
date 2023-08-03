import classNames from "classnames";
import { Dimmer } from "../Dimmer";
import { Button } from "../Button";
import { Close } from "@mui/icons-material";
import { ReactNode } from "react";

export type DialogProps = {
  className?: string;
  dimmerClassName?: string;
  isDimmer?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  header?: ReactNode;
  headerClassName?: string;
  footer?: ReactNode;
  footerClassName?: string;
  children?: ReactNode;
  contentsClassName?: string;
  wrapperClassName?: string;
};

export const Dialog = ({
  className,
  dimmerClassName,
  isDimmer = true,
  isOpen,
  onClose,
  header,
  headerClassName,
  footer,
  footerClassName,
  children,
  contentsClassName,
  wrapperClassName,
}: DialogProps) => {
  return (
    <>
      {isOpen && isDimmer && (
        <Dimmer
          isOpen={isOpen}
          onClick={onClose}
          className={classNames(
            "z-50 flex min-h-max items-center justify-center",
            dimmerClassName
          )}
        />
      )}
      {isOpen && (
        <div
          className={classNames(
            "fixed left-[50%] top-[50%] z-50 h-max w-full max-w-[450px] !translate-x-[-50%] !translate-y-[-50%] animate-popUp rounded-6 bg-white text-gray-700 shadow-md dark:bg-gray-700 dark:text-white",
            className
          )}
        >
          <div
            className={classNames(
              "box-border flex h-[60px] w-full items-center justify-between border-b-1 border-gray-200 pl-24 pr-16 dark:border-gray-800",
              headerClassName
            )}
          >
            <div className="font-bold text-18">{header}</div>
            {onClose && (
              <Button
                className="box-border w-32"
                color="secondary"
                variant="ghost"
                size="sm"
                onClick={onClose}
              >
                <Close sx={{ fontSize: "24px" }} />
              </Button>
            )}
          </div>
          <div
            className={classNames(
              "box-border h-full w-full px-24 pb-24 pt-16 font-normal",
              contentsClassName
            )}
          >
            {children}
          </div>
          {footer && (
            <div
              className={classNames(
                "box-border flex w-full items-center justify-end gap-8 border-t-1 border-gray-200 px-24 py-8 dark:border-gray-800",
                footerClassName
              )}
            >
              {footer}
            </div>
          )}
        </div>
      )}
    </>
  );
};
