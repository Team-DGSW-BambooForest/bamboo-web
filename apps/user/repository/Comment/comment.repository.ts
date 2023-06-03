import axios from "axios";
import { customAxios } from "custom-util";
import { CommentType, GetComments } from "../../types/Comment/comment.type";
import { conf } from "../../util/config";
import {
  CreateCommentParam,
  GetCommentByIdParam,
  GetNestedCommentParam,
} from "./comment.param";

class CommentRepository {
  public async signedCreateComment({
    postId,
    parentCommentId,
    content,
  }: CreateCommentParam): Promise<void> {
    await customAxios.post("/comment/create", {
      postId,
      parentCommentId,
      content,
    });
  }

  public async createComment({
    postId,
    parentCommentId,
    content,
  }: CreateCommentParam): Promise<void> {
    await axios.post(`${conf.baseUrl}/comment/create`, {
      postId,
      parentCommentId,
      content,
    });
  }
  public async getCommentById({
    postId,
  }: GetCommentByIdParam): Promise<CommentType[]> {
    const { data } = await customAxios.get(`/comment/${postId}`);
    return data;
  }

  public async getNestedComment({
    commentId,
  }: GetNestedCommentParam): Promise<CommentType[]> {
    const { data } = await customAxios.get(`/comment/nested/${commentId}`);
    return data;
  }

  public async getComments({
    postId,
  }: GetCommentByIdParam): Promise<GetComments[]> {
    const { data } = await customAxios.get(`/comment/comments/${postId}`);
    return data;
  }

  public async getCommentCount({
    postId,
  }: GetCommentByIdParam): Promise<number> {
    const { data } = await customAxios.get(`/comment/count/${postId}`);
    return data;
  }
}

export default new CommentRepository();
