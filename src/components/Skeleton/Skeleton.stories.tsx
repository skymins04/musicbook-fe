import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Common/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    className: "",
    isShow: false,
  },
  render(args) {
    return (
      <div className="flex flex-col items-start justify-start gap-10">
        <Skeleton {...args}>
          <div className="h-[20px] w-[100px]"></div>
        </Skeleton>
        <Skeleton {...args} width={200} height={200}></Skeleton>
      </div>
    );
  },
};
