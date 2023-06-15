import type { Meta, StoryObj } from "@storybook/react";

import { MenuItem } from "./MenuItem";
import { Brightness6, Brightness6Outlined } from "@mui/icons-material";

const meta: Meta<typeof MenuItem> = {
  title: "Common/MenuItem",
  component: MenuItem,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
  args: {
    className: "",
  },
  render(args) {
    return (
      <MenuItem
        {...args}
        icon={<Brightness6Outlined />}
        hoveredIcon={<Brightness6 />}
      >
        다크모드 사용
      </MenuItem>
    );
  },
};
