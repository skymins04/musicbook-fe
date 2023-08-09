import Link from "next/link";
import { PopMenuItem } from "../PopMenuItem";
import { LibraryMusic, LibraryMusicOutlined } from "@mui/icons-material";

export const MySongRequestPopMenuItem = () => {
  return (
    <Link href="#" className="h-max w-full">
      <PopMenuItem
        leftIcon={<LibraryMusicOutlined />}
        hoveredLeftIcon={<LibraryMusic />}
      >
        내 신청곡
      </PopMenuItem>
    </Link>
  );
};
