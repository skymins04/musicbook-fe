import type { Meta, StoryObj } from "@storybook/react";

import { LoginDialog } from "./LoginDialog";

const meta: Meta<typeof LoginDialog> = {
  title: "Common/Dialog/LoginDialog",
  component: LoginDialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LoginDialog>;

export const Default: Story = {
  args: {
    className: "",
    dimmerClassName: "absolute",
    wrapperClassName: "absolute",
    isDimmer: true,
    isOpen: true,
  },
  render(args) {
    return (
      <div className="relative h-[500px] w-full">
        <LoginDialog {...args} />
      </div>
    );
  },
};
