import axios from "axios";
import { CommentType, GetComments } from "../../types/Comment/comment.type";
import {
  createCommentParam,
  getCommentByIdParam,
  getNestedCommentParam,
} from "./comment.param";
import { customAxios } from "../../lib/Axios/customAxios";
import config from "../../config/config.json";

class CommentRepository {
  public async signedCreateComment({
    postId,
    parentCommentId,
    content,
  }: createCommentParam): Promise<void> {
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
  }: createCommentParam): Promise<void> {
    await axios.post(`${config.SERVER}/comment/create`, {
      postId,
      parentCommentId,
      content,
    });
  }
  public async getCommentById({
    postId,
  }: getCommentByIdParam): Promise<CommentType[]> {
    const { data } = await customAxios.get(`/comment/${postId}`);
    return data;
  }

  public async getNestedComment({
    commentId,
  }: getNestedCommentParam): Promise<CommentType[]> {
    const { data } = await customAxios.get(`/comment/nested/${commentId}`);
    return data;
  }

  public async getComments({
    postId,
  }: getCommentByIdParam): Promise<GetComments[]> {
    const { data } = await customAxios.get(`/comment/comments/${postId}`);
    return data;
  }

  public async getCommentCount({
    postId,
  }: getCommentByIdParam): Promise<number> {
    const { data } = await customAxios.get(`/comment/count/${postId}`);
    return data;
  }
}

export default new CommentRepository();
