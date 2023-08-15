import { Book } from "@apis";
import { isEmptyTrimedString } from "./isEmptyTrimedString";
import { IMAGES } from "@constants";

export const getBookThumbnail = (book: Book) => {
  const bookThumbnail =
    book.thumbnailURL || book.broadcaster?.profileImgURL || "";
  return isEmptyTrimedString(bookThumbnail)
    ? IMAGES.COMMON.DEFAULT_THUMBNAIL
    : bookThumbnail;
};
