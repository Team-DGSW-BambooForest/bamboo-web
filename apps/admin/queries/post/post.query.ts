import { useMutation, useQuery } from "react-query";
import {
  DeletePostByIdParam,
  getStatusPostByIdParam,
} from "../../repository/post/post.param";
import postRepository from "../../repository/post/post.repository";

export const useGetHoldPost = () =>
  useQuery("post/useGetHoldPost", () => postRepository.getHoldPost());

export const useAllowedHoldPost = () => {
  const mutation = useMutation(({ status, postId }: getStatusPostByIdParam) =>
    postRepository.getStatusPostById({ status, postId })
  );
  return mutation;
};

export const useGetPostList = () =>
  useMutation("post/useGetPostsQuery", (page: number) =>
    postRepository.getPosts(page)
  );

export const useDeletePostQuery = () => {
  const mutation = useMutation(({ postId }: DeletePostByIdParam) =>
    postRepository.deletePost({ postId })
  );
  return mutation;
};
