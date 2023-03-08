import React, { useEffect, useState } from "react";
import {
  HeaderLeftSection,
  HeaderLogoutText,
  HeaderSeacrhInput,
  HeaderSearchContainer,
  HeaderStyle,
} from "./style";
import Image from "next/image";
import Logo from "../../../asset/logo/Logo.svg";
import searchIcon from "../../../asset/icon/searchIcon.svg";
import { clearToken } from "custom-util";
import { useRouter } from "next/router";
import { conf } from "custom-util/config";
import { getToken } from "../../../util/localstorage";

const Header = () => {
  const router = useRouter();
  const authUrl = `https://dauth.b1nd.com/login?client_id=${conf.clientId}&redirect_uri=http://localhost:3001/callback`;
  const [tokenState, setTokenState] = useState<string | null>();

  useEffect(() => {
    setTokenState(getToken().accessToken);
  }, [tokenState]);

  return (
    <HeaderStyle>
      <HeaderLeftSection>
        <Image
          onClick={() => router.push("/")}
          src={Logo}
          alt="이미지 없음"
          style={{ marginLeft: "56px" }}
        />
        <HeaderSearchContainer>
          <Image src={searchIcon} alt="이미지 없음" />
          <HeaderSeacrhInput placeholder="검색어를 입력하세요" />
        </HeaderSearchContainer>
      </HeaderLeftSection>
      {tokenState ? (
        <HeaderLogoutText onClick={clearToken}>로그아웃</HeaderLogoutText>
      ) : (
        <HeaderLogoutText onClick={() => (window.location.href = authUrl)}>
          로그인
        </HeaderLogoutText>
      )}
    </HeaderStyle>
  );
};

export default Header;
