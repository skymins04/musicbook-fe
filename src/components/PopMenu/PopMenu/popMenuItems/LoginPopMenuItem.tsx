import { Login } from "@mui/icons-material";
import { PopMenuItem } from "..";
import { useGlobalDisclosure } from "@hooks";

export const LoginPopMenuItem = () => {
  const { setData } = useGlobalDisclosure("login-dialog", false);

  return (
    <PopMenuItem leftIcon={<Login />} onClick={() => setData(true)}>
      로그인
    </PopMenuItem>
  );
};
