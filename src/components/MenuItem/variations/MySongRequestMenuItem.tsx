import { MusicNote, MusicNoteOutlined } from "@mui/icons-material";
import { MenuItem } from "..";

export const MySongRequestMenuItem = () => {
  return (
    <MenuItem icon={<MusicNoteOutlined />} hoveredIcon={<MusicNote />}>
      내 신청곡
    </MenuItem>
  );
};
