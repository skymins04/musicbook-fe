import { Settings, SettingsOutlined } from "@mui/icons-material";
import { PopMenuItem } from "../PopMenuItem";
import Link from "next/link";

export const SettingsPopMenuItem = () => {
  return (
    <Link href="/settings" className="w-full h-max">
      <PopMenuItem
        leftIcon={<SettingsOutlined />}
        hoveredLeftIcon={<Settings />}
      >
        설정
      </PopMenuItem>
    </Link>
  );
};
