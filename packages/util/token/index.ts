import { Cookies } from "react-cookie";
import axios from "axios";

type CookieType = {
  accessToken: string;
  refreshToken: string;
};
const cookies = new Cookies();

export const getToken = (): CookieType => {
  const { accessToken, refreshToken }: CookieType = cookies.getAll();
  return { accessToken, refreshToken };
};

const TIME = 1000 * 60 * 60 * 24;

export const setToken = (accessToken: string, refreshToken: string) => {
  axios.defaults.headers.common.Authorization = "Bearer " + accessToken;
  const expires = new Date();
  expires.setDate(Date.now() + TIME);

  cookies.set("accessToken", accessToken, {
    path: "/",
    expires,
    httpOnly: true,
  });

  cookies.set("refreshToken", refreshToken, {
    path: "/",
    expires,
    httpOnly: true,
  });
};

export const clearToken = () => {
  cookies.remove("accessToken");
  cookies.remove("refreshToken");
};

export const checkAccessToken = () => {
  const tokenValue = cookies.get("accessToken");
  return tokenValue ? true : false;
};
