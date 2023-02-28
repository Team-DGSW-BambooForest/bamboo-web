import axios from "axios";
import { PostDataType, PostResponse } from "../../types/Post/post.type";
import { customAxios } from "../../util/axios";
import { conf } from "../../util/config";
import { postIdParam, writePostParam } from "./post.param";

class PostRepository {
  public async createPost({
    content,
    hashtags,
  }: writePostParam): Promise<void> {
    const { data } = await axios.post(`${conf.baseUrl}/post/create`, {
      content,
      hashtags,
    });
    return data;
  }

  public async signedCreatePost({
    content,
    hashtags,
  }: writePostParam): Promise<void> {
    const { data } = await customAxios.post("/post/create", {
      content,
      hashtags,
    });
    return data;
  }

  public async getPosts(): Promise<PostResponse> {
    const { data } = await customAxios.get("/post/list");
    return data;
  }

  public async getPostById({ id }: postIdParam): Promise<PostDataType> {
    const { data } = await customAxios.get(`/post/${id}`);
    return data;
  }
}

export default new PostRepository();
