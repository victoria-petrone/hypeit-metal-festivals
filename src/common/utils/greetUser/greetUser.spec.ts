import { greetUser } from './greetUser';

type GetUserArgsType = Parameters<typeof greetUser>;

const mockName: GetUserArgsType[0] = 'Alice';
const mockAge: GetUserArgsType[1] = 30;

describe('greetUser', () => {
  it('should log the correct greeting message', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    greetUser(mockName, mockAge);

    expect(consoleSpy).toHaveBeenCalledWith(
      'Hello, Alice! You are 30 years old.'
    );

    consoleSpy.mockRestore();
  });
});
