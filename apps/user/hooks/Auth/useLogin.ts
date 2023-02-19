import { setToken } from "custom-util";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useEffect } from "react";
import AuthRepository from "../../repository/auth/auth.repository";

const useLogin = () => {
  const router = useRouter();
  const query = router.query;

  const request = useCallback(async () => {
    try {
      const { accessToken, refreshToken } = await AuthRepository.login({
        code: query.code as string,
      });
      setToken("accessToken", accessToken);
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
