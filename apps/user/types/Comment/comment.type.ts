export interface CommentType {
  id: number;
  profileImage: string;
  writer: string;
  content: string;
  diffTime: string;
}

export interface getComments {
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
