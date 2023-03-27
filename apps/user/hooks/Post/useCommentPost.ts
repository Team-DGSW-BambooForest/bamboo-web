import { ChangeEvent } from "react";
import { FormEvent } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useQueryClient } from "react-query";
import {
  useCreateCommentQuery,
  useSignedCreateCommentQuery,
} from "../../queries/Comment/Comment.query";
import { getToken } from "../../util/localstorage";

interface Props {
  postId: number;
}

const useCommentPost = ({ postId }: Props) => {
  const [content, setContent] = useState<string>("");

  const [tokenState, setTokenState] = useState<string | null>(
    getToken().accessToken
  );

  useEffect(() => {
    setTokenState(getToken().accessToken);
  }, [tokenState]);

  const queryClient = useQueryClient();

  const createCommentMutation = useCreateCommentQuery();
  const signedCreateCommentMutation = useSignedCreateCommentQuery();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (content === "") {
      window.alert("댓글을 입력해주세요");
      return;
    }

    if (!tokenState) {
      createCommentMutation.mutateAsync(
        {
          content,
          postId,
          parentCommentId: 0,
        },
        {
          onSuccess: () => {
            window.alert("익명 그냥 댓글 성공");
            setContent("");
            queryClient.invalidateQueries([
              "comment/useGetCommentById",
              postId,
            ]);
          },
          onError: () => {
            window.alert("댓글 등록 실패");
          },
        }
      );
    } else {
      signedCreateCommentMutation.mutateAsync(
        {
          content,
          postId,
          parentCommentId: 0,
        },
        {
          onSuccess: () => {
            window.alert("기명 그냥 댓글 성공");
            setContent("");
            queryClient.invalidateQueries([
              "comment/useGetCommentById",
              postId,
            ]);
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

export default useCommentPost;
