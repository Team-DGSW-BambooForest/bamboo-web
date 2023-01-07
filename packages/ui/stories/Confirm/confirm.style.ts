import styled from "styled-components";

export const CofirmContainer = styled.div`
  box-sizing: border-box;

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  font-family: "Noto Sans KR";
  font-style: normal;

  hr {
    margin-top: 12px;
    margin-bottom: 12px;
    border: 1px solid #f2f2f2;
  }
`;

export const ConfirmHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
  }
  div {
    cursor: pointer;
  }
`;

export const ConfirmContent = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  margin-bottom: 12px;
`;
