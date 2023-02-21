import { Avatar, Modal } from "@bamboo/ui";
import useModal from "@bamboo/ui/stories/Modal/hooks/useModal";
import { checkAccessToken } from "custom-util";
import React from "react";
import Haerin from "../../../asset/Haerin.jpeg";
import ikmyung from "../../../asset/ikmyung.svg";
import SelectRole from "../Select/SelectRole";
import {
  ProfileBarContainer,
  ProfileContainer,
  UserRole,
  UserRoleText,
} from "./Profile.style";

const ProfileBar = () => {
  const { tokenValue } = checkAccessToken();
  const { close, isOpened, open } = useModal();
  return (
    <>
      <ProfileBarContainer>
        <ProfileContainer onClick={open}>
          {tokenValue ? (
            <>
              <Avatar size="lg" src={Haerin.src} />
              <UserRole>백승하</UserRole>
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
      <Modal isOpened={isOpened} onClose={close}>
        <SelectRole />
      </Modal>
    </>
  );
};

export default ProfileBar;
