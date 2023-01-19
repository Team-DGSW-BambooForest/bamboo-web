import React from "react";
import styled from "styled-components";

const ProfileBar = () => {
  return <ProfileBarDiv>profilebar</ProfileBarDiv>;
};

const ProfileBarDiv = styled.div`
  width: 360px;
  height: calc(100vh - 80px);
  background-color: pink;
  position: fixed;
  top: 80px;
  left: 0;
`;

export default ProfileBar;
