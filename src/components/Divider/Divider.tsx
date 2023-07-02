import classNames from "classnames";

export type DividerProps = {
  className?: string;
};

export const Divider = ({ className }: DividerProps) => {
  return (
    <hr
      className={classNames(
        "w-full border-gray-200 duration-200 dark:border-gray-800",
        className
      )}
    />
  );
};
