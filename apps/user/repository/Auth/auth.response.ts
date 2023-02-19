import { Response } from "../../types/Util/response.type";

export interface LoginResponse extends Response {
  name: string;
  accessToken: string;
  refreshToken: string;
}
