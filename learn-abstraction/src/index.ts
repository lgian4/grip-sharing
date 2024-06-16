export class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(name?: string) {
    return `wassup ${name}`;
  }
}
