import { customAxios } from "custom-util";
import { FileResponse } from "../../types/File/File.type";
import { fileParam } from "./file.param";

class FileRepository {
  public async postFile({ postId, file }: fileParam): Promise<FileResponse> {
    const form = new FormData();
    form.append("image", file!!);
    const { data } = await customAxios.post(`/upload/${postId}`, form);
    return data;
  }

  public async getFile({ postId }: fileParam): Promise<FileResponse> {
    const { data } = await customAxios.get(`/upload/${postId}`);
    return data;
  }
}

export default new FileRepository();
