import { conf } from "custom-util/config";
import { LoginParam } from "./auth.param";
import { LoginResponse } from "./auth.response";
import axios from "axios";
import { customAxios } from "../../util/axios";
import { UserResponse } from "../../types/User/user.type";

class AuthRepository {
  public async login({ code }: LoginParam): Promise<LoginResponse> {
    const { data } = await axios.post(`${conf.baseUrl}/user/dauth/login`, {
      code,
    });
    return data;
  }

  public async user(): Promise<UserResponse> {
    const { data } = await customAxios.get("/user");
    return data;
  }
}

export default new AuthRepository();
