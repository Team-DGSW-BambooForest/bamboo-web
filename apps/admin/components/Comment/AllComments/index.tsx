import { Avatar } from "@bamboo/ui";
import React, { useState } from "react";
import { GetComments } from "../../../types/Comment/comment.type";
import ChilderenCommentInput from "../ChilderenCommentInput";
import ChilderenComment from "../ChildrenComment";
import * as S from "../HandleChildComment/style";

interface Props {
  data: GetComments;
  postId: number;
}

const AllComments = ({ data, postId }: Props) => {
  const [inputModal, setInputModal] = useState(false);

  return (
    <S.CommentContainer>
      <S.CommentWrap>
        <Avatar size="sm" src={data.comment.profileImage} />
        <S.CommentBoxWrap>
          <S.CommentBox>
            <S.CommentUser>{data.comment.writer}</S.CommentUser>
            <S.CommentText>{data.comment.content}</S.CommentText>
          </S.CommentBox>
          <S.CommentBottomWrap>
            <S.CommentAddText onClick={() => setInputModal((prev) => !prev)}>
              답글 달기
            </S.CommentAddText>
            <S.CommentUploadTime>{data.comment.createdAt}</S.CommentUploadTime>
          </S.CommentBottomWrap>
        </S.CommentBoxWrap>
      </S.CommentWrap>
      {inputModal && (
        <ChilderenCommentInput
          parentCommentId={data.comment.id}
          postId={postId}
          setInputModal={setInputModal}
        />
      )}
      {data.reply.map((data) => (
        <ChilderenComment data={data} />
      ))}
    </S.CommentContainer>
  );
};

export default AllComments;
