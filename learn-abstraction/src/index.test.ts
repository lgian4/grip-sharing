import { User } from '.';

describe('User', () => {
  test('should able to create user', () => {
    const user = new User('hehe');

    expect(user).toBeInstanceOf(User);
  });

  test('should have name', () => {
    const name = 'Lala';

    const user = new User(name);

    expect(user.name).toBe(name);
  });

  test('should able to greet', () => {
    const user = new User('hehe');

    const greeting = user.greet();

    expect(greeting).toBeDefined();
  });
});
