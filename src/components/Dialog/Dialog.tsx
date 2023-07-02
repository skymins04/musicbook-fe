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
  footer?: ReactNode;
  footerClassName?: string;
  children?: ReactNode;
  contentsClassName?: string;
  wrapperClassName?: string;
};

export const Dialog = ({
  className,
  dimmerClassName,
  isDimmer,
  isOpen,
  onClose,
  header,
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
          className={classNames(
            "z-50 flex min-h-max items-center justify-center",
            dimmerClassName
          )}
        />
      )}
      {isOpen && (
        <div
          className={classNames(
            "fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center",
            wrapperClassName
          )}
        >
          <div
            className={classNames(
              "h-max w-[80vw] max-w-[450px] animate-popUp rounded-6 bg-white text-gray-700 shadow-md",
              className
            )}
          >
            <div className="box-border flex h-[60px] w-full items-center justify-between border-b-1 border-gray-200 pl-24 pr-16">
              <div className="text-18 font-bold">{header}</div>
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
                  "box-border flex w-full items-center justify-end gap-8 border-t-1 border-gray-200 px-24 py-8",
                  footerClassName
                )}
              >
                {footer}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
