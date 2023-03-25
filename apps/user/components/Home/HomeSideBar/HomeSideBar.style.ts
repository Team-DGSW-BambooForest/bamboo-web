import styled from "styled-components";

export const HomeSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  min-height: 621px;

  position: fixed;
  top: 120px;
  right: 13%;

  gap: 18px;

  @media screen and (max-width: 1600px) {
    right: 8%;
  }
`;
