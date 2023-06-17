import { Dashboard, DashboardOutlined } from "@mui/icons-material";
import { MenuItem } from "..";

export const DashboardMenuItem = () => {
  return (
    <MenuItem icon={<DashboardOutlined />} hoveredIcon={<Dashboard />}>
      노래책 대시보드
    </MenuItem>
  );
};
