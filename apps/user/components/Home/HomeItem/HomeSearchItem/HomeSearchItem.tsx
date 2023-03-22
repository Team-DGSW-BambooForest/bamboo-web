import { Avatar, Card } from "@bamboo/ui";
import { useRouter } from "next/router";
import React from "react";
import { useGetCommentByIdQuery } from "../../../../queries/Comment/Comment.query";
import { useGetFileQuery } from "../../../../queries/File/file.query";
import { dotDate } from "../../../../util/date";
import * as S from "../HomeItem.style";
import { PostDataType } from "../../../../types/Post/Post.type";
import Image from "next/image";
import HandleChildComment from "../../../Comment/HandleChildComment/HandleChildComment";
import CommentInput from "../../../Comment/CommentInput/CommentInput";

interface Props {
  data: PostDataType;
}

const HomeSearchItem = ({ data }: Props) => {
  const { data: fileData } = useGetFileQuery({ postId: data.postId });
  const { data: ChildCommentData } = useGetCommentByIdQuery({
    postId: data.postId,
  });

  const router = useRouter();
  const handleCommentData = ChildCommentData?.slice(0, 2);

  const date = dotDate(data.createdAt);
  return (
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
      <S.HomeItemTopWrap>
        <S.HomeItemProfileContainer>
          <Avatar src={data.profileImage} size="md" alt="이미지 없음" />
          <S.HomeItemInfo>
            <S.HomeItemUserName>{data.author}</S.HomeItemUserName>
            <S.HomeItemDate>{date}</S.HomeItemDate>
          </S.HomeItemInfo>
        </S.HomeItemProfileContainer>
        <S.HomeItemContent>{data.content}</S.HomeItemContent>
        {fileData && (
          <Image
            src={String(fileData)}
            width={100}
            height={100}
            alt="이미지 없음"
          />
        )}
        <S.HomeItemHr />
      </S.HomeItemTopWrap>
      <S.HomeItemBottomWrap>
        <CommentInput postId={data.postId} />
        {handleCommentData?.map((item) => (
          <HandleChildComment item={item} postId={data.postId} />
        ))}
      </S.HomeItemBottomWrap>
      {ChildCommentData?.length!! > 2 ? (
        <S.CommentCount onClick={() => router.push(`/view/${data.postId}`)}>
          댓글 {ChildCommentData?.length!! - 2}개 더보기
        </S.CommentCount>
      ) : null}
    </Card>
  );
};

export default HomeSearchItem;
