import { conf } from "custom-util/config";
import { LoginParam } from "./auth.param";
import { LoginResponse } from "./auth.response";
import axios from "axios";

class AuthRepository {
  public async login({ code }: LoginParam): Promise<LoginResponse> {
    const { data } = await axios.post(`${conf.baseUrl}/user/dauth/login`, {
      code,
    });
    return data;
  }
}

export default new AuthRepository();
