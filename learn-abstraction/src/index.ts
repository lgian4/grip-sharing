import { Gender } from "./gender";
import { parseLanguageEnum } from "./language";
import { TimeType } from "./time_type";

export class User {
  name: string;
  static savedUsers: User[];
  friends: User[];

  constructor(name: string, savedUsers?: User[]) {
    this.name = name;
    User.savedUsers = savedUsers || [];
    this.friends = [];
  }

  greet(
    name?: string,
    isMale?: boolean,
    isFemale?: boolean,
    isMorning?: boolean,
    isAfternoon?: boolean,
    isEvening?: boolean,
    isNight?: boolean,
    lang?: "indo"
  ) {
    const gender = new Gender(isMale, isFemale);
    const timeType = new TimeType(isMorning, isAfternoon, isEvening, isNight);
    const language = parseLanguageEnum(lang);
    return `${timeType.toString(language)}${gender.toString(language)}${name}`;
  }

  static saveToDatabase(user: User) {
    this.savedUsers?.push(user);
  }

  static getUser(name: string) {
    return User.savedUsers?.find((u) => u.name === name);
  }

  addFriend(user: User) {
    this.friends.push(user);
  }
}
