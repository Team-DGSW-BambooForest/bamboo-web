import { useMutation, useQuery } from "react-query";
import { fileParam } from "../../repository/File/file.param";
import fileRepository from "../../repository/File/file.repository";

export const useGetFileQuery = ({ postId }: fileParam) =>
  useQuery(
    ["file/useGetFile", postId],
    () => fileRepository.getFile({ postId }),
    {
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60,
    }
  );

export const usePostFileQuery = () => {
  const mutation = useMutation(({ postId, file }: fileParam) =>
    fileRepository.postFile({ postId, file })
  );
  return mutation;
};
