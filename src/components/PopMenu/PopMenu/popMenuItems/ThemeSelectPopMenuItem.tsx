import {
  DarkMode,
  DarkModeOutlined,
  LightMode,
  LightModeOutlined,
} from "@mui/icons-material";
import { PopMenuItem } from "../../..";
import { useTheme } from "@hooks";

export const ThemeSelectPopMenuItem = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <PopMenuItem
      leftIcon={
        theme === "light" ? <DarkModeOutlined /> : <LightModeOutlined />
      }
      hoveredLeftIcon={theme === "light" ? <DarkMode /> : <LightMode />}
      onClick={toggleTheme}
    >
      {theme === "light" ? "어두운테마 사용" : "밝은테마 사용"}
    </PopMenuItem>
  );
};
