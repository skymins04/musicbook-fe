import { OpenInNew, Speaker, SpeakerOutlined } from "@mui/icons-material";
import { MenuItem } from "..";

export const OpenSpeakerMenuItem = () => {
  return (
    <MenuItem
      icon={<SpeakerOutlined />}
      hoveredIcon={<Speaker />}
      rightIcon={
        <OpenInNew
          className="text-gray-500 dark:text-gray-400"
          sx={{ fontSize: "16px" }}
        />
      }
    >
      스피커 열기
    </MenuItem>
  );
};
