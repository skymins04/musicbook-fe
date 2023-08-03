import type { Meta, StoryObj } from "@storybook/react";

import { TopNotice } from "./TopNotice";

const meta: Meta<typeof TopNotice> = {
  title: "Common/TopNotice",
  component: TopNotice,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TopNotice>;

export const Default: Story = {
  render() {
    return <TopNotice />;
  },
};
