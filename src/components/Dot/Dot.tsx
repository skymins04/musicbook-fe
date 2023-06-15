import classNames from "classnames";

export type DotProps = {
  className?: string;
};

export const Dot = ({ className }: DotProps) => {
  return (
    <div
      className={classNames(
        "h-[5px] w-[5px] rounded-full bg-teal-400 dark:bg-teal-200",
        className
      )}
    ></div>
  );
};
