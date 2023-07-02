import type { Meta, StoryObj } from "@storybook/react";

import { Drawer } from "./Drawer";
import { Button } from "../Button";
import { useGlobalDisclosure } from "@/hooks";
import { DrawerItem } from "./DrawerItem";
import { Home, HomeOutlined } from "@mui/icons-material";
import { DrawerMinifiedHidden } from "./DrawerMinifiedHidden";
import { Divider } from "../Divider";
import { useState } from "react";

const meta: Meta<typeof Drawer> = {
  title: "Common/Drawer",
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
    const handleToggleSkeleton = () => {
      setIsShow((state) => !state);
    };

    return (
      <>
        <div className="mb-20 flex items-center justify-start gap-10">
          <Button onClick={handleToggleMinified}>Toggle Minified</Button>
          <Button onClick={handleToggleSkeleton}>Toggle Skeleton</Button>
        </div>

        <Drawer {...args} isShow={isShow}>
          <DrawerItem
            isShow={isShow}
            icon={<HomeOutlined />}
            hoveredIcon={<Home />}
          >
            hello world1
          </DrawerItem>
          <DrawerMinifiedHidden>
            <Divider />
            <DrawerItem
              isShow={isShow}
              icon={<HomeOutlined />}
              hoveredIcon={<Home />}
            >
              hello world2
            </DrawerItem>
            <DrawerItem
              isShow={isShow}
              icon={<HomeOutlined />}
              hoveredIcon={<Home />}
            >
              hello world3
            </DrawerItem>
            <Divider />
          </DrawerMinifiedHidden>
          <DrawerItem
            isShow={isShow}
            icon={<HomeOutlined />}
            hoveredIcon={<Home />}
          >
            hello world4
          </DrawerItem>
          <DrawerItem
            isShow={isShow}
            icon={<HomeOutlined />}
            hoveredIcon={<Home />}
          >
            hello world5
          </DrawerItem>
        </Drawer>
      </>
    );
  },
};
