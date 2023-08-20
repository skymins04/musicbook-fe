import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import { DrawerItem, DrawerLinkItem } from "../DrawerItem";
import { SkeletonBaseProps } from "@components/Skeleton";
import { DrawerBaseProps } from "../Drawer";
import { useGlobalDisclosure } from "@hooks";
import { useUserContext } from "@providers";

export type MyLikedMusicDrawerItemProps = SkeletonBaseProps & DrawerBaseProps;

export const MyLikedMusicDrawerItem = (props: MyLikedMusicDrawerItemProps) => {
  const { on: showLoginDialog } = useGlobalDisclosure("login-dialog", false);
  const user = useUserContext();

  return user ? (
    <DrawerLinkItem
      {...props}
      href="/mypage/liked"
      icon={<BookmarkBorder />}
      hoveredIcon={<Bookmark />}
    >
      내 좋아요
    </DrawerLinkItem>
  ) : (
    <DrawerItem
      {...props}
      onClick={showLoginDialog}
      icon={<BookmarkBorder />}
      hoveredIcon={<Bookmark />}
    >
      내 좋아요
    </DrawerItem>
  );
};
