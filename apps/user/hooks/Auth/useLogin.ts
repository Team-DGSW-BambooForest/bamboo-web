import { setToken } from "../../util/localstorage";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useEffect } from "react";
import { Cookies } from "react-cookie";
import authRepository from "../../repository/Auth/auth.repository";

const useLogin = () => {
  const router = useRouter();
  const query = router.query;
  const cookies = new Cookies();

  const request = useCallback(async () => {
    try {
      const { token, refreshToken } = await authRepository.login({
        code: query.code as string,
      });
      setToken(token, refreshToken);

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
