import { Login, Logout } from "@mui/icons-material";
import { PopMenuItem } from "..";
import { GETUserLogout } from "@apis/user";
import { useGlobalDisclosure } from "@hooks/useGlobalDisclosure";

export const LoginPopMenuItem = () => {
  const { setData } = useGlobalDisclosure("login-dialog", false);

  return (
    <PopMenuItem leftIcon={<Login />} onClick={() => setData(true)}>
      로그인
    </PopMenuItem>
  );
};
