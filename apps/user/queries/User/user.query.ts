import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import authRepository from "../../repository/Auth/auth.repository";
import { UserResponse } from "../../types/User/user.type";

export const useGetUserQuery = () =>
  useQuery("user/useGetMemberQuery", () => authRepository.user(), {
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60,
  });
