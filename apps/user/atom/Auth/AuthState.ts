import { atom, selector } from "recoil";

export interface AuthAtomType {
  isLogined: boolean;
  userName: string | null;
}

export const AuthState = atom<AuthAtomType>({
  key: "authState",
  default: {
    isLogined: true,
    userName: null,
  },
});

/**
 * 로그인 상태 여부 체크
 * @returns boolean
 */
export const getLoginCheck = selector({
  key: "getLoginCheck",
  get: ({ get }) => {
    const auth = get(AuthState);
    return auth.isLogined;
  },
});

/**
 * 로그인된 유저의 이름
 * @returns string
 */
export const getUserName = selector({
  key: "getUserName",
  get: ({ get }) => {
    const auth = get(AuthState);
    return auth.userName;
  },
});
