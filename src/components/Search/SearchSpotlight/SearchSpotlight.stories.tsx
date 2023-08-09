import type { Meta, StoryObj } from "@storybook/react";

import { SearchSpotlight } from "./SearchSpotlight";
import { Button } from "@components/Button";
import { useGlobalDisclosure } from "@hooks/useGlobalDisclosure";

const meta: Meta<typeof SearchSpotlight> = {
  title: "Common/Search/SearchSpotlight",
  component: SearchSpotlight,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SearchSpotlight>;

export const Default: Story = {
  args: {
    wrapperClassNames: "!relative",
  },
  render(args) {
    const { setData } = useGlobalDisclosure("search-spotlight", false);
    return (
      <div className="relative h-[500px] w-full">
        <Button
          size="md"
          className="absolute left-0 top-0"
          onClick={() => setData(true)}
        >
          열기
        </Button>
        <SearchSpotlight {...args} />
      </div>
    );
  },
};
