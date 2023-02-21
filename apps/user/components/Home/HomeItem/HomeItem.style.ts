import styled from "styled-components";

export const HomeItemTopWrap = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 12px;
`;

export const HomeItemProfileContainer = styled.div`
  display: flex;

  width: 100%;
`;

export const HomeItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
  row-gap: 4px;
`;

export const HomeItemUserName = styled.p`
  font-size: 16px;

  color: #2f2f2f;
`;

export const HomeItemDate = styled.p`
  font-size: 12px;
  color: #afafaf;
`;

export const HomeItemContent = styled.p`
  font-size: 14px;

  color: #2f2f2f;
`;

export const HomeItemHr = styled.hr`
  width: 532px;
  background: #f2f2f2;

  border-bottom: none;
`;

export const HomeItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  row-gap: 28px;
  margin-left: 310px;
`;
