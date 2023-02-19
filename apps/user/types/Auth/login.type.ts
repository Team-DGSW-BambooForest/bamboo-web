import { Response } from "../Util/response.type";

export interface LoginResponse extends Response {
  data: {
    name: string;
    accessToken: string;
    refreshToken: string;
  };
}
