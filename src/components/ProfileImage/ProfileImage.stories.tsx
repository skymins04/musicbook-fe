import type { Meta, StoryObj } from "@storybook/react";

import { ProfileImage } from "./ProfileImage";

const meta: Meta<typeof ProfileImage> = {
  title: "Common/ProfileImage",
  component: ProfileImage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProfileImage>;

export const Default: Story = {
  args: {
    className: "w-[48px]",
    src: "https://tistory1.daumcdn.net/tistory/2955598/attach/0c6d70e2f29448f4b0681b53ff805e2f",
  },
};

export const onError: Story = {
  args: {
    className: "w-[48px]",
    src: "https://tistory1.daumcdn.net/tistory/2955598/attach/0c6d70e2f29448f",
  },
};
