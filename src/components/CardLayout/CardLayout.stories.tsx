import type { Meta, StoryObj } from "@storybook/react";

import { CardLayout } from "./CardLayout";

const meta: Meta<typeof CardLayout> = {
  title: "Common/CardLayout",
  component: CardLayout,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CardLayout>;

export const Default: Story = {
  render() {
    return (
      <CardLayout>
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
      </CardLayout>
    );
  },
};
