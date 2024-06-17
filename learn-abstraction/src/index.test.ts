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

    const greeting = user.greet('fofo', true, true, true, false, false, true);

    expect(greeting).not.toContain(`Mr`);
    expect(greeting).not.toContain(`Ms`);
  });

  test('should only call by name when the gender is not male and not female', () => {
    const user = new User('hehe');

    const greeting = user.greet('fofo', false, false, true, false, false, true);

    expect(greeting).not.toContain(`Mr`);
    expect(greeting).not.toContain(`Ms`);
  });

  test('should able to save user', () => {
    const toBeSavedUser = new User('hehe');

    User.saveToDatabase(toBeSavedUser);

    const savedUser = User.getUser(toBeSavedUser.name);

    expect(savedUser).toBeDefined();
    expect(savedUser?.name).toBe(toBeSavedUser.name);
  });

  test('should able to greet by indonesian language', () => {
    const user = new User('hehe');

    const greeting = user.greet('Fifi', false, false, false, false, false, false, 'indo');

    expect(greeting).toContain(`Halo`);
  });

  test('should greet by english language by default', () => {
    const user = new User('hehe');

    const greeting = user.greet();

    expect(greeting).toContain('wassup');
  });

  test('should able to greet male with indonesian language', () => {
    const user = new User('hehe');

    const greeting = user.greet('Fifi', true, false, false, false, false, false, 'indo');

    expect(greeting).toContain(`Pak`);
  });

  test('should able to greet female with indonesian language', () => {
    const user = new User('hehe');

    const greeting = user.greet('Fifi', false, true, false, false, false, false, 'indo');

    expect(greeting).toContain(`Bu`);
  });

  test('should able to greet morning with indonesian language', () => {
    const user = new User('hehe');

    const greeting = user.greet('Fifi', false, true, true, false, false, false, 'indo');

    expect(greeting).toContain(`Selamat pagi`);
  });

  test('should able to greet morning to female in indonesian language', () => {
    const femaleName = 'Fifi';

    const user = new User('hehe');

    const greeting = user.greet(femaleName, false, true, true, false, false, false, 'indo');

    expect(greeting).toContain(`Selamat pagi Bu ${femaleName}`);
  });

  test('should able to greet morning to male in indonesian language', () => {
    const maleName = 'Budi';

    const user = new User('hehe');

    const greeting = user.greet(maleName, true, false, true, false, false, false, 'indo');

    expect(greeting).toContain(`Selamat pagi Pak ${maleName}`);
  });

  test('should able to greet morning to female in english language', () => {
    const femaleName = 'Fifi';

    const user = new User('hehe');

    const greeting = user.greet(femaleName, false, true, true, false, false, false);

    expect(greeting).toContain(`Good morning Ms ${femaleName}`);
  });

  test('Given other user is male and female, When greet morning in english language, Then should greet without title', () => {
    const otherUser = new User('Heho');

    const user = new User('hehe');

    const greeting = user.greet(otherUser.name, true, true, true, false, false, false);

    expect(greeting).not.toContain(`Mr`);
    expect(greeting).not.toContain(`Ms`);
    expect(greeting).toContain(`Good morning ${otherUser.name}`);
  });
});
