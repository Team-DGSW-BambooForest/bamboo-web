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
import { clearToken } from "custom-util";

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderLeftSection>
        <Image src={Logo} alt="" style={{ marginLeft: "56px" }} />
        <HeaderSearchContainer>
          <Image src={searchIcon} alt="" />
          <HeaderSeacrhInput placeholder="검색어를 입력하세요" />
        </HeaderSearchContainer>
      </HeaderLeftSection>
      {<HeaderLogoutText onClick={clearToken}>로그아웃</HeaderLogoutText>}
    </HeaderStyle>
  );
};

export default Header;
