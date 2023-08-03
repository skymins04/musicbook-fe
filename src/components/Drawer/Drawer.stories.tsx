import type { Meta, StoryObj } from "@storybook/react";

import { Drawer } from "./Drawer";
import { Button } from "../Button";
import { useGlobalDisclosure } from "@/hooks";
import { DrawerItem } from "./DrawerItem";
import { Home, HomeOutlined } from "@mui/icons-material";
import { DrawerMinifiedHidden } from "./DrawerMinifiedHidden";
import { Divider } from "../Divider";
import { useState } from "react";
import { DrawerSubtitle } from "./DrawerSubtitle";
import { DrawerTitle } from "./DrawerTitle";

const meta: Meta<typeof Drawer> = {
  title: "Common/Drawer/Drawer",
  component: Drawer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {
    className: "",
  },
  render(args) {
    const { data, setData } = useGlobalDisclosure("drawer-minified", false);
    const [isShow, setIsShow] = useState(false);

    const handleToggleMinified = () => {
      setData(!data);
    };

    return (
      <>
        <div className="flex items-center justify-start gap-10 mb-20">
          <Button onClick={handleToggleMinified}>Toggle Minified</Button>
        </div>

        <Drawer {...args}>
          <DrawerMinifiedHidden>
            <DrawerTitle>메인타이틀</DrawerTitle>
            <Divider />
          </DrawerMinifiedHidden>
          <DrawerItem icon={<HomeOutlined />} hoveredIcon={<Home />}>
            hello world1
          </DrawerItem>
          <DrawerMinifiedHidden>
            <Divider />
            <DrawerSubtitle>서브타이틀</DrawerSubtitle>
            <DrawerItem icon={<HomeOutlined />} hoveredIcon={<Home />}>
              hello world2
            </DrawerItem>
            <DrawerItem icon={<HomeOutlined />} hoveredIcon={<Home />}>
              hello world3
            </DrawerItem>
            <Divider />
          </DrawerMinifiedHidden>
          <DrawerItem icon={<HomeOutlined />} hoveredIcon={<Home />}>
            hello world4
          </DrawerItem>
          <DrawerItem icon={<HomeOutlined />} hoveredIcon={<Home />}>
            hello world5
          </DrawerItem>
        </Drawer>
      </>
    );
  },
};
