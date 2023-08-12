import { JSONS } from "@constants";
import { getBypassDiskCacheURL } from "@utils";
import axios from "axios";

export type MaintenanceMode = {
  enable: boolean; // 점검 활성화 여부
  type: "full" | null; // 점검 유형(full: 전체 점검)
  message: string | null; // 안내 메시지
  noticeHref: string | null; // 공지글 주소
};

export const GETMaintenanceMode = async (): Promise<
  MaintenanceMode | undefined
> => {
  try {
    const result = await axios.get(
      getBypassDiskCacheURL(JSONS.COMMON.MAINTENANCE_MODE)
    );
    return result.data;
  } catch (e) {
    return undefined;
  }
};
