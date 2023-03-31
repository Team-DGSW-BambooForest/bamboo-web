import { ChangeEvent } from "react";
import { FormEvent } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { useCreateCommentQuery } from "../../queries/Comment/Comment.query";
import { getToken } from "../../util/localstorage";

interface Props {
  postId: number;
  parentCommentId?: number;
  setInputModal: any;
}

const useChildCommentPost = ({
  postId,
  parentCommentId,
  setInputModal,
}: Props) => {
  const [content, setContent] = useState<string>("");

  const queryClient = useQueryClient();

  const createCommentMutation = useCreateCommentQuery();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const [tokenState, setTokenState] = useState<string | null>(
    getToken().accessToken
  );

  useEffect(() => {
    setTokenState(getToken().accessToken);
  }, [tokenState]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (content === "") {
      toast.info("댓글 입력 부탁드립니다 ㅠㅠㅠ");
      return;
    }

    if (parentCommentId) {
      createCommentMutation.mutateAsync(
        {
          content,
          postId,
          parentCommentId,
        },
        {
          onSuccess: () => {
            toast.success("대댓글 성공");
            setInputModal(false);
            setContent("");
            queryClient.invalidateQueries(["comment/useGetComments", postId]);
          },
          onError: () => {
            toast.error("댓글 등록 실패");
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
            toast.success("디테일 댓글 성공");
            setContent("");
            queryClient.invalidateQueries(["comment/useGetComments", postId]);
          },
          onError: () => {
            toast.error("댓글 등록 실패");
          },
        }
      );
    }
  };

  return { onChange, onSubmit, content };
};

export default useChildCommentPost;
