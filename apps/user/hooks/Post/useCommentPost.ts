import { ChangeEvent } from "react";
import { FormEvent } from "react";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { useCreateCommentQuery } from "../../queries/Comment/Comment.query";

interface Props {
  postId: number;
}

const useCommentPost = ({ postId }: Props) => {
  const [content, setContent] = useState<string>("");

  const queryClient = useQueryClient();

  const createCommentMutation = useCreateCommentQuery();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    createCommentMutation.mutateAsync(
      {
        content,
        postId,
        parentCommentId: 0,
      },
      {
        onSuccess: () => {
          window.alert("그냥 댓글 성공");
          setContent("");
          queryClient.invalidateQueries(["comment/useGetCommentById", postId]);
        },
        onError: () => {
          window.alert("댓글 등록 실패");
        },
      }
    );
  };

  return { onChange, onSubmit, content };
};

export default useCommentPost;
