import { Divider } from "@components/Divider";
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
