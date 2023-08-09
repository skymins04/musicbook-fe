import type { Meta, StoryObj } from "@storybook/react";

import { ErrorPage } from "./ErrorPage";

const meta: Meta<typeof ErrorPage> = {
  title: "Common/ErrorPage",
  component: ErrorPage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const Error404: Story = {
  args: {
    statusCode: 404,
    description:
      "찾을 수 없는 페이지입니다.\n요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요",
  },
};

export const Error500: Story = {
  args: {
    statusCode: 500,
    description:
      "찾을 수 없는 페이지입니다.\n요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요",
  },
};
