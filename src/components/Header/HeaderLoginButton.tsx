import { Button } from "..";
import { useGlobalDisclosure } from "@hooks";

export const HeaderLoginButton = () => {
  const { on: showLoginDialog } = useGlobalDisclosure("login-dialog", false);

  return (
    <Button
      variant="solid"
      color="primary"
      size="md"
      className="ml-8 mobile:hidden"
      onClick={showLoginDialog}
    >
      로그인
    </Button>
  );
};
