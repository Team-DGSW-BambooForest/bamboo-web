import { Avatar } from "@bamboo/ui";
import React, { useState } from "react";
import CommentInput from "../../Common/CommentInput/CommentInput";
import * as S from "../HandleChildComment/HandleChildComment.style";

interface Props {
  data: {
    id: number;
    profileImage: string;
    writer: string;
    content: string;
    createdAt: string;
  };
}

const ChilderenComment = ({ data }: Props) => {
  return (
    <>
      <S.DetailCommentContainer>
        <S.CommentWrap>
          <Avatar size="sm" src={data?.profileImage} />
          <S.CommentBoxWrap>
            <S.CommentBox>
              <S.CommentUser>{data?.writer}</S.CommentUser>
              <S.CommentText>{data?.content}</S.CommentText>
            </S.CommentBox>
            <S.CommentBottomWrap>
              <S.CommentUploadTime>{data?.createdAt}</S.CommentUploadTime>
            </S.CommentBottomWrap>
          </S.CommentBoxWrap>
        </S.CommentWrap>
      </S.DetailCommentContainer>
    </>
  );
};

export default ChilderenComment;
