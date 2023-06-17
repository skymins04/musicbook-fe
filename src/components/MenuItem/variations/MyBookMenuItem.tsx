import { Book, BookOutlined } from "@mui/icons-material";
import { MenuItem } from "..";

export const MyBookMenuItem = () => {
  return (
    <MenuItem icon={<BookOutlined />} hoveredIcon={<Book />}>
      내 노래책
    </MenuItem>
  );
};
