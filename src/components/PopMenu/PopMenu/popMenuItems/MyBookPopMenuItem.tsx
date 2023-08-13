import { Book, BookOutlined } from "@mui/icons-material";
import { useGetMyBook } from "@fetchers";
import { PopMenuLinkItem } from "../PopMenuLinkItem";

export const MyBookPopMenuItem = () => {
  const { data: book } = useGetMyBook();

  const href = book ? `/book/${book.customId}` : "";

  return (
    <PopMenuLinkItem
      href={href}
      leftIcon={<BookOutlined />}
      hoveredLeftIcon={<Book />}
    >
      내 노래책
    </PopMenuLinkItem>
  );
};
