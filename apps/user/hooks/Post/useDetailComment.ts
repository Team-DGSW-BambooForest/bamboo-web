import { ChangeEvent } from "react";
import { FormEvent } from "react";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { useCreateCommentQuery } from "../../queries/Comment/Comment.query";

interface Props {
  postId: number;
  parentCommentId?: number;
}

const useChildCommentPost = ({ postId, parentCommentId }: Props) => {
  const [content, setContent] = useState<string>("");

  const queryClient = useQueryClient();

  const createCommentMutation = useCreateCommentQuery();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (parentCommentId) {
      createCommentMutation.mutateAsync(
        {
          content,
          postId,
          parentCommentId,
        },
        {
          onSuccess: () => {
            window.alert("대댓글 성공");
            setContent("");
            queryClient.invalidateQueries(["comment/useGetComments", postId]);
          },
          onError: () => {
            window.alert("댓글 등록 실패");
          },
        }
      );
    } else {
      createCommentMutation.mutateAsync(
        {
          content,
          postId,
          parentCommentId: 0,
        },
        {
          onSuccess: () => {
            window.alert("디테일 댓글 성공");
            setContent("");
            queryClient.invalidateQueries(["comment/useGetComments", postId]);
          },
          onError: () => {
            window.alert("댓글 등록 실패");
          },
        }
      );
    }
  };

  return { onChange, onSubmit, content };
};

export default useChildCommentPost;
