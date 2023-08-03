import {
  Book,
  BookOutlined,
  Bookmark,
  BookmarkBorder,
  Forum,
  ForumOutlined,
  Help,
  HelpOutlineOutlined,
  Home,
  HomeOutlined,
  LibraryMusic,
  LibraryMusicOutlined,
  Settings,
  SettingsOutlined,
} from "@mui/icons-material";
import { Divider, DrawerItem, DrawerLinkItem, DrawerSubtitle } from "..";
import { Drawer, DrawerProps } from "./Drawer";
import { DrawerMinifiedHidden } from "./DrawerMinifiedHidden";

export type MainDrawerProps = Omit<DrawerProps, "children">;

export const MainDrawer = (props: MainDrawerProps) => {
  return (
    <Drawer {...props}>
      <DrawerLinkItem href="/" icon={<HomeOutlined />} hoveredIcon={<Home />}>
        홈
      </DrawerLinkItem>
      <DrawerMinifiedHidden>
        <Divider />
      </DrawerMinifiedHidden>
      <DrawerItem icon={<BookmarkBorder />} hoveredIcon={<Bookmark />}>
        내 좋아요
      </DrawerItem>
      <DrawerItem
        icon={<LibraryMusicOutlined />}
        hoveredIcon={<LibraryMusic />}
      >
        내 신청곡
      </DrawerItem>
      <DrawerItem icon={<BookOutlined />} hoveredIcon={<Book />}>
        내 노래책
      </DrawerItem>
      <DrawerMinifiedHidden>
        <Divider />
        <DrawerSubtitle>추천 노래책</DrawerSubtitle>
        <Divider />
      </DrawerMinifiedHidden>
      <DrawerItem icon={<SettingsOutlined />} hoveredIcon={<Settings />}>
        설정
      </DrawerItem>
      <DrawerMinifiedHidden>
        <DrawerItem icon={<HelpOutlineOutlined />} hoveredIcon={<Help />}>
          고객센터
        </DrawerItem>
        <DrawerItem icon={<ForumOutlined />} hoveredIcon={<Forum />}>
          의견보내기
        </DrawerItem>
      </DrawerMinifiedHidden>
    </Drawer>
  );
};
