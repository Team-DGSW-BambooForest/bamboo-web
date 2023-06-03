import { useMutation, useQuery } from "react-query";
import {
  CreateCommentParam,
  GetCommentByIdParam,
  GetNestedCommentParam,
} from "../../repository/Comment/comment.param";
import commentRepository from "../../repository/Comment/comment.repository";

export const useGetCommentByIdQuery = ({ postId }: GetCommentByIdParam) =>
  useQuery(
    ["comment/useGetCommentById", postId],
    () => commentRepository.getCommentById({ postId }),
    {
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60,
    }
  );

export const useGetNestedCommentQuery = ({
  commentId,
}: GetNestedCommentParam) =>
  useQuery(
    ["comment/useGetNestedComment", commentId],
    () => commentRepository.getNestedComment({ commentId }),
    {
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60,
    }
  );

export const useCreateCommentQuery = () => {
  const mutation = useMutation(
    ({ postId, parentCommentId, content }: CreateCommentParam) =>
      commentRepository.createComment({ postId, parentCommentId, content })
  );
  return mutation;
};

export const useSignedCreateCommentQuery = () => {
  const mutation = useMutation(
    ({ postId, parentCommentId, content }: CreateCommentParam) =>
      commentRepository.signedCreateComment({
        postId,
        parentCommentId,
        content,
      })
  );
  return mutation;
};

export const useGetCommentsQuery = ({ postId }: GetCommentByIdParam) =>
  useQuery(
    ["comment/useGetComments", postId],
    () => commentRepository.getComments({ postId }),
    {
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60,
    }
  );
