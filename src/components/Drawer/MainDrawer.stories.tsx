import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import { useGlobalDisclosure } from "@/hooks";
import { MainDrawer } from "./MainDrawer";

const meta: Meta<typeof MainDrawer> = {
  title: "Common/Drawer/MainDrawer",
  component: MainDrawer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MainDrawer>;

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
        <div className="flex items-center justify-start gap-10 mb-20">
          <Button onClick={handleToggleMinified}>Toggle Minified</Button>
        </div>

        <MainDrawer {...args} />
      </>
    );
  },
};
