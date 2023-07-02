import type { Meta, StoryObj } from "@storybook/react";

import { PopMenu } from "./PopMenu";
import { PopMenuItem } from "./PopMenuItem";
import {
  Launch,
  SettingsRemote,
  SettingsRemoteOutlined,
} from "@mui/icons-material";

const meta: Meta<typeof PopMenu> = {
  title: "Common/PopMenu",
  component: PopMenu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PopMenu>;

export const Default: Story = {
  args: {
    className: "",
  },
  render(args) {
    return (
      <PopMenu {...args}>
        <PopMenuItem>hello</PopMenuItem>
        <PopMenuItem
          leftIcon={<SettingsRemoteOutlined />}
          hoveredLeftIcon={<SettingsRemote />}
          rightIcon={<Launch sx={{ fontSize: "100%" }} />}
        >
          리모컨 열기
        </PopMenuItem>
      </PopMenu>
    );
  },
};
