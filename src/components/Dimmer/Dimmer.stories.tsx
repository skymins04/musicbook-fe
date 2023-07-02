import type { Meta, StoryObj } from "@storybook/react";

import { Dimmer } from "./Dimmer";

const meta: Meta<typeof Dimmer> = {
  title: "Common/Dimmer",
  component: Dimmer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dimmer>;

export const Default: Story = {
  args: {
    className: "!relative h-[200px]",
  },
  render(args) {
    return (
      <div className="h-[500px] w-full">
        <Dimmer {...args} />
      </div>
    );
  },
};
