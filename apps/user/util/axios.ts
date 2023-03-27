import axios, {
  AxiosRequestConfig,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import { conf } from "./config";
import { clearToken, getToken, setToken } from "./localstorage";
import router from "next/router";

export const customAxios = axios.create({
  baseURL: conf.baseUrl,
  timeout: 10000,
});

customAxios.interceptors.request.use(
  async function (config: any) {
    const accessToken = getToken().accessToken;
    accessToken &&
      (config.headers = {
        Authorization: `Bearer ${accessToken}`,
      });
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

customAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    if (axios.isAxiosError(error) && error.response) {
      const { config, response } = error;
      if (response.data.status === 401 && getToken().refreshToken) {
        try {
          const {
            data: { accessToken, refreshToken },
          } = await axios({
            method: "POST",
            url: `${conf.baseUrl}/user/token-reniew`,
            headers: {
              "refresh-token": `Bearer ${getToken().refreshToken}`,
            },
          });

          setToken(accessToken, refreshToken);
          if (config?.headers)
            config.headers.Authorization = `Bearer ${accessToken}`;

          return axios(config!!);
        } catch (e) {
          if (
            error.response.data.status === 401 ||
            error.response.data.status === 404
          ) {
            router.push("/login");
            clearToken();
          }
        }
      } else return Promise.reject(error);
    }
  }
);
