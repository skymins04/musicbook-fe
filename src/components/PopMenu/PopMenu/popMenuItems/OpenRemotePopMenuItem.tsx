import Link from "next/link";
import { PopMenuItem } from "../PopMenuItem";
import {
  OpenInNew,
  SettingsRemote,
  SettingsRemoteOutlined,
} from "@mui/icons-material";

export const OpenRemotePopMenuItem = () => {
  return (
    <Link href="#" target="_blank" className="h-max w-full">
      <PopMenuItem
        leftIcon={<SettingsRemoteOutlined />}
        hoveredLeftIcon={<SettingsRemote />}
        rightIcon={<OpenInNew sx={{ width: "16px", height: "16px" }} />}
      >
        리모컨 열기
      </PopMenuItem>
    </Link>
  );
};
