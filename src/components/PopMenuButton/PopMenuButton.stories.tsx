import type { Meta, StoryObj } from "@storybook/react";

import { PopMenuButton } from "./PopMenuButton";
import { Button, PopMenuItem } from "..";
import { Brightness6, Brightness6Outlined } from "@mui/icons-material";

const meta: Meta<typeof PopMenuButton> = {
  title: "Common/PopMenuButton",
  component: PopMenuButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PopMenuButton>;

export const Default: Story = {
  args: {
    className: "",
  },
  render(args) {
    return (
      <div className="flex h-[500px] w-full items-center justify-center">
        <PopMenuButton
          {...args}
          btn={<Button size="md">메뉴버튼</Button>}
          menuItems={
            <>
              <PopMenuItem
                leftIcon={<Brightness6Outlined />}
                hoveredLeftIcon={<Brightness6 />}
              >
                다크모드 사용
              </PopMenuItem>
              <PopMenuItem
                leftIcon={<Brightness6Outlined />}
                hoveredLeftIcon={<Brightness6 />}
              >
                블라블라
              </PopMenuItem>
            </>
          }
        />
      </div>
    );
  },
};
