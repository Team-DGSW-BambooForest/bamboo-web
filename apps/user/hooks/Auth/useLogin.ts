import { setToken } from "custom-util";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useEffect } from "react";
import authRepository from "../../repository/Auth/auth.repository";

const useLogin = () => {
  const router = useRouter();
  const query = router.query;

  const request = useCallback(async () => {
    try {
      const { token, refreshToken } = await authRepository.login({
        code: query.code as string,
      });
      setToken("accessToken", token);
      setToken("refreshToken", refreshToken);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (query) {
      request();
    }
  }, [query]);

  return {
    request,
  };
};

export default useLogin;
