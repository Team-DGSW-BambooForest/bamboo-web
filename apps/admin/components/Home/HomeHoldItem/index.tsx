import { Button, Card, ButtonWrapper } from "@bamboo/ui";
import {
  HoldItemContent,
  HoldItemDate,
  HoldItemProfileWrap,
  HoldItemTopWrap,
  HoldItemUserBox,
  HoldItemUsername,
} from "./style";
import profile from "../../../../user/asset/common/profile.png";
import Image from "next/image";
import { useGetHoldPost } from "../../../queries/post/post.query";
import { dotDate } from "../../../util/day";
import useAllowedPost from "../../../hooks/post/useAllowedPost";

interface Props {
  data: {
    postId: number;
    author: string;
    profileImage: string;
    content: string;
    createdAt: string;
  };
}

const HomeHoldItem = ({ data }: Props) => {
  const date = dotDate(data.createdAt);
  const { submitAllowedPost } = useAllowedPost({ postId: data.postId });
  return (
    <>
      <Card
        size="lg"
        style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
      >
        <HoldItemTopWrap>
          <HoldItemProfileWrap>
            <Image
              src={profile}
              width={48}
              height={48}
              alt="profile"
              style={{ borderRadius: "100px" }}
            />
            <HoldItemUserBox>
              <HoldItemUsername>{data.author}</HoldItemUsername>
              <HoldItemDate>{date}</HoldItemDate>
            </HoldItemUserBox>
          </HoldItemProfileWrap>
          <ButtonWrapper align="flex-end">
            <Button
              onClick={() => submitAllowedPost("NOT_ALLOWED")}
              color="cancel"
              size="sm"
            >
              거절
            </Button>
            <Button
              onClick={() => submitAllowedPost("ALLOWED")}
              color="primary"
              size="sm"
              style={{ color: "black" }}
            >
              수락
            </Button>
          </ButtonWrapper>
        </HoldItemTopWrap>
        <HoldItemContent>{data.content}</HoldItemContent>
      </Card>
    </>
  );
};

export default HomeHoldItem;
