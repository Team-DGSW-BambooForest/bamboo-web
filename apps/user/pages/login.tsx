import React, { ChangeEvent } from "react";
import { stopReload } from "custom-util";
import { useRecoilState } from "recoil";
import { AuthState, AuthAtomType } from "../atom/Auth/AuthState";
import { useRouter } from "next/router";

const Login = () => {
  const [_, setAuthState] = useRecoilState<AuthAtomType>(AuthState);
  /**
   * 페이지 이동을 위해 선언
   */
  const router = useRouter();
  /**
   * 1. form 태그이기에 새로고침을 막기위해 stopReload 사용
   * 2. setAuthState를 통해 로그인 상태 변경
   * 3. 라우팅을 이용해 메인페이지로 이동
   *
   * @todo api 연결 필요, 더미 값으로 처리되어 있는 상태
   */
  const loginRequest = (event: ChangeEvent<HTMLFormElement>) => {
    stopReload(event);
    setAuthState({ isLogined: true, userName: "강성훈" });
    router.prefetch("/");
  };

  return (
    <form onSubmit={loginRequest}>
      <input type="text" required name="id" id="id" />
      <input type="password" required name="pw" id="pw" />
      <button>로그인</button>
    </form>
  );
};

export default Login;
