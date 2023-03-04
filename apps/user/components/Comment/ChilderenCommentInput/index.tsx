import { Avatar } from "@bamboo/ui";
import React from "react";
import { BiImageAlt } from "react-icons/bi";
import Haerin from "../../../asset/haerin.jpeg";
import { stopBubbling } from "custom-util";
import * as S from "./style";
import useChildCommentPost from "../../../hooks/Post/useDetailComment";

interface Props {
  parentCommentId: number;
  postId: number;
}

const ChilderenCommentInput = ({ parentCommentId, postId }: Props) => {
  const { onChange, onSubmit, content } = useChildCommentPost({
    postId,
    parentCommentId,
  });
  return (
    <S.DetailCommentBox onClick={(e) => stopBubbling(e)}>
      <Avatar size="sm" src={Haerin.src} alt="" />
      <S.DetailCommentForm onSubmit={onSubmit}>
        <S.DetailInputBox>
          <S.DetailItemInputContainer>
            <S.DetailCommentInput
              onChange={onChange}
              placeholder="댓글을 입력하세요"
              value={content}
            />
            <BiImageAlt />
          </S.DetailItemInputContainer>
          <S.DetailCommentInputText>
            댓글을 게시하려면 ANG 키를 누르세요
          </S.DetailCommentInputText>
        </S.DetailInputBox>
      </S.DetailCommentForm>
    </S.DetailCommentBox>
  );
};

export default ChilderenCommentInput;
