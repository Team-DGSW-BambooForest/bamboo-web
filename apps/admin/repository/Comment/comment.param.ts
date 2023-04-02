export interface createCommentParam {
  postId: number;
  parentCommentId: number;
  content: string;
}

export interface getCommentByIdParam {
  postId: number;
}

export interface getNestedCommentParam {
  commentId: number;
}
