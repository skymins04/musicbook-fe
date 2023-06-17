import type { Meta, StoryObj } from "@storybook/react";

import {
  MenuItem,
  CSMenuItem,
  DarkModeMenuItem,
  FeedbackMenuItem,
  LogInOutMenuItem,
  MyBookMenuItem,
  MySongRequestMenuItem,
  SettingsMenuItem,
  DashboardMenuItem,
  OpenRemoteMenuItem,
  OpenSpeakerMenuItem,
  SongRequestManagementMenuItem,
  ProfileMenuItem,
} from ".";
import { Brightness6, Brightness6Outlined } from "@mui/icons-material";
import { Button, Menu, MenuButton, MenuList } from "@chakra-ui/react";

const meta: Meta<typeof MenuItem> = {
  title: "Common/MenuItem",
  component: MenuItem,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
  args: {
    className: "",
  },
  render(args) {
    return (
      <MenuItem
        {...args}
        icon={<Brightness6Outlined />}
        hoveredIcon={<Brightness6 />}
      >
        다크모드 사용
      </MenuItem>
    );
  },
};

export const Variations: Story = {
  args: {
    className: "",
  },
  render(args) {
    return (
      <Menu>
        <MenuButton as={Button} colorScheme="teal">
          Open
        </MenuButton>
        <MenuList className="w-[300px]">
          <ProfileMenuItem />
          <CSMenuItem />
          <DarkModeMenuItem />
          <FeedbackMenuItem />
          <LogInOutMenuItem />
          <MyBookMenuItem />
          <MySongRequestMenuItem />
          <SettingsMenuItem />
          <DashboardMenuItem />
          <SongRequestManagementMenuItem />
          <OpenRemoteMenuItem />
          <OpenSpeakerMenuItem />
        </MenuList>
      </Menu>
    );
  },
};
