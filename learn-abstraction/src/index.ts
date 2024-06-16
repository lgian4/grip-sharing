export class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(name?: string, isMale?: boolean) {
    if (isMale) {
      return `wassup Mr ${name}`;
    }

    return `wassup ${name}`;
  }
}
