export interface CommentType {
  id: number;
  profileImage: string;
  writer: string;
  content: string;
  createdAt: string;
}

export interface GetComments {
  comment: {
    id: number;
    profileImage: string;
    writer: string;
    content: string;
    createdAt: string;
  };
  reply: [
    {
      id: number;
      profileImage: string;
      writer: string;
      content: string;
      createdAt: string;
    }
  ];
}
