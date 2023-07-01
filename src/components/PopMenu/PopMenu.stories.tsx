import type { Meta, StoryObj } from "@storybook/react";

import { PopMenu } from "./PopMenu";
import { PopMenuItem } from "./PopMenuItem";

const meta: Meta<typeof PopMenu> = {
  title: "Common/PopMenu",
  component: PopMenu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PopMenu>;

export const Default: Story = {
  args: {
    className: "",
  },
  render(args) {
    return (
      <PopMenu {...args}>
        <PopMenuItem>hello</PopMenuItem>
      </PopMenu>
    );
  },
};
