import { Book, BookOutlined } from "@mui/icons-material";
import { useGetMyBook } from "@fetchers";
import { PopMenuLinkItem } from "../PopMenuLinkItem";
import { getBookId } from "@utils";

export const MyBookPopMenuItem = () => {
  const { data: book } = useGetMyBook();

  const bookId = book && getBookId(book);
  const href = book ? `/book/${bookId}` : "";

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
