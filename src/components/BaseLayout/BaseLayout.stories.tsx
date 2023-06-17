import type { Meta, StoryObj } from "@storybook/react";
import { BaseLayout, BaseLayoutDrawer, BaseLayoutContents } from ".";
import { CommonDrawer } from "../Drawer";

const meta: Meta<typeof BaseLayout> = {
  title: "Common/BaseLayout",
  component: BaseLayout,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof BaseLayout>;

export const Default: Story = {
  render: () => {
    return (
      <BaseLayout>
        <BaseLayoutDrawer>
          <CommonDrawer isShowMinified />
        </BaseLayoutDrawer>
        <BaseLayoutContents>hello world</BaseLayoutContents>
      </BaseLayout>
    );
  },
};
