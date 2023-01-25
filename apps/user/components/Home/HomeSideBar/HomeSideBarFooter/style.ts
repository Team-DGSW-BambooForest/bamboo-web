import styled from "styled-components";

export const HomeSideBarFooterBox = styled.div`
  min-width: 263px;
  min-height: 42px;
  color: #adadad;
  display: flex;
  flex-direction: column;

  margin-top: 18px;

  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.0048em;
`;

export const HomeSideBarFooterLinkBox = styled.div`
  display: flex;
`;

export const HomeSideBarFooterText = styled.p`
  & + & {
    border-left: 1px solid #adadad;
    padding-left: 8px;
    margin-left: 8px;
  }

  cursor: pointer;
  height: 8px;
  line-height: 0.7rem;
`;

export const HomeSideFooterBottomText = styled.p`
  margin-top: 8px;
`;
