import { FileResponse } from "../../types/File/File.type";
import { customAxios } from "../../util/axios";
import { FileParam } from "./file.param";

class FileRepository {
  public async postFile({ postId, file }: FileParam): Promise<void> {
    const form = new FormData();
    form.append("image", file!!);
    const { data } = await customAxios.post(`/upload/${postId}`, form);
    return data;
  }

  public async getFile({ postId }: FileParam): Promise<FileResponse> {
    const { data } = await customAxios.get(`/upload/${postId}`);
    return data;
  }
}

export default new FileRepository();
