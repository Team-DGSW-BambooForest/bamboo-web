import { Avatar } from "@bamboo/ui";
import React from "react";
import { BiImageAlt } from "react-icons/bi";
import {
  HomeItemCommentBox,
  HomeItemCommentForm,
  HomeItemCommentInput,
  HomeItemCommentInputText,
  HomeItemInputBox,
  HomeItemInputContainer,
} from "./CommentInput.style";
import Haerin from "../../../asset/haerin.jpeg";

const CommentInput = () => {
  return (
    <HomeItemCommentBox>
      <Avatar size="sm" src={Haerin.src} alt="이미지 없음" />
      <HomeItemInputBox>
        <HomeItemInputContainer>
          <HomeItemCommentInput placeholder="댓글을 입력하세요" />
          <BiImageAlt />
        </HomeItemInputContainer>
        <HomeItemCommentInputText>
          댓글을 게시하려면 Enter 키를 누르세요
        </HomeItemCommentInputText>
      </HomeItemInputBox>
    </HomeItemCommentBox>
  );
};

export default CommentInput;
