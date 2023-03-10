import styled from "styled-components";
import background from "../../../../user/asset/background/background.svg";

export const AdminProfileBarContainer = styled.div`
  width: 360px;
  height: calc(100vh - 80px);
  position: fixed;
  top: 80px;
  left: 0;

  background-image: url(${background.src});
  z-index: 99;
`;

export const AdminProfileContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 110px;

  color: #ffffff;
`;

export const AdminRole = styled.p`
  margin-top: 18px;

  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
`;

export const AdminText = styled.p`
  margin-top: 8px;

  font-weight: 400;
  font-size: 18px;
  line-height: 26px;

  letter-spacing: -0.0048em;
`;
