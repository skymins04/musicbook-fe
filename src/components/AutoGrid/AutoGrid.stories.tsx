import type { Meta, StoryObj } from "@storybook/react";

import { AutoGrid } from "./AutoGrid";

const meta: Meta<typeof AutoGrid> = {
  title: "Common/AutoGrid",
  component: AutoGrid,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AutoGrid>;

export const Default: Story = {
  render() {
    return (
      <AutoGrid>
        <div className="h-[60px] w-full bg-red-500"></div>
        <div className="h-[60px] w-full bg-red-500"></div>
        <div className="h-[60px] w-full bg-red-500"></div>
        <div className="h-[60px] w-full bg-red-500"></div>
        <div className="h-[60px] w-full bg-red-500"></div>
        <div className="h-[60px] w-full bg-red-500"></div>
        <div className="h-[60px] w-full bg-red-500"></div>
        <div className="h-[60px] w-full bg-red-500"></div>
        <div className="h-[60px] w-full bg-red-500"></div>
        <div className="h-[60px] w-full bg-red-500"></div>
        <div className="h-[60px] w-full bg-red-500"></div>
        <div className="h-[60px] w-full bg-red-500"></div>
        <div className="h-[60px] w-full bg-red-500"></div>
      </AutoGrid>
    );
  },
};
