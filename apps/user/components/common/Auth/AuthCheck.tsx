import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { getLoginCheck } from "../../../atom/Auth/AuthState";

interface AuthCheckProps {
  children: React.ReactNode;
}

const AuthCheck = ({ children }: AuthCheckProps) => {
  const isLogined = useRecoilValue(getLoginCheck);
  const router = useRouter();

  useEffect(() => {
    if (!isLogined) {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogined, router.pathname]);

  return <>{children}</>;
};

export default AuthCheck;
