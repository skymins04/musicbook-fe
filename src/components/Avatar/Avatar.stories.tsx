import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Common/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    className: "w-32",
    src: "https://tistory1.daumcdn.net/tistory/2955598/attach/0c6d70e2f29448f4b0681b53ff805e2f",
  },
  render(args) {
    return <Avatar {...args} />;
  },
};

export const onError: Story = {
  args: {
    className: "w-32",
    src: "https://tistory1.daumcdn.net/tistory/2955598/attach/0c6d70e2f2",
  },
  render(args) {
    return <Avatar {...args} />;
  },
};
