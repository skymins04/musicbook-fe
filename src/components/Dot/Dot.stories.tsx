import type { Meta, StoryObj } from "@storybook/react";

import { Dot } from "./Dot";

const meta: Meta<typeof Dot> = {
  title: "Common/Dot",
  component: Dot,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dot>;

export const Default: Story = {
  args: {
    className: "",
  },
};
