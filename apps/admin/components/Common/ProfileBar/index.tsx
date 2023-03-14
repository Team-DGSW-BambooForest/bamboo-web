import {
  AdminProfileBarContainer,
  AdminProfileContainer,
  AdminRole,
  AdminText,
} from "./style";
import Image from "next/image";
import AdminImage from "../../../asset/Anonymous.svg";

const ProfileBar = () => {
  return (
    <AdminProfileBarContainer>
      <AdminProfileContainer>
        <Image
          width={100}
          height={100}
          alt="어드민"
          src={AdminImage}
          style={{ borderRadius: "100px" }}
        />
        <AdminRole>어드민</AdminRole>
        <AdminText>어드민 페이지 입니다</AdminText>
      </AdminProfileContainer>
    </AdminProfileBarContainer>
  );
};
export default ProfileBar;
