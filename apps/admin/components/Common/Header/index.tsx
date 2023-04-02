import Image from "next/image";
import {
  AdminHeaderContainer,
  AdminHeaderLeftSection,
  AdminHeaderMidLeftSection,
  AdminHeaderMidRightSection,
  AdminHeaderMidSection,
  AdminHeaderSearchContainer,
  AdminHeaderSearchInput,
  HeaderLogoutText,
} from "./style";
import Logo from "../../../../user/asset/logo/Logo.svg";
import { AiFillHome } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

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
      <AdminHeaderMidSection>
        <AdminHeaderMidLeftSection onClick={() => router.push("/item")}>
          <AiFillHome width={32} height={32} color="#ADADAD" />
        </AdminHeaderMidLeftSection>
        <AdminHeaderMidRightSection onClick={() => router.push("/")}>
          <MdEmail width={32} height={32} color="#ADADAD" />
        </AdminHeaderMidRightSection>
      </AdminHeaderMidSection>
      <HeaderLogoutText>로그아웃</HeaderLogoutText>
    </AdminHeaderContainer>
  );
};

export default Header;
