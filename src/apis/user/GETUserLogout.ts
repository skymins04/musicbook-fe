import { API_HOST } from "@/constants/host";
export const GETUserLogout = async () => {
  window.location.href = `${API_HOST}/user/logout`;
};
