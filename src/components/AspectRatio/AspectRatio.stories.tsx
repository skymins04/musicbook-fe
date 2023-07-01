import type { Meta, StoryObj } from "@storybook/react";

import { AspectRatio } from "./AspectRatio";

const meta: Meta<typeof AspectRatio> = {
  title: "Common/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  args: {
    className: "",
    ratio: 2 / 1,
    contentAreaClassName: "flex justify-center items-center bg-red-500",
  },
  render(args) {
    return <AspectRatio {...args}>hello world</AspectRatio>;
  },
};
