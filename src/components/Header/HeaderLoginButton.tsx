import classNames from "classnames";
import { Button, ButtonProps } from "..";
import { useGlobalDisclosure } from "@hooks";

export type HeaderLoginButtonProps = Omit<
  ButtonProps,
  "variant" | "color" | "size" | "onClick"
>;

export const HeaderLoginButton = ({
  className,
  ...props
}: HeaderLoginButtonProps) => {
  const { on: showLoginDialog } = useGlobalDisclosure("login-dialog", false);

  return (
    <Button
      {...props}
      title="로그인"
      variant="solid"
      color="primary"
      size="md"
      className={classNames("ml-8 mobile:hidden", className)}
      onClick={showLoginDialog}
    >
      로그인
    </Button>
  );
};
