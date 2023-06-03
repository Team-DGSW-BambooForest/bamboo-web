export interface CreateCommentParam {
  postId: number;
  parentCommentId: number;
  content: string;
}

export interface GetCommentByIdParam {
  postId: number;
}

export interface GetNestedCommentParam {
  commentId: number;
}
