import { useMutation, useQuery } from "react-query";
import {
  createCommentParam,
  getCommentByIdParam,
  getNestedCommentParam,
} from "../../repository/Comment/comment.param";
import commentRepository from "../../repository/Comment/comment.repository";

export const useGetCommentByIdQuery = ({ postId }: getCommentByIdParam) =>
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
}: getNestedCommentParam) =>
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
    ({ postId, parentCommentId, content }: createCommentParam) =>
      commentRepository.createComment({ postId, parentCommentId, content })
  );
  return mutation;
};

export const useSignedCreateCommentQuery = () => {
  const mutation = useMutation(
    ({ postId, parentCommentId, content }: createCommentParam) =>
      commentRepository.signedCreateComment({
        postId,
        parentCommentId,
        content,
      })
  );
  return mutation;
};

export const useGetCommentsQuery = ({ postId }: getCommentByIdParam) =>
  useQuery(
    ["comment/useGetComments", postId],
    () => commentRepository.getComments({ postId }),
    {
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60,
    }
  );
