import type { Meta, StoryObj } from "@storybook/react";

import { Spotlight } from "./Spotlight";

const meta: Meta<typeof Spotlight> = {
  title: "Common/Spotlight",
  component: Spotlight,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spotlight>;

export const Default: Story = {
  args: {
    className: "",
  },
  render: (args) => {
    return <Spotlight {...args} />;
  },
};
