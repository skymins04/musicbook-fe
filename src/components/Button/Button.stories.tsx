import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { useState } from "react";
import { YouTube } from "@mui/icons-material";

const meta: Meta<typeof Button> = {
  title: "Common/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render(args) {
    const [disabled, setDisabled] = useState(false);
    return (
      <Button
        {...args}
        disabled={disabled}
        onClick={() => setDisabled((state) => !state)}
        leftIcon={<YouTube sx={{ fontSize: "100%" }} />}
      >
        click to set disabled
      </Button>
    );
  },
};
