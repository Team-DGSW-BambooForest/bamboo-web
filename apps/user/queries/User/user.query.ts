import { useQuery } from "react-query";
import authRepository from "../../repository/Auth/auth.repository";

export const useGetUserQuery = () =>
  useQuery("user/useGetMemberQuery", () => authRepository.user(), {
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60,
  });
