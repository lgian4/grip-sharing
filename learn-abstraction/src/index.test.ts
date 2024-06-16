import { User } from '.';

describe('User', () => {
  test('should able to create user', () => {
    const user = new User();

    expect(user).toBeInstanceOf(User);
  });
});
