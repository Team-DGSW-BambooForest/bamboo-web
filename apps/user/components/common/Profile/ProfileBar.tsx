import { Avatar } from "@bamboo/ui";
import React from "react";
import profile from "../../../asset/common/profile.png";
import {
  ProfileBarContainer,
  ProfileContainer,
  UserRole,
  UserRoleText,
} from "./style";

const ProfileBar = () => {
  return (
    <ProfileBarContainer>
      <ProfileContainer>
        <Avatar size="lg" src={profile.src} />
        <UserRole>백승하</UserRole>
        <UserRoleText>기명으로 제보를 할 수 있어요!</UserRoleText>
      </ProfileContainer>
    </ProfileBarContainer>
  );
};

export default ProfileBar;
