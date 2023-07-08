import { Brightness6, Brightness6Outlined } from "@mui/icons-material";
import { PopMenuItem } from "..";

export const EtcPopMenuItems = () => {
  return (
    <>
      <PopMenuItem
        leftIcon={<Brightness6Outlined />}
        hoveredLeftIcon={<Brightness6 />}
      >
        다크모드 사용
      </PopMenuItem>
    </>
  );
};
