import { Book } from "@apis";
import { useGetBookSearch } from "@fetchers";
import { flattenPaginationData } from "@utils";
import { DrawerItem, DrawerLinkItem } from "./DrawerItem";
import { ProfileImage } from "@components/ProfileImage";
import { useBoolean } from "@hooks";
import {
  AddCircle,
  AddCircleOutline,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { DrawerSubtitle } from "./DrawerSubtitle";

export const SuggestedBooksItemMock = () => {
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

export const SuggestedBooksItem = () => {
  const [isOpen, setIsOpen] = useBoolean(false);
  const { data, isLoading } = useGetBookSearch({
    sort: "SUGGEST",
    perPage: 15,
  });
  const books = flattenPaginationData<Book>(data) || [];

  return (
    <>
      <DrawerSubtitle isShow>추천 노래책</DrawerSubtitle>
      {isLoading ? (
        <SuggestedBooksItemMock />
      ) : (
        <>
          {books.slice(0, isOpen ? books.length : 5).map((book) => (
            <DrawerLinkItem
              key={book.id}
              href={`/book/${book.customId}`}
              icon={
                <ProfileImage
                  className="h-24 w-24"
                  isShow
                  src={
                    book.thumbnailURL || book.broadcaster?.profileImgURL || ""
                  }
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
  );
};
