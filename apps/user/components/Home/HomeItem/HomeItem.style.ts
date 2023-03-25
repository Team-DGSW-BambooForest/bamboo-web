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
  margin-left: 15%;

  z-index: -100;
`;

export const HomeItemBottomWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 12px;
`;

export const CommentCount = styled.p`
  font-size: 12px;
  color: #4b4b4b;

  cursor: pointer;
`;

export const HomeItemImage = styled.img`
  width: 300px;
  height: 300px;

  overflow: hidden;
`;
