export class User {
  name: string;
  static savedUsers: User[];

  constructor(name: string, savedUsers?: User[]) {
    this.name = name;
    User.savedUsers = savedUsers || [];
  }

  greet(
    name?: string,
    isMale?: boolean,
    isFemale?: boolean,
    isMorning?: boolean,
    isAfternoon?: boolean,
    isEvening?: boolean,
    isNight?: boolean,
    lang?: 'indo'
  ) {
    if (lang === 'indo') {
      if (isMale) {
        return `Halo Pak ${name}`;
      }

      return `Halo ${name}`;
    }

    if (isMorning) {
      return `good morning ${name}`;
    }

    if (isAfternoon) {
      return `good afternoon ${name}`;
    }

    if (isEvening) {
      return `good evening ${name}`;
    }

    if (isNight) {
      return `good night ${name}`;
    }

    if (isMale) {
      return `wassup Mr ${name}`;
    }

    if (isFemale) {
      return `wassup Ms ${name}`;
    }

    return `wassup ${name}`;
  }

  static saveToDatabase(user: User) {
    this.savedUsers?.push(user);
  }

  static getUser(name: string) {
    return User.savedUsers?.find((u) => u.name === name);
  }
}
