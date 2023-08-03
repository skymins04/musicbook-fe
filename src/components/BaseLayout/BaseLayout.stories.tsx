import type { Meta, StoryObj } from "@storybook/react";

import { BaseLayout } from "./BaseLayout";

const meta: Meta<typeof BaseLayout> = {
  title: "Common/BaseLayout",
  component: BaseLayout,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BaseLayout>;

export const Default: Story = {
  args: {
    // className: "",
  },
  render() {
    return <BaseLayout />;
  },
};
