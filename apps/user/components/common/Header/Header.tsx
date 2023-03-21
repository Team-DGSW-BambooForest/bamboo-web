import React, { useEffect, useState } from "react";
import {
  HeaderContainer,
  HeaderLeftSection,
  HeaderLogoutText,
  HeaderSeacrhInput,
  HeaderSearchContainer,
} from "./style";
import Image from "next/image";
import Logo from "../../../asset/logo/Logo.svg";
import searchIcon from "../../../asset/icon/searchIcon.svg";
import { useRouter } from "next/router";
import { conf } from "custom-util/config";
import { clearToken, getToken } from "../../../util/localstorage";
import useSearchPost from "../../../hooks/Post/useSearchPost";

const Header = () => {
  const router = useRouter();
  const authUrl = `https://dauth.b1nd.com/login?client_id=${conf.clientId}&redirect_uri=http://localhost:3001/callback`;
  const [tokenState, setTokenState] = useState<string | null>();

  useEffect(() => {
    setTokenState(getToken().accessToken);
  }, [tokenState]);
  const { keyword, onChangeKeyword, onSearchKeyword } = useSearchPost();
  return (
    <HeaderContainer onSubmit={onSearchKeyword}>
      <HeaderLeftSection>
        <Image
          onClick={() => {
            router.push("/");
          }}
          src={Logo}
          alt="이미지 없음"
          style={{ marginLeft: "56px" }}
        />
        <HeaderSearchContainer>
          <Image src={searchIcon} alt="이미지 없음" />
          <HeaderSeacrhInput
            value={keyword}
            onChange={onChangeKeyword}
            placeholder="검색어를 입력하세요"
          />
        </HeaderSearchContainer>
      </HeaderLeftSection>
      {tokenState ? (
        <HeaderLogoutText
          onClick={() => {
            clearToken();
            window.location.reload();
          }}
        >
          로그아웃
        </HeaderLogoutText>
      ) : (
        <HeaderLogoutText onClick={() => (window.location.href = authUrl)}>
          로그인
        </HeaderLogoutText>
      )}
    </HeaderContainer>
  );
};

export default Header;
