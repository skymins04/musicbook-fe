import Link from "next/link";
import { PopMenuItem } from "../PopMenuItem";
import { OpenInNew, Speaker, SpeakerOutlined } from "@mui/icons-material";

export const OpenMRSpeakerPopMenuItem = () => {
  return (
    <Link href="#" target="_blank" className="h-max w-full">
      <PopMenuItem
        leftIcon={<SpeakerOutlined />}
        hoveredLeftIcon={<Speaker />}
        rightIcon={<OpenInNew sx={{ width: "16px", height: "16px" }} />}
      >
        MR 스피커 열기
      </PopMenuItem>
    </Link>
  );
};
