import { Divider } from "@components";
import {
  HelpCenterPopMenuItem,
  LoginPopMenuItem,
  SendFeedbackPopMenuItem,
  SettingsPopMenuItem,
  ThemeSelectPopMenuItem,
} from "./popMenuItems";

export const EtcPopMenuItems = () => {
  return (
    <>
      <ThemeSelectPopMenuItem />
      <LoginPopMenuItem />
      <Divider />
      <SettingsPopMenuItem />
      <Divider />
      <HelpCenterPopMenuItem />
      <SendFeedbackPopMenuItem />
    </>
  );
};
