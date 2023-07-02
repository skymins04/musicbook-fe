import type { Meta, StoryObj } from "@storybook/react";

import { Dialog } from "./Dialog";
import { Button } from "../Button";

const meta: Meta<typeof Dialog> = {
  title: "Common/Dialog",
  component: Dialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    className: "",
    dimmerClassName: "absolute",
    wrapperClassName: "absolute",
    header: "다이얼로그 제목",
  },
  render(args) {
    return (
      <div className="relative h-[500px] w-full">
        <Dialog
          {...args}
          footer={
            <>
              <Button color="secondary" size="md">
                취소
              </Button>
              <Button color="primary" size="md">
                저장
              </Button>
            </>
          }
        >
          hello world
        </Dialog>
      </div>
    );
  },
};
