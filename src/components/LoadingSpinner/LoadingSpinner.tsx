import classNames from "classnames";

export type LoadingSpinnerProps = {
  className?: string;
};

export const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
  return (
    <div
      className={classNames(
        "box-border animate-spin rounded-full border-[2px] border-blackAlpha-500 border-b-white",
        className
      )}
    ></div>
  );
};
