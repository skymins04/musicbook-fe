import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Common/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: [
      { id: "all", label: "전체" },
      { id: "category:J-POP", label: "J-POP" },
      { id: "category:발라드", label: "발라드" },
      { id: "category:랩/힙합", label: "랩/힙합" },
      { id: "category:R&B/Soul", label: "R&B/Soul" },
      { id: "category:인디음악", label: "인디음악" },
      { id: "newest", label: "최근올라온수록곡" },
      { id: "popular", label: "인기수록곡" },
    ],
  },
  render(args) {
    return <Tabs {...args} />;
  },
};
