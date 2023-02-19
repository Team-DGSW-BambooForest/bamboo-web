import { customAxios } from "custom-util";
import { getPostsParam, writePostParam } from "./post.param";
import { PostResponse } from "./post.response";

class PostRepository {
  public async writePost({
    title,
    content,
    hashtags,
  }: writePostParam): Promise<void> {
    await customAxios.post("/post", { title, content, hashtags });
  }

  //   public async getPosts({ page }: getPostsParam): Promise<PostResponse> {
  //     const { data } = await customAxios.get(``);
  //   }
}

export default PostRepository;
