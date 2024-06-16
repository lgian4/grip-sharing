export class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(name?: string, isMale?: boolean, isFemale?: boolean, isMorning?: boolean) {
    if (isMorning) {
      return `good morning ${name}`;
    }

    if (isMale) {
      return `wassup Mr ${name}`;
    }

    if (isFemale) {
      return `wassup Ms ${name}`;
    }

    return `wassup ${name}`;
  }
}
