export type UserRole = "ADMIN" | "STUDENT";

export interface UserResponse {
  userId: number;
  uniqueId: number;
  grade: number;
  room: number;
  number: number;
  name: string;
  profileImage: string;
  email: string;
  role: string;
}
