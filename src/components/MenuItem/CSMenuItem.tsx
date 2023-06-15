import { HelpOutline, HelpOutlineOutlined } from "@mui/icons-material";
import { MenuItem } from ".";

export const CSMenuItem = () => {
  return (
    <MenuItem icon={<HelpOutlineOutlined />} hoveredIcon={<HelpOutline />}>
      고객센터
    </MenuItem>
  );
};
