import styled from "styled-components";

export const DetailCommentBox = styled.div`
  min-width: 532px;
  min-height: 34px;

  display: flex;
  padding-left: 30px;
  margin-top: 12px;
`;

export const DetailItemInputContainer = styled.div`
  width: 460px;
  height: 34px;

  display: flex;
  align-items: center;

  padding-left: 16px;
  padding-right: 9px;

  border-radius: 15px;
  background-color: #f3f4f6;
`;

export const DetailCommentInput = styled.input`
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

export const DetailCommentForm = styled.form``;

export const DetailCommentInputText = styled.p`
  font-size: 12px;
  color: #4b4b4b;

  margin-left: 8px;
`;

export const DetailInputBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 4px;

  margin-left: 8px;
`;
