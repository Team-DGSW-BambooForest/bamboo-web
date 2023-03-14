import { Avatar, Card } from "@bamboo/ui";
import {
  CommentCount,
  HomeItemBottomWrap,
  HomeItemContent,
  HomeItemDate,
  HomeItemHr,
  HomeItemImage,
  HomeItemInfo,
  HomeItemProfileContainer,
  HomeItemTopWrap,
  HomeItemUserName,
} from "./HomeItem.style";
import CommentInput from "../../Comment/CommentInput/CommentInput";
import { dotDate } from "../../../util/date";
import { useGetFileQuery } from "../../../queries/File/file.query";
import { useGetCommentByIdQuery } from "../../../queries/Comment/Comment.query";
import HandleChildComment from "../../Comment/HandleChildComment/HandleChildComment";
import { useRouter } from "next/router";
import Image from "next/image";

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

const HomeItem = ({ data, postId }: Props) => {
  const { data: fileData } = useGetFileQuery({ postId });
  const { data: ChildCommentData } = useGetCommentByIdQuery({ postId });
  const handleCommentData = ChildCommentData?.slice(0, 2);
  const router = useRouter();
  const date = dotDate(data.createdAt);

  return (
    <>
      <Card
        size="lg"
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "12px",
          paddingLeft: "24px",
          marginBottom: "20px",
        }}
      >
        <HomeItemTopWrap>
          <HomeItemProfileContainer>
            <Avatar src={data.profileImage} size="md" alt="이미지 없음" />
            <HomeItemInfo>
              <HomeItemUserName>{data.author}</HomeItemUserName>
              <HomeItemDate>{date}</HomeItemDate>
            </HomeItemInfo>
          </HomeItemProfileContainer>
          <HomeItemContent>{data.content}</HomeItemContent>
          {fileData && (
            <Image
              src={String(fileData)}
              width={100}
              height={100}
              alt="이미지 없음"
            />
          )}
          <HomeItemHr />
        </HomeItemTopWrap>
        <HomeItemBottomWrap>
          <CommentInput postId={data.postId} />
          {handleCommentData?.map((item, idx) => (
            <HandleChildComment key={idx} item={item} postId={data.postId} />
          ))}
        </HomeItemBottomWrap>
        {ChildCommentData?.length!! > 2 ? (
          <CommentCount onClick={() => router.push(`/view/${postId}`)}>
            댓글 {ChildCommentData?.length!! - 2}개 더보기
          </CommentCount>
        ) : null}
      </Card>
    </>
  );
};

export default HomeItem;
