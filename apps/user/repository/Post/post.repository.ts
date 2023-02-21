import { customAxios } from "custom-util";
import { writePostParam } from "./post.param";
import { PostResponse } from "./post.response";

class PostRepository {
  public async createPost({
    content,
    hashtags,
  }: writePostParam): Promise<void> {
    await customAxios.post("/post/create", { content, hashtags });
  }

  public async getPosts(): Promise<PostResponse> {
    const { data } = await customAxios.get("/post/list");
    return data;
  }
}

export default new PostRepository();
