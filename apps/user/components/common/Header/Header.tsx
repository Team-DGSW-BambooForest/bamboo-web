import React from "react";
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
import { checkAccessToken, clearToken } from "custom-util";
import { useRouter } from "next/router";
import { conf } from "custom-util/config";

const Header = () => {
  const router = useRouter();
  const { tokenValue } = checkAccessToken();
  const authUrl = `https://dauth.b1nd.com/login?client_id=${conf.clientId}&redirect_uri=http://localhost:3001/callback`;
  return (
    <HeaderStyle>
      <HeaderLeftSection>
        <Image
          onClick={() => router.push("/")}
          src={Logo}
          alt=""
          style={{ marginLeft: "56px" }}
        />
        <HeaderSearchContainer>
          <Image src={searchIcon} alt="" />
          <HeaderSeacrhInput placeholder="검색어를 입력하세요" />
        </HeaderSearchContainer>
      </HeaderLeftSection>
      {tokenValue ? (
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
