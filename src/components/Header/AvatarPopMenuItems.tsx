import { Logout } from "@mui/icons-material";
import { PopMenuItem } from "..";
import { GETUserLogout } from "@apis/user";

export const AvatarPopMenuItems = () => {
  return (
    <>
      <PopMenuItem leftIcon={<Logout />} onClick={GETUserLogout}>
        로그아웃
      </PopMenuItem>
    </>
  );
};
