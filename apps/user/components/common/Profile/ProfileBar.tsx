import { Avatar, Modal } from "@bamboo/ui";
import useModal from "@bamboo/ui/stories/Modal/hooks/useModal";
import React, { useEffect, useRef, useState } from "react";
import Haerin from "../../../asset/Haerin.jpeg";
import ikmyung from "../../../asset/ikmyung.svg";
import { getToken } from "../../../util/localstorage";
import SelectRole from "../Select/SelectRole";
import {
  ProfileBarContainer,
  ProfileContainer,
  UserRole,
  UserRoleText,
} from "./Profile.style";

const ProfileBar = () => {
  const { close, isOpened, open } = useModal();
  const [tokenState, setTokenState] = useState<string | null>();

  useEffect(() => {
    setTokenState(getToken().accessToken);
  }, []);

  return (
    <>
      <ProfileBarContainer>
        <ProfileContainer onClick={open}>
          {tokenState ? (
            <>
              <Avatar size="lg" src={Haerin.src} />
              <UserRole>기명이</UserRole>
              <UserRoleText>기명으로 제보를 할 수 있어요!</UserRoleText>
            </>
          ) : (
            <>
              <Avatar size="lg" src={ikmyung.src} />
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
