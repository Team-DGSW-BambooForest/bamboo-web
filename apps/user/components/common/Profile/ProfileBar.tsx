import { Avatar } from "@bamboo/ui";
import { checkAccessToken } from "custom-util";
import React from "react";
import profile from "../../../asset/common/profile.png";
import {
  ProfileBarContainer,
  ProfileContainer,
  UserRole,
  UserRoleText,
} from "./style";

const ProfileBar = () => {
  const { tokenValue } = checkAccessToken();
  return (
    <ProfileBarContainer>
      <ProfileContainer>
        {tokenValue ? (
          <>
            <Avatar size="lg" src={profile.src} />
            <UserRole>백승하</UserRole>
            <UserRoleText>기명으로 제보를 할 수 있어요!</UserRoleText>
          </>
        ) : (
          <>
            <Avatar size="lg" src={profile.src} />
            <UserRole>익명</UserRole>
            <UserRoleText>익명으로 제보를 할 수 있어요!</UserRoleText>
          </>
        )}
      </ProfileContainer>
    </ProfileBarContainer>
  );
};

export default ProfileBar;
