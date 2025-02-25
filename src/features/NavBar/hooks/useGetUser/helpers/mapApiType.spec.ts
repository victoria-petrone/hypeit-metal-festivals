import { GetUserResponseType } from 'src/api'; // Adjust the path as needed
import { UserDataAppType } from 'src/features/NavBar/types';
import { mapApiType } from './mapApiType';

describe('When mapApiType is called.', () => {
  it('Then it should map a valid GetUserResponseType to UserDataAppType correctly', () => {
    const apiResponse: GetUserResponseType = {
      id: '123',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    };

    const expected: UserDataAppType = {
      id: '123',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    };

    expect(mapApiType(apiResponse)).toEqual(expected);
  });

  it('Then it should return default values when input is undefined.', () => {
    const expected: UserDataAppType = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
    };

    expect(mapApiType(undefined)).toEqual(expected);
  });

  it('Then it should handle partial input gracefully.', () => {
    const apiResponse = { firstName: 'Jane' } as GetUserResponseType;

    const expected: UserDataAppType = {
      id: '',
      firstName: 'Jane',
      lastName: '',
      email: '',
    };

    expect(mapApiType(apiResponse)).toEqual(expected);
  });
});
