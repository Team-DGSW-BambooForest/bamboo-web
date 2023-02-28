export const getToken = () => {
  return {
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
  };
};

export const setToken = (access: string, refresh: string) => {
  localStorage.setItem("accessToken", access);
  localStorage.setItem("refreshToken", refresh);
};

export const clearToken = () => {
  localStorage.clear();
};
