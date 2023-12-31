import {
  AddCircle,
  AddCircleOutline,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { Book } from "@apis";
import { useGetBookSearch } from "@fetchers";
import { flattenPaginationData, getBookId, getBookThumbnail } from "@utils";
import { DrawerItem, DrawerLinkItem, DrawerSubtitle } from "..";
import { Divider, ProfileImage } from "@components";
import { useBoolean } from "@hooks";

export const SuggestedBooksDrawerItemMock = () => {
  return (
    <>
      <DrawerItem isShow={false} />
      <DrawerItem isShow={false} />
      <DrawerItem isShow={false} />
      <DrawerItem isShow={false} />
      <DrawerItem isShow={false} />
    </>
  );
};

export const SuggestedBooksDrawerItem = () => {
  const [isOpen, setIsOpen] = useBoolean(false);
  const { data, isLoading, error } = useGetBookSearch({
    sort: "SUGGEST",
    perPage: 15,
  });
  const books = flattenPaginationData<Book>(data) || [];

  return (
    !error && (
      <>
        <Divider />
        <DrawerSubtitle isShow>추천 노래책</DrawerSubtitle>
        {isLoading ? (
          <SuggestedBooksDrawerItemMock />
        ) : (
          <>
            {books.slice(0, isOpen ? books.length : 5).map((book) => (
              <DrawerLinkItem
                key={book.id}
                href={`/book/${getBookId(book)}`}
                icon={
                  <ProfileImage
                    className="h-24 w-24"
                    src={getBookThumbnail(book)}
                  />
                }
              >
                {book.title}
              </DrawerLinkItem>
            ))}
            {!isOpen && books.length > 5 && (
              <DrawerItem icon={<KeyboardArrowDown />} onClick={setIsOpen.on}>
                {books.length - 5}개 더보기
              </DrawerItem>
            )}
            {isOpen && (
              <>
                <DrawerLinkItem
                  href="#"
                  icon={<AddCircleOutline />}
                  hoveredIcon={<AddCircle />}
                >
                  노래책 탐색
                </DrawerLinkItem>
                <DrawerItem icon={<KeyboardArrowUp />} onClick={setIsOpen.off}>
                  간략히 보기
                </DrawerItem>
              </>
            )}
          </>
        )}
      </>
    )
  );
};
