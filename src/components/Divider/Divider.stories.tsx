import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Common/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    className: "",
  },
};
