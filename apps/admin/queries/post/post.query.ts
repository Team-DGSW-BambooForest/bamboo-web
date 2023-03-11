import { useMutation, useQuery } from "react-query";
import {
  AllowedHoldPost,
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
