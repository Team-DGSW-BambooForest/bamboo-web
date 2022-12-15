import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { conf } from "../config";
import { clearToken, getToken, setToken } from "../token";
import router from "next/router";

const customAxios = axios.create({
  baseURL: conf.baseUrl,
  timeout: 10000,
});

customAxios.interceptors.request.use(
  async function (config: AxiosRequestConfig<any>) {
    const accessToken = await getToken().accessToken;
    accessToken
      ? (config.headers = {
          Authorization: `Bearer ${accessToken}`,
        })
      : null;
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
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
            method: "",
            url: `${conf.baseUrl}/`,
            headers: {
              "Refresh-Token": `Bearer ${getToken().refreshToken}`,
            },
          });

          setToken(accessToken, refreshToken);
          if (config?.headers) {
            config.headers.Authorization = `Bearer ${accessToken}`;
          }
          return axios(config!!);
        } catch (e) {
          if (
            error.response.data.status === 401 ||
            error.response.data.status === 404
          ) {
            console.log("login failure");
            router.push("/login");
            clearToken();
          }
        }
      } else return Promise.reject(error);
    }
  }
);

export default customAxios;
