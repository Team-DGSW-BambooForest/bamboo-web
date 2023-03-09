import { Avatar } from "@bamboo/ui";
import { useState } from "react";
import { CommentType } from "../../../types/Comment/comment.type";
import CommentInput from "../CommentInput/CommentInput";
import * as S from "./HandleChildComment.style";

interface Props {
  item: CommentType;
  postId: number;
}

const HandleChildComment = ({ item, postId }: Props) => {
  const [inputModal, setInputModal] = useState(false);

  return (
    <S.CommentContainer>
      <S.CommentWrap>
        <Avatar size="sm" src={item.profileImage} />
        <S.CommentBoxWrap>
          <S.CommentBox>
            <S.CommentUser>{item.writer}</S.CommentUser>
            <S.CommentText>{item.content}</S.CommentText>
          </S.CommentBox>
          <S.CommentBottomWrap>
            <S.CommentAddText onClick={() => setInputModal((prev) => !prev)}>
              답글 달기
            </S.CommentAddText>
            <S.CommentUploadTime>{item.diffTime}</S.CommentUploadTime>
          </S.CommentBottomWrap>
        </S.CommentBoxWrap>
      </S.CommentWrap>
      {inputModal && <CommentInput postId={postId} />}
    </S.CommentContainer>
  );
};

export default HandleChildComment;
