import styled from "styled-components";

export const HoldItemTopWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HoldItemProfileWrap = styled.div`
  min-width: 121px;
  min-height: 48px;

  display: flex;
  align-items: center;

  column-gap: 12px;
`;

export const HoldItemUserBox = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 4px;
`;

export const HoldItemUsername = styled.p`
  font-size: 16px;
`;

export const HoldItemDate = styled.p`
  color: #afafaf;
  font-size: 12px;
`;

export const HoldItemContent = styled.p`
  font-size: 14px;
`;
