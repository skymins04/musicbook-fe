import { DrawerItem, DrawerLinkItem, SkeletonBaseProps } from "@components";
import { DrawerBaseProps } from "../Drawer";
import { Book, BookOutlined } from "@mui/icons-material";
import { useGetMyBook } from "@fetchers";
import { useGlobalDisclosure } from "@hooks";

export type MyBookDrawerItem = SkeletonBaseProps & DrawerBaseProps;

const DRAWER_ITEM_LABEL = "내 노래책";

export const MyBookDrawerItem = (props: MyBookDrawerItem) => {
  const { on: showLoginDialog } = useGlobalDisclosure("login-dialog", false);
  const { data: book } = useGetMyBook();

  const href = book && `/book/${book.customId}`;
  console.log("asdf", book, href);

  return href ? (
    <DrawerLinkItem
      {...props}
      href={href}
      icon={<BookOutlined />}
      hoveredIcon={<Book />}
    >
      {DRAWER_ITEM_LABEL}
    </DrawerLinkItem>
  ) : (
    <DrawerItem
      {...props}
      icon={<BookOutlined />}
      hoveredIcon={<Book />}
      onClick={showLoginDialog}
    >
      {DRAWER_ITEM_LABEL}
    </DrawerItem>
  );
};
