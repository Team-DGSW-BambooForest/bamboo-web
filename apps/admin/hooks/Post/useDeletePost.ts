import { useQueryClient } from "react-query";
import { useDeletePostQuery } from "../../queries/Post/post.query";

interface Props {
  postId: number;
}

const useDeletePost = ({ postId }: Props) => {
  const queryClient = useQueryClient();

  const useDeletePostMutation = useDeletePostQuery();

  const onDeletePost = () => {
    useDeletePostMutation.mutateAsync(
      {
        postId,
      },
      {
        onSuccess: () => {
          window.alert("삭제성공");
          queryClient.invalidateQueries("post/useGetPostsQuery");
        },
        onError: () => {
          window.alert("삭제 실패");
        },
      }
    );
  };

  return { onDeletePost };
};

export default useDeletePost;
