import type { Meta, StoryObj } from "@storybook/react";

import { LoadingSpinner } from "./LoadingSpinner";

const meta: Meta<typeof LoadingSpinner> = {
  title: "Common/LoadingSpinner",
  component: LoadingSpinner,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = {
  args: {
    className: "w-[36px] h-[36px]",
  },
  render(args) {
    return <LoadingSpinner {...args} />;
  },
};
