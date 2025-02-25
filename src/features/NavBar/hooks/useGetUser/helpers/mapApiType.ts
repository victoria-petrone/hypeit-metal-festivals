import { GetUserResponseType } from 'src/api';
import { UserDataAppType } from 'src/features/NavBar/types';

export const mapApiType = (
  apiType: GetUserResponseType | undefined
): UserDataAppType => {
  return {
    id: apiType?.id ?? '',
    firstName: apiType?.firstName ?? '',
    lastName: apiType?.lastName ?? '',
    email: apiType?.email ?? '',
  };
};
