import { Divider } from "@components";
import {
  HelpCenterPopMenuItem,
  LogoutPopMenuItem,
  ManageSongRequestPopMenuItem,
  MyBookPopMenuItem,
  MyDashboardPopMenuItem,
  MySongRequestPopMenuItem,
  OpenMRSpeakerPopMenuItem,
  OpenRemotePopMenuItem,
  SendFeedbackPopMenuItem,
  SettingsPopMenuItem,
  ThemeSelectPopMenuItem,
} from "./popMenuItems";

export const AvatarPopMenuItems = () => {
  return (
    <>
      <MySongRequestPopMenuItem />
      <MyBookPopMenuItem />
      <Divider />
      <MyDashboardPopMenuItem />
      <ManageSongRequestPopMenuItem />
      <OpenRemotePopMenuItem />
      <OpenMRSpeakerPopMenuItem />
      <Divider />
      <ThemeSelectPopMenuItem />
      <LogoutPopMenuItem />
      <Divider />
      <SettingsPopMenuItem />
      <Divider />
      <HelpCenterPopMenuItem />
      <SendFeedbackPopMenuItem />
    </>
  );
};
