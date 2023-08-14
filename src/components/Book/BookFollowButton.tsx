import { Button, ButtonProps } from "@components";
import { MouseEvent } from "react";

export type BookFollowButtonProps = ButtonProps;

export const BookFollowButton = ({
  size,
  onClick,
  ...props
}: BookFollowButtonProps) => {
  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    onClick && onClick(e);
  };

  return (
    <Button {...props} size={size ?? "sm"} onClick={handleClick}>
      팔로우
    </Button>
  );
};
