import {
  OpenInNew,
  SettingsRemote,
  SettingsRemoteOutlined,
} from "@mui/icons-material";
import { MenuItem } from "..";

export const OpenRemoteMenuItem = () => {
  return (
    <MenuItem
      icon={<SettingsRemoteOutlined />}
      hoveredIcon={<SettingsRemote />}
      rightIcon={
        <OpenInNew
          className="text-gray-500 dark:text-gray-400"
          sx={{ fontSize: "16px" }}
        />
      }
    >
      리모컨 열기
    </MenuItem>
  );
};
