import {
  AddCircleOutline,
  AddCircle,
  Book,
  BookOutlined,
  Bookmark,
  BookmarkBorderOutlined,
  Home,
  HomeOutlined,
  MusicNote,
  MusicNoteOutlined,
} from "@mui/icons-material";
import {
  DrawerProps,
  Drawer,
  DrawerButton,
  DrawerTitle,
  DrawerMinifedHidden,
} from ".";
import { Divider } from "..";

export const CommonDrawer = (props: DrawerProps) => {
  return (
    <Drawer {...props}>
      <DrawerButton icon={<HomeOutlined />} hoveredIcon={<Home />}>
        홈
      </DrawerButton>
      <DrawerMinifedHidden>
        <Divider />
      </DrawerMinifedHidden>
      <DrawerButton
        icon={<BookmarkBorderOutlined />}
        hoveredIcon={<Bookmark />}
      >
        내 좋아요
      </DrawerButton>
      <DrawerButton icon={<MusicNoteOutlined />} hoveredIcon={<MusicNote />}>
        내 신청곡
      </DrawerButton>
      <DrawerButton icon={<BookOutlined />} hoveredIcon={<Book />}>
        내 노래책
      </DrawerButton>
      <DrawerMinifedHidden>
        <Divider />
        <DrawerTitle variant="secondary">팔로우</DrawerTitle>
        <DrawerButton
          icon={<div className="h-24 w-24 rounded-full bg-teal-500"></div>}
        >
          개쩌는 노래책1
        </DrawerButton>
        <DrawerButton
          icon={<div className="h-24 w-24 rounded-full bg-teal-500"></div>}
        >
          개쩌는 노래책2
        </DrawerButton>
        <DrawerButton
          icon={<div className="h-24 w-24 rounded-full bg-teal-500"></div>}
        >
          개쩌는 노래책3
        </DrawerButton>
        <DrawerButton
          icon={<div className="h-24 w-24 rounded-full bg-teal-500"></div>}
        >
          개쩌는 노래책4
        </DrawerButton>
        <DrawerButton icon={<AddCircleOutline />} hoveredIcon={<AddCircle />}>
          노래책 탐색
        </DrawerButton>
      </DrawerMinifedHidden>
    </Drawer>
  );
};
