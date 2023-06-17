import type { Meta, StoryObj } from "@storybook/react";
import { BaseLayout, BaseLayoutDrawer, BaseLayoutContents } from ".";
import { CommonDrawer } from "../Drawer";
import { Button } from "@chakra-ui/react";
import { useGlobalDisclosure } from "@/hooks";

const meta: Meta<typeof BaseLayout> = {
  title: "Common/BaseLayout",
  component: BaseLayout,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof BaseLayout>;

export const Default: Story = {
  render: () => {
    const { setData: setIsOpenSearchSpotlight } = useGlobalDisclosure(
      "search-spotlight",
      false
    );

    return (
      <BaseLayout>
        <BaseLayoutDrawer>
          <CommonDrawer isShowMinified />
        </BaseLayoutDrawer>
        <BaseLayoutContents>
          <Button onClick={() => setIsOpenSearchSpotlight(true)}>
            open spotlight
          </Button>
        </BaseLayoutContents>
      </BaseLayout>
    );
  },
};
