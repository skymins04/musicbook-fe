import classNames from "classnames";

export type ScreenGuardProps = {
  className?: string;
  onClick?: () => void;
};

export const ScreenGuard = ({ className, onClick }: ScreenGuardProps) => {
  return (
    <div
      className={classNames(
        "h-full w-full bg-blackAlpha-500 duration-100",
        className
      )}
      onClick={onClick}
    ></div>
  );
};
