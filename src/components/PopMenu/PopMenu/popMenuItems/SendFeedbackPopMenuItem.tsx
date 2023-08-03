import { Forum, ForumOutlined } from "@mui/icons-material";
import { PopMenuItem } from "../PopMenuItem";
import Link from "next/link";

export const SendFeedbackPopMenuItem = () => {
  return (
    <Link href="#" className="w-full h-max">
      <PopMenuItem leftIcon={<ForumOutlined />} hoveredLeftIcon={<Forum />}>
        의견보내기
      </PopMenuItem>
    </Link>
  );
};
