import { Forum, ForumOutlined } from "@mui/icons-material";
import { MenuItem } from ".";

export const FeedbackMenuItem = () => {
  return (
    <MenuItem icon={<ForumOutlined />} hoveredIcon={<Forum />}>
      의견보내기
    </MenuItem>
  );
};
