import type { Meta, StoryObj } from "@storybook/react";

import { SearchBar } from "./SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "Common/Search/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    className: "",
  },
  render(args) {
    return <SearchBar {...args} />;
  },
};
