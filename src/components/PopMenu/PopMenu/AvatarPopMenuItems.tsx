import { Divider } from "@components/Divider";
import {
  HelpCenterPopMenuItem,
  LogoutPopMenuItem,
  SendFeedbackPopMenuItem,
  SettingsPopMenuItem,
  ThemeSelectPopMenuItem,
} from "./popMenuItems";

export const AvatarPopMenuItems = () => {
  return (
    <>
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
