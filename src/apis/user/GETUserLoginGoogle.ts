import { API_HOST } from "@/constants/host";

export const GETUserLoginTwitch = () => {
  window.location.href = `${API_HOST}/user/login/google`;
};
