import type { Meta, StoryObj } from "@storybook/react";

import { Spotlight } from "./Spotlight";

const meta: Meta<typeof Spotlight> = {
  title: "Common/Spotlight",
  component: Spotlight,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Spotlight>;

export const Default: Story = {
  render: () => {
    return <Spotlight />;
  },
};
