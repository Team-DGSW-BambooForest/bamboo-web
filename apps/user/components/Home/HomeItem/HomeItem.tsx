import React from "react";
import { Avatar, Card } from "@bamboo/ui";
import Image from "next/image";
import {
  HomeItemCommentInput,
  HomeItemCommentInputContainer,
  HomeItemContainer,
  HomeItemContent,
  HomeItemDate,
  HomeItemHr,
  HomeItemInfo,
  HomeItemInputContainer,
  HomeItemProfileContainer,
  HomeItemUserName,
} from "./HomeItem.style";
import { BiImageAlt } from "react-icons/bi";

interface Props {
  data: {
    name: string;
    title: string;
    content: string;
    hashTags: string;
    date: string;
    img: string;
  };
}

interface CommentType {
  comment: string;
}

const HomeItem = ({ data }: Props) => {
  return (
    <Card size="lg" style={{ rowGap: "12px" }}>
      <HomeItemProfileContainer>
        <Avatar src={data.img.src} size="md" alt="" />
        <HomeItemInfo>
          <HomeItemUserName>{data.name}</HomeItemUserName>
          <HomeItemDate>{data.date}</HomeItemDate>
        </HomeItemInfo>
      </HomeItemProfileContainer>
      <HomeItemContent>{data.content}</HomeItemContent>
      <HomeItemHr />
      <HomeItemCommentInputContainer>
        <Avatar size="sm" src={data.img.src} alt="" />
        <HomeItemInputContainer>
          <HomeItemCommentInput placeholder="댓글을 입력하세요" />
          <BiImageAlt />
        </HomeItemInputContainer>
      </HomeItemCommentInputContainer>
    </Card>
  );
};

export default HomeItem;
