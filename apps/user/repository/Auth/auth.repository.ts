import { conf } from "custom-util/config";
import { data } from "cypress/types/jquery";
import { LoginParam } from "./auth.param";
import { LoginResponse } from "./auth.response";
import axios from "axios";

class AuthRepository {
  public async login({ code }: LoginParam): Promise<LoginResponse> {
    const { data } = await axios.post(`${conf.baseUrl}/auth/login/dauth`, {
      code,
    });
    return data;
  }
}

export default new AuthRepository();
