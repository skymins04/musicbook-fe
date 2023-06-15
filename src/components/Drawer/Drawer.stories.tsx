import type { Meta, StoryObj } from "@storybook/react";

import { Drawer, DrawerButton, DrawerMinifedHidden } from ".";
import { Divider } from "..";
import {
  BookmarkBorderOutlined,
  BookmarkOutlined,
  Home,
  HomeOutlined,
} from "@mui/icons-material";
import { useGlobalDisclosure } from "@/hooks";
import { Button } from "@chakra-ui/react";

const meta: Meta<typeof Drawer> = {
  title: "Common/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {
    className: "",
    isShowMinified: false,
  },
  render: ({ ...args }) => {
    const { data, setData } = useGlobalDisclosure("drawer-minified", false);

    const handleClickToggle = () => {
      setData(!data);
    };

    return (
      <>
        <Button onClick={handleClickToggle}>
          toggle "drawer-minified" global disclosure
        </Button>
        <Drawer {...args}>
          <DrawerButton icon={<HomeOutlined />} hoveredIcon={<Home />}>
            홈
          </DrawerButton>
          <DrawerMinifedHidden>
            <Divider />
          </DrawerMinifedHidden>
          <DrawerButton
            icon={<BookmarkBorderOutlined />}
            hoveredIcon={<BookmarkOutlined />}
          >
            내 좋아요
          </DrawerButton>
          <DrawerMinifedHidden>
            <DrawerButton
              icon={<BookmarkBorderOutlined />}
              hoveredIcon={<BookmarkOutlined />}
            >
              내 좋아요
            </DrawerButton>
            <DrawerButton
              icon={<BookmarkBorderOutlined />}
              hoveredIcon={<BookmarkOutlined />}
            >
              내 좋아요
            </DrawerButton>
          </DrawerMinifedHidden>
        </Drawer>
      </>
    );
  },
};
