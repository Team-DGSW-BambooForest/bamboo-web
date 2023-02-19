import styled from "styled-components";

export const HomeItemProfileContainer = styled.div`
  display: flex;
`;

export const HomeItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;

export const HomeItemUserName = styled.p``;

export const HomeItemDate = styled.p``;

export const HomeItemContent = styled.p`
  margin-top: 12px;
`;

export const HomeItemHr = styled.hr`
  width: 532px;
  margin-top: 12px;
`;

export const HomeItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  row-gap: 28px;
  margin-left: 310px;
`;

export const HomeItemCommentInputContainer = styled.div`
  min-width: 532px;
  min-height: 34px;
  display: flex;
  margin-top: 12px;
`;

export const HomeItemInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 490px;
  height: 34px;
  margin-left: 8px;
  border-radius: 15px;
  background-color: #f3f4f6;
  padding-left: 16px;
  padding-right: 9px;
`;

export const HomeItemCommentInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  ::placeholder {
    color: #adadad;
    font-size: 12px;
  }
`;
