import { Button, Card, ButtonWrapper } from "@bamboo/ui";
import {
  HoldItemContent,
  HoldItemDate,
  HoldItemProfileWrap,
  HoldItemTopWrap,
  HoldItemUserBox,
  HoldItemUsername,
} from "./style";
import Image from "next/image";
import { dotDate } from "../../../util/day";
import useAllowedPost from "../../../hooks/Post/useAllowedPost";
import { useGetFileQuery } from "../../../queries/File/file.query";

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
  const { data: fileData } = useGetFileQuery({ postId: data.postId });

  return (
    <>
      <Card
        size="lg"
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          color: "#2f2f2f;",
        }}
      >
        <HoldItemTopWrap>
          <HoldItemProfileWrap>
            <Image
              src={data.profileImage!!}
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
            >
              수락
            </Button>
          </ButtonWrapper>
        </HoldItemTopWrap>
        <HoldItemContent>{data.content}</HoldItemContent>
        {fileData && (
          <Image
            src={String(fileData)}
            width={490}
            height={490}
            alt="이미지 없음"
          />
        )}
      </Card>
    </>
  );
};

export default HomeHoldItem;
