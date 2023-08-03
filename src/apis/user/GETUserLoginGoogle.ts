import { API_HOST } from "@/constants/host";

export const GETUserLoginGoogle = () => {
  window.location.href = `${API_HOST}/user/login/google`;
};
