import { Book } from "@apis";
import { Button } from "@components/Button";
import { ProfileImage } from "@components/ProfileImage";
import { IMAGES } from "@constants";
import { useBookFollow } from "@hooks";
import { getBookId } from "@utils";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";

export type BookCard = {
  className?: string;
  book: Book;
};

export const BookCard = ({className, book}: BookCard) => {
  const bookId = getBookId(book);
  const [isFollowBook, setIsFollowBook] = useState(!!book.bookLikes && book.bookLikes?.length !== 0);
  const {toggleBookFollow, isLoading} = useBookFollow(bookId, isFollowBook, setIsFollowBook);

  const profileImageSrc = book.thumbnailURL || book.broadcaster?.profileImgURL || IMAGES.COMMON.DEFAULT_THUMBNAIL;

  return <Link href={`/book/${book.customId || book.id}`} className={classNames("box-border w-[158px] h-[203px] rounded-6 p-10 flex flex-col justify-center items-center gap-6 shadow-md hover:shadow-lg hover:scale-[1.005] duration-200 focus:outline-none bg-white dark:bg-gray-700", className)}>
    <ProfileImage className="!w-[90px]" src={profileImageSrc} />
    <div className="w-full h-[28px] text-14 text-center line-clamp-2 overflow-hidden break-all text-black dark:text-white">{book.title}</div>
    <div className="w-full h-14 text-14 text-gray-600 dark:text-gray-400 text-center">팔로워 {book.likeCount.toLocaleString()}명</div>
    <Button isLoading={isLoading} onClick={toggleBookFollow} size="xs" color={isFollowBook ? 'secondary' : 'primary'} className="w-full h-[38px] box-border">
      {isFollowBook ? '팔로우중' : '팔로우'}
    </Button>
  </Link>
};