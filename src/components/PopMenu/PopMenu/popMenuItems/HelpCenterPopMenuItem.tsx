import { Help, HelpOutline } from "@mui/icons-material";
import { PopMenuItem } from "../PopMenuItem";
import Link from "next/link";

export const HelpCenterPopMenuItem = () => {
  return (
    <Link href="#" className="w-full h-max">
      <PopMenuItem leftIcon={<HelpOutline />} hoveredLeftIcon={<Help />}>
        고객센터
      </PopMenuItem>
    </Link>
  );
};
