import type { Meta, StoryObj } from "@storybook/react";

import { PopMenu } from "./PopMenu";
import { PopMenuItem } from "./PopMenuItem";
import {
  Launch,
  SettingsRemote,
  SettingsRemoteOutlined,
} from "@mui/icons-material";
import { Button } from "@components";
import { useState } from "react";

const meta: Meta<typeof PopMenu> = {
  title: "Common/PopMenu/PopMenu",
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
    const [isShow, setIsShow] = useState(false);
    return (
      <div className="flex flex-col items-start justify-start gap-10">
        <Button onClick={() => setIsShow((state) => !state)}>
          toggle skeleton
        </Button>
        <PopMenu {...args}>
          <PopMenuItem isShow={isShow}>hello</PopMenuItem>
          <PopMenuItem
            isShow={isShow}
            leftIcon={<SettingsRemoteOutlined />}
            hoveredLeftIcon={<SettingsRemote />}
            rightIcon={<Launch sx={{ fontSize: "100%" }} />}
          >
            리모컨 열기
          </PopMenuItem>
        </PopMenu>
      </div>
    );
  },
};
