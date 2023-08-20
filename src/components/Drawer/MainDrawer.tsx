import {
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
import { Divider, DrawerItem, DrawerLinkItem } from "..";
import { Drawer, DrawerProps } from "./Drawer";
import { DrawerMinifiedHidden } from "./DrawerMinifiedHidden";
import {
  MyBookDrawerItem,
  SuggestedBooksDrawerItem,
  MyLikedMusicDrawerItem,
} from "./drawerItems";

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
      <MyLikedMusicDrawerItem />
      <DrawerItem
        icon={<LibraryMusicOutlined />}
        hoveredIcon={<LibraryMusic />}
      >
        내 신청곡
      </DrawerItem>
      <MyBookDrawerItem />
      <DrawerMinifiedHidden>
        <SuggestedBooksDrawerItem />
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
