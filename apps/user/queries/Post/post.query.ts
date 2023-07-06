import { useMutation, useQuery, UseQueryOptions } from "react-query";
import postRepository from "../../repository/Post/post.repository";
import {
  KeywordParam,
  PostIdParam,
  WritePostParam,
} from "../../repository/Post/post.param";

export const useGetPostsQuery = () =>
  useMutation("post/useGetPostsQuery", (page: number) =>
    postRepository.getPosts(page)
  );

export const useWrtiePostQuery = () => {
  const mutation = useMutation(({ content, hashtags }: WritePostParam) =>
    postRepository.createPost({ content, hashtags })
  );
  return mutation;
};

export const useSignedWrtiePostQuery = () => {
  const mutation = useMutation(({ content, hashtags }: WritePostParam) =>
    postRepository.signedCreatePost({ content, hashtags })
  );
  return mutation;
};

export const useGetPostById = ({ id }: PostIdParam) =>
  useQuery(
    ["post/useGetPostById", id],
    () => postRepository.getPostById({ id }),
    {
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60,
    }
  );

export const useGetPostByKeywrod = ({ word }: KeywordParam) =>
  useQuery(["post/useGetPostByKeyword", word], () =>
    postRepository.getPostByKeyword({ word })
  );
