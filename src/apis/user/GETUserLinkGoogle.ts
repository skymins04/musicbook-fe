import { API_HOST } from "@/constants/host";

export const GETUserLinkGoogle = () => {
  window.location.href = `${API_HOST}/user/link/google`;
};
