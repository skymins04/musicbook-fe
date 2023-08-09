import Link from "next/link";
import { PopMenuItem } from "../PopMenuItem";
import { Dashboard, DashboardOutlined } from "@mui/icons-material";

export const MyDashboardPopMenuItem = () => {
  return (
    <Link href="#" className="h-max w-full">
      <PopMenuItem
        leftIcon={<DashboardOutlined />}
        hoveredLeftIcon={<Dashboard />}
      >
        노래책 대시보드
      </PopMenuItem>
    </Link>
  );
};
