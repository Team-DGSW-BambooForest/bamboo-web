import Image from "next/image";
import {
  AdminHeaderContainer,
  AdminHeaderLeftSection,
  AdminHeaderSearchContainer,
  AdminHeaderSearchInput,
  HeaderLogoutText,
} from "./style";
import Logo from "../../../../user/asset/logo/Logo.svg";

const Header = () => {
  return (
    <AdminHeaderContainer>
      <AdminHeaderLeftSection>
        <Image
          src={Logo.src}
          width={78}
          height={29}
          alt="logo"
          style={{ marginLeft: "56px" }}
        />
        <AdminHeaderSearchContainer>
          <AdminHeaderSearchInput />
        </AdminHeaderSearchContainer>
      </AdminHeaderLeftSection>
      <HeaderLogoutText>로그아웃</HeaderLogoutText>
    </AdminHeaderContainer>
  );
};

export default Header;
