import React from "react";
import { Avatar, Card } from "@bamboo/ui";
import {
  HomeItemContent,
  HomeItemDate,
  HomeItemHr,
  HomeItemInfo,
  HomeItemProfileContainer,
  HomeItemTopWrap,
  HomeItemUserName,
} from "./HomeItem.style";
import { BiImageAlt } from "react-icons/bi";
import CommentInput from "../../Common/CommentInput/CommentInput";
import Haerin from "../../../asset/haerin.jpeg";
interface Props {
  data: {
    title: string;
    content: string;
    hashTags: string[];
  };
}

interface CommentType {
  comment: string;
}

const HomeItem = ({ data }: Props) => {
  return (
    <Card size="lg" style={{ paddingLeft: "24px" }}>
      <HomeItemTopWrap>
        <HomeItemProfileContainer>
          <Avatar src={Haerin.src} size="md" alt="" />
          <HomeItemInfo>
            <HomeItemUserName>강해린</HomeItemUserName>
            <HomeItemDate> </HomeItemDate>
          </HomeItemInfo>
        </HomeItemProfileContainer>
        <HomeItemContent>{data.content}</HomeItemContent>
        <HomeItemHr />
      </HomeItemTopWrap>
      <CommentInput />
    </Card>
  );
};

export default HomeItem;
