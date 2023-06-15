import { Login, Logout } from "@mui/icons-material";
import { MenuItem } from ".";
import { useBoolean } from "@/hooks";

export const LogInOutMenuItem = () => {
  const [isLogined, setIsLogined] = useBoolean(false);

  return (
    <MenuItem icon={isLogined ? <Logout /> : <Login />}>
      {isLogined ? "로그아웃" : "로그인"}
    </MenuItem>
  );
};
