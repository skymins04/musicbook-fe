import type { Meta, StoryObj } from "@storybook/react";

import { Drawer } from "./Drawer";
import { Button } from "../Button";
import { useGlobalDisclosure } from "@/hooks";
import { DrawerItem } from "./DrawerItem";
import { Home, HomeOutlined } from "@mui/icons-material";
import { DrawerMinifiedHidden } from "./DrawerMinifiedHidden";
import { Divider } from "../Divider";

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

    const handleToggleMinified = () => {
      setData(!data);
    };

    return (
      <>
        <Button className="mb-20" onClick={handleToggleMinified}>
          Toggle Minified
        </Button>
        <Drawer {...args}>
          <DrawerItem icon={<HomeOutlined />} hoveredIcon={<Home />}>
            hello world1
          </DrawerItem>
          <DrawerMinifiedHidden>
            <Divider />
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
