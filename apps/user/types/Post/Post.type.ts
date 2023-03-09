export interface PostDataType {
  postId: number;
  author: string;
  profileImage: string;
  content: string;
  createdAt: string;
  hashTags: [
    {
      tagId: string;
      hashTag: string;
    }
  ];
}

export interface PostResponse {
  list: PostDataType[];
}
