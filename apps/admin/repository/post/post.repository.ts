import { customAxios } from "custom-util";
import { AllowedResponse, PostResponse } from "../../types/Post/post.type";
import { DeletePostByIdParam, getStatusPostByIdParam } from "./post.param";

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

  public async getPosts(page: number): Promise<PostResponse> {
    const { data } = await customAxios.get(`/post/list?page=${page}`);
    return data;
  }

  public async deletePost({ postId }: DeletePostByIdParam): Promise<void> {
    const { data } = await customAxios.delete(`/admin/delete/${postId}`);
    return data;
  }
}

export default new PostRepositroy();
