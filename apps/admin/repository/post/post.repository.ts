import { customAxios } from "custom-util";
import { AllowedResponse, PostResponse } from "../../types/post/post.type";
import { getStatusPostByIdParam } from "./post.param";

class PostRepositroy {
  public async getStatusPostById({
    postId,
    status,
  }: getStatusPostByIdParam): Promise<void> {
    await customAxios.patch(`/post/status/${postId}`, { status });
  }

  public async getHoldPost(): Promise<PostResponse> {
    const { data } = await customAxios.get("/post/list/hold");
    return data;
  }
}

export default new PostRepositroy();
