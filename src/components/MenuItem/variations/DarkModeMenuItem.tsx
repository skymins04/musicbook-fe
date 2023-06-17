import { Brightness6, Brightness6Outlined } from "@mui/icons-material";
import { MenuItem } from "..";
import { useGetColorMode } from "@/hooks";

export const DarkModeMenuItem = () => {
  const { colorMode, toggleColorMode } = useGetColorMode();

  return (
    <MenuItem
      onClick={toggleColorMode}
      icon={<Brightness6Outlined />}
      hoveredIcon={<Brightness6 />}
    >
      {colorMode === "light" ? "다크모드 사용" : "라이트모드 사용"}
    </MenuItem>
  );
};
