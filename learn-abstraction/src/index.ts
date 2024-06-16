export class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(
    name?: string,
    isMale?: boolean,
    isFemale?: boolean,
    isMorning?: boolean,
    isAfternoon?: boolean,
    isEvening?: boolean
  ) {
    if (isMorning) {
      return `good morning ${name}`;
    }

    if (isAfternoon) {
      return `good afternoon ${name}`;
    }

    if (isEvening) {
      return `good evening ${name}`;
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
