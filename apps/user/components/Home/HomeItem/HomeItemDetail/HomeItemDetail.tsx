import { Avatar, Card } from "@bamboo/ui";
import Image from "next/image";
import { useGetCommentsQuery } from "../../../../queries/Comment/Comment.query";
import { useGetFileQuery } from "../../../../queries/File/file.query";
import { dotDate } from "../../../../util/date";
import AllComments from "../../../Comment/AllComments/AllComments";
import DetailInput from "../../../Comment/DetailInput";
import { HomeItemHr } from "../HomeItem.style";
import * as S from "./HomeItemDetail.style";

interface Props {
  data: {
    postId: number;
    author: string;
    profileImage: string;
    content: string;
    createdAt: string;
    hashTags: [
      {
        tagId: string;
        hashTag: string;
      }
    ];
  };
  postId: number;
}

const HomeItemDetail = ({ data, postId }: Props) => {
  const { data: fileData } = useGetFileQuery({ postId });
  const { data: CommentsData } = useGetCommentsQuery({ postId });
  const date = dotDate(data?.createdAt);

  return (
    <>
      <Card
        size="lg"
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "12px",
        }}
      >
        <S.TopWrap>
          <Avatar size="md" src={data?.profileImage!!} />
          <S.TopItemInfo>
            <S.TopItemUserName>{data?.author}</S.TopItemUserName>
            <S.TopItemDate>{date}</S.TopItemDate>
          </S.TopItemInfo>
        </S.TopWrap>
        <S.ItemContent>{data?.content}</S.ItemContent>
        <Image src={fileData} width={532} height={529} alt="" />
        <HomeItemHr />
        <DetailInput postId={Number(data?.postId)} />
        {CommentsData?.map((data) => (
          <AllComments postId={postId} data={data} />
        ))}
      </Card>
    </>
  );
};

export default HomeItemDetail;
