import { useState } from "react";
import { ChangeEvent } from "react";
import { useQueryClient } from "react-query";
import { useAllowedHoldPost } from "../../queries/Post/post.query";

interface Props {
  postId: number;
}

const useAllowedPost = ({ postId }: Props) => {
  const queryClient = useQueryClient();
  const allowedPost = useAllowedHoldPost();

  const submitAllowedPost = (status: string) => {
    allowedPost.mutateAsync(
      {
        status,
        postId,
      },
      {
        onSuccess: () => {
          if (status === "ALLOWED") {
            window.alert("게시물 수락 성공");
          } else {
            window.alert("게시물 거절 성공");
          }
          queryClient.invalidateQueries("post/useGetHoldPost");
        },
        onError: () => {
          window.alert("게시물 수락 실패");
        },
      }
    );
  };
  return {
    submitAllowedPost,
  };
};

export default useAllowedPost;
