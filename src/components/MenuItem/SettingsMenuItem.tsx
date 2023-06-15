import { Settings, SettingsOutlined } from "@mui/icons-material";
import { MenuItem } from ".";

export const SettingsMenuItem = () => {
  return (
    <MenuItem icon={<SettingsOutlined />} hoveredIcon={<Settings />}>
      설정
    </MenuItem>
  );
};
