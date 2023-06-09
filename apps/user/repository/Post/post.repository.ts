import axios from "axios";
import { PostDataType, PostResponse } from "../../types/Post/Post.type";
import { customAxios } from "../../util/axios";
import config from "../../config/config.json";
import { KeywordParam, PostIdParam, WritePostParam } from "./post.param";

class PostRepository {
  public async createPost({
    content,
    hashtags,
  }: WritePostParam): Promise<void> {
    const { data } = await axios.post(`${config.SERVER}/post/create`, {
      content,
      hashtags,
    });
    return data;
  }

  public async signedCreatePost({
    content,
    hashtags,
  }: WritePostParam): Promise<void> {
    const { data } = await customAxios.post("/post/create", {
      content,
      hashtags,
    });
    return data;
  }

  public async getPosts(page: number): Promise<PostResponse> {
    const { data } = await customAxios.get(`/post/list?page=${page}`);
    return data;
  }

  public async getPostById({ id }: PostIdParam): Promise<PostDataType> {
    const { data } = await customAxios.get(`/post/${id}`);
    return data;
  }

  public async getPostByKeyword({ word }: KeywordParam): Promise<PostResponse> {
    const { data } = await customAxios.get(`/post/search/${word}`);
    return data;
  }
}

export default new PostRepository();
