import { Avatar, Modal } from "@bamboo/ui";
import useModal from "@bamboo/ui/stories/Modal/hooks/useModal";
import React, { useEffect, useRef, useState } from "react";
import { useGetUserQuery } from "../../../queries/User/user.query";
import { getToken } from "../../../util/localstorage";
import SelectRole from "../Select/SelectRole";
import Anonymous from "../../../asset/anonymous.svg";
import {
  ProfileBarContainer,
  ProfileContainer,
  UserRole,
  UserRoleText,
} from "./Profile.style";

const ProfileBar = () => {
  const { close, isOpened, open } = useModal();
  const [tokenState, setTokenState] = useState<string | null>();
  const { data } = useGetUserQuery();
  useEffect(() => {
    setTokenState(getToken().accessToken);
  }, []);

  return (
    <>
      <ProfileBarContainer>
        <ProfileContainer onClick={open}>
          {tokenState ? (
            <>
              <Avatar size="lg" src={data?.profileImage!!} />
              <UserRole>기명이</UserRole>
              <UserRoleText>기명으로 제보를 할 수 있어요!</UserRoleText>
            </>
          ) : (
            <>
              <Avatar size="lg" src={Anonymous.src} />
              <UserRole>익명이</UserRole>
              <UserRoleText>익명으로 제보를 할 수 있어요!</UserRoleText>
            </>
          )}
        </ProfileContainer>
      </ProfileBarContainer>
    </>
  );
};

export default ProfileBar;
