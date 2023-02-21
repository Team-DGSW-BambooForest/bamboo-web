export interface PostDataType {
  postId: string;
  title: string;
  content: string;
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
