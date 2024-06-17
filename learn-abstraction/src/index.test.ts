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

  test('should able to greet by name', () => {
    const calledName = 'Fofo';

    const user = new User('hehe');

    const greeting = user.greet(calledName);

    expect(greeting).toContain(calledName);
  });

  test('should able to greet by male gender', () => {
    const user = new User('hehe');

    const greeting = user.greet('fofo', true);

    expect(greeting).toContain('Mr');
  });

  test('should able to greet by female gender', () => {
    const user = new User('hehe');

    const greeting = user.greet('fofo', false, true);

    expect(greeting).toContain('Ms');
  });

  test('should able to greet good morning when current time is morning', () => {
    const user = new User('hehe');

    const greeting = user.greet('fofo', false, true, true);

    expect(greeting).toContain(`morning`);
  });

  test('should able to greet good afternoon when current time is afternoon', () => {
    const user = new User('hehe');

    const greeting = user.greet('fofo', false, true, false, true);

    expect(greeting).toContain(`afternoon`);
  });

  test('should able to greet good evening when current time is evening', () => {
    const user = new User('hehe');

    const greeting = user.greet('fofo', false, true, false, false, true);

    expect(greeting).toContain(`evening`);
  });

  test('should able to greet good night when current time is night', () => {
    const user = new User('hehe');

    const greeting = user.greet('fofo', false, true, false, false, false, true);

    expect(greeting).toContain(`night`);
  });

  test('should only call by name when the gender is male and female', () => {
    const user = new User('hehe');

    const greeting = user.greet('fofo', false, true, true, false, false, true);

    expect(greeting).not.toContain(`Mr`);
    expect(greeting).not.toContain(`Ms`);
  });
});
