import type { Meta, StoryObj } from "@storybook/react";

import { TopNotice } from "./TopNotice";
import { useState } from "react";
import { Button } from "@chakra-ui/react";

const meta: Meta<typeof TopNotice> = {
  title: "Common/TopNotice",
  component: TopNotice,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TopNotice>;

export const Default: Story = {
  args: {
    className: "",
  },
  render: ({ children, ...args }) => {
    const [content, setContent] = useState(
      "hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhel"
    );

    const handleClickClose = () => {
      setContent("");
    };

    const handleClickReset = () => {
      setContent(
        "hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhel"
      );
    };

    return (
      <>
        <TopNotice {...args} onClickClose={handleClickClose}>
          {content}
        </TopNotice>
        {!content && (
          <Button variant="solid" colorScheme="teal" onClick={handleClickReset}>
            RESET
          </Button>
        )}
      </>
    );
  },
};
