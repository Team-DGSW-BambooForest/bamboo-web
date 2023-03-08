import styled from "styled-components";

export const MainDetailContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
`;

export const DetailContainer = styled.div`
  padding-left: 310px;

  padding-top: 35px;
  padding-bottom: 30px;
`;

export const TopWrap = styled.div`
  min-width: 121px;
  min-height: 48px;

  display: flex;
  align-items: center;

  column-gap: 12px;
`;

export const TopItemInfo = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 4px;
`;

export const TopItemUserName = styled.p`
  font-size: 16px;

  color: #2f2f2f;
`;

export const TopItemDate = styled.p`
  font-size: 12px;

  color: #afafaf;
`;

export const ItemContent = styled.p`
  font-size: 14px;

  color: #2f2f2f;
`;
