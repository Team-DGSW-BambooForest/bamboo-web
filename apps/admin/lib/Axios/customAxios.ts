import axios, { AxiosError } from "axios";
import CONFIG from "../../config/config.json";
import { clearToken, getToken, setToken } from "../../util/localstorage";
import router from "next/router";

export const customAxios = axios.create({
  baseURL: CONFIG.SERVER,
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
            url: `${CONFIG.SERVER}/user/token-reniew`,
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
