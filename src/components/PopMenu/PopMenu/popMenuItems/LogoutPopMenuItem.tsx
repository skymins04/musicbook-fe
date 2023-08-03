import { Logout } from "@mui/icons-material";
import { PopMenuItem } from "..";
import { GETUserLogout } from "@apis/user";

export const LogoutPopMenuItem = () => {
  return (
    <PopMenuItem leftIcon={<Logout />} onClick={GETUserLogout}>
      로그아웃
    </PopMenuItem>
  );
};
