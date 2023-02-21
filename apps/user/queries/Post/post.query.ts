import { AxiosError } from "axios";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import postRepository from "../../repository/Post/post.repository";
import { PostResponse } from "../../repository/Post/post.response";
import { writePostParam } from "../../repository/Post/post.param";
export const useGetPostsQuery = (
  options?: UseQueryOptions<
    PostResponse,
    AxiosError,
    PostResponse,
    "post/useGetPostsQuery"
  >
) =>
  useQuery("post/useGetPostsQuery", () => postRepository.getPosts(), {
    ...options,
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60,
  });

export const useWrtiePostQuery = () => {
  const mutation = useMutation(({ content, hashtags }: writePostParam) =>
    postRepository.createPost({ content, hashtags })
  );
  return mutation;
};
