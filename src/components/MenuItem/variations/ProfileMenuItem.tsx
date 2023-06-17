import { AlternateEmail, BookOutlined } from "@mui/icons-material";
import { MenuItem } from "..";

export const ProfileMenuItem = () => {
  return (
    <MenuItem
      className="h-[80px] gap-14 pl-16"
      iconAreaClassName="!w-[45px] min-w-[45px] !h-[45px] min-h-[45px] my-auto rounded-full bg-teal-500"
    >
      <div className="flex flex-col items-start justify-center">
        <div className="mb-8 text-18 leading-1">사용자 이름</div>
        <div className="text-14">
          <div className="flex items-center justify-start gap-2 leading-1">
            <BookOutlined sx={{ fontSize: "14px" }} />
            <span>노래책이름</span>
          </div>
          <div className="flex items-center justify-start gap-2 leading-1">
            <AlternateEmail sx={{ fontSize: "14px" }} />
            <span>musicbook_custom_id</span>
          </div>
        </div>
      </div>
    </MenuItem>
  );
};
