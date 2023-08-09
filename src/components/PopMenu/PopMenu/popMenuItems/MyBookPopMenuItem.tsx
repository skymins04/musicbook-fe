import Link from "next/link";
import { PopMenuItem } from "../PopMenuItem";
import { Book, BookOutlined } from "@mui/icons-material";

export const MyBookPopMenuItem = () => {
  return (
    <Link href="#" className="h-max w-full">
      <PopMenuItem leftIcon={<BookOutlined />} hoveredLeftIcon={<Book />}>
        내 노래책
      </PopMenuItem>
    </Link>
  );
};
