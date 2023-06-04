import { customAxios } from "../../lib/Axios/customAxios";
import { fileParam } from "./file.param";

class FileRepository {
  public async postFile({ postId, file }: fileParam): Promise<void> {
    const form = new FormData();
    form.append("image", file!!);
    const { data } = await customAxios.post(`/upload/${postId}`, form);
    return data;
  }

  public async getFile({ postId }: fileParam): Promise<string> {
    const { data } = await customAxios.get(`/upload/${postId}`);
    return data;
  }
}

export default new FileRepository();
