import type { Meta, StoryObj } from "@storybook/react";

import { Test } from "./Test";

const meta: Meta<typeof Test> = {
  title: "Common/Test",
  component: Test,
  tags: ["autodocs"],
  argTypes: {
    // className: {
    //   control: { type: "text" },
    // },
  },
};

export default meta;
type Story = StoryObj<typeof Test>;

export const Default: Story = {
  args: {
    // className: "",
  },
};
