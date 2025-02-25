import { useGetUser as useGetApiUser } from 'src/api';
import { UserDataAppType } from '../../types';
import { mapApiType } from './helpers';

type useGetAUserReturnType = {
  userData: UserDataAppType;
  isLoading: boolean;
};

export const useGetUser = (): useGetAUserReturnType => {
  const { data, isLoading } = useGetApiUser({});

  const userData = mapApiType(data);

  return { userData, isLoading };
};
