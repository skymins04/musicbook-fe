import Link from "next/link";
import { PopMenuItem } from "../PopMenuItem";
import { QueueMusic, QueueMusicOutlined } from "@mui/icons-material";

export const ManageSongRequestPopMenuItem = () => {
  return (
    <Link href="#" className="h-max w-full">
      <PopMenuItem
        leftIcon={<QueueMusicOutlined />}
        hoveredLeftIcon={<QueueMusic />}
      >
        신청곡 대기열 관리
      </PopMenuItem>
    </Link>
  );
};
