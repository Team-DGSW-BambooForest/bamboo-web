import React from "react";
import { ConfirmProps } from "./confirm.interface";
import {
  CofirmContainer,
  ConfirmContent,
  ConfirmHeader,
} from "./confirm.style";
import CancelImg from "../assets/cancel";

const TextObject = {
  choose: {
    title: "내 프로필 선택",
    content: "이 게시물에서 다른 프로필로 활동하려면 전환하세요.",
  },
  comment: {
    title: "댓글을 삭제하시겠습니까?",
    content: "이 댓글을 삭제하시겠습니까?",
  },
  write: {
    title: "제보하시겠습니까?",
    content: "이 글을 제보하시겠습니까?",
  },
  delete: {
    title: "댓글을 삭제하시겠습니까?",
    content: "이 댓글을 삭제하시겠습니까?",
  },
};

export const Confirm = ({ close, text, children }: ConfirmProps) => {
  return (
    <CofirmContainer>
      <ConfirmHeader>
        <p>{TextObject[text].title}</p>
        <div onClick={() => close(true)}>
          <CancelImg />
        </div>
      </ConfirmHeader>
      <hr />
      <ConfirmContent>{TextObject[text].content}</ConfirmContent>
      {children}
    </CofirmContainer>
  );
};
