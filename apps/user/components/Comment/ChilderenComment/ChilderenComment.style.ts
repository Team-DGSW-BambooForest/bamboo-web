import styled from "styled-components";

export const CommentContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  padding-left: 8px;
  padding-left: 8px;
`;

export const CommentWrap = styled.div`
  display: flex;

  column-gap: 8px;
`;

export const CommentBoxWrap = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 8px;
`;

export const CommentBox = styled.div`
  min-width: 86px;
  min-height: 53px;

  background: #f3f4f6;
  border-radius: 15px;

  display: flex;
  flex-direction: column;

  padding-top: 8px;
  padding-left: 14px;
  padding-right: 14px;

  row-gap: 4px;
`;

export const CommentUser = styled.p`
  font-size: 12px;

  color: #2f2f2f;
`;

export const CommentText = styled.p`
  font-size: 14px;

  color: #4b4b4b;
`;

export const CommentBottomWrap = styled.div`
  display: flex;
  column-gap: 4px;
  padding-left: 10px;
`;

export const CommentAddText = styled.div`
  font-size: 10px;
  color: #4b4b4b;

  cursor: pointer;
`;

export const CommentUploadTime = styled.p`
  font-size: 10px;

  color: #afafaf;
`;
