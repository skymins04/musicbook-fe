import type { Meta, StoryObj } from "@storybook/react";

import { Thumbnail } from "./Thumbnail";

const meta: Meta<typeof Thumbnail> = {
  title: "Common/Thumbnail",
  component: Thumbnail,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Thumbnail>;

export const Default: Story = {
  args: {
    className: "max-w-[300px]",
    src: "https://tistory1.daumcdn.net/tistory/2955598/attach/0c6d70e2f29448f4b0681b53ff805e2f",
    ratio: 1,
    alt: "",
  },
  render(args) {
    return <Thumbnail {...args} />;
  },
};

export const onError: Story = {
  args: {
    className: "max-w-[300px]",
    src: "https://tistory1.daumcdn.net/tistory/2955598/attach/0c6d70e2f29448f4b",
    ratio: 1,
    alt: "",
  },
  render(args) {
    return <Thumbnail {...args} />;
  },
};
