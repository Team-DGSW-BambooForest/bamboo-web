export interface LoginResponse {
  userEntity: {
    userId: string;
    uniqueId: string;
    grade: string;
    room: string;
    number: string;
    name: string;
    profileImage: string;
    email: string;
    role: string;
  };
  token: string;
  refreshToken: string;
}
