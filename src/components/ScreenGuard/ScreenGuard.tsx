import classNames from "classnames";

export type ScreenGuardProps = {
  className?: string;
  isShow?: boolean;
  onClick?: () => void;
};

export const ScreenGuard = ({
  className,
  isShow,
  onClick,
}: ScreenGuardProps) => {
  return (
    <div
      className={classNames(
        "h-full w-full bg-blackAlpha-500 backdrop-blur-sm duration-100",
        isShow ? "block" : "hidden",
        className
      )}
      onClick={onClick}
    ></div>
  );
};
