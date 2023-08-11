import { Button, ButtonProps } from "@components";
import classNames from "classnames";

export type TabData = {
  id: string;
  label: string;
};

export type TabProps = {
  isSelected?: boolean;
} & TabData &
  ButtonProps;

export const Tab = ({ id, label, isSelected, ...props }: TabProps) => {
  return (
    <Button
      {...props}
      size="xs"
      color={isSelected ? "primary" : "secondary"}
      variant={isSelected ? "solid" : "ghost"}
      className={classNames(
        "select-none rounded-full !px-16 !py-8 text-16 font-bold duration-200 focus:outline-none",
        isSelected ? "bg-green-100" : "hover:bg-gray-200 dark:hover:bg-gray-700"
      )}
    >
      {label}
    </Button>
  );
};
