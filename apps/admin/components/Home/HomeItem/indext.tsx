import { Avatar, Card } from "@bamboo/ui";
import Image from "next/image";
import { useRouter } from "next/router";
import useDeletePost from "../../../hooks/Post/useDeletePost";
import { useGetCommentByIdQuery } from "../../../queries/Comment/Comment.query";
import { useGetFileQuery } from "../../../queries/File/file.query";
import { PostDataType } from "../../../types/Post/post.type";
import { dotDate } from "../../../util/day";
import CommentInput from "../../Comment/CommentInput";
import HandleChildComment from "../../Comment/HandleChildComment";
import {
  CommentCount,
  HomeItemBottomWrap,
  HomeItemContent,
  HomeItemDate,
  HomeItemFlex,
  HomeItemHr,
  HomeItemInfo,
  HomeItemProfileContainer,
  HomeItemTopWrap,
  HomeItemUserName,
} from "./style";
import CancelImg from "../../../../../packages/ui/stories/assets/cancel";

interface Props {
  data: PostDataType;
  postId: number;
}

const HomeItem = ({ data, postId }: Props) => {
  const { data: fileData } = useGetFileQuery({ postId });
  const { data: ChildCommentData } = useGetCommentByIdQuery({ postId });
  const handleCommentData = ChildCommentData?.slice(0, 2);
  const router = useRouter();
  const date = dotDate(data.createdAt);
  const { onDeletePost } = useDeletePost({ postId });

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
            <HomeItemFlex>
              <Avatar src={data.profileImage} size="md" alt="이미지 없음" />
              <HomeItemInfo>
                <HomeItemUserName>{data.author}</HomeItemUserName>
                <HomeItemDate>{date}</HomeItemDate>
              </HomeItemInfo>
            </HomeItemFlex>
            <CancelImg onClick={onDeletePost} />
          </HomeItemProfileContainer>
          <HomeItemContent>{data.content}</HomeItemContent>
          {fileData && (
            <Image
              src={String(fileData)}
              width={490}
              height={490}
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
        ) : (
          <CommentCount onClick={() => router.push(`/view/${postId}`)}>
            자세히 보기
          </CommentCount>
        )}
      </Card>
    </>
  );
};

export default HomeItem;
