import { LanguageEnum } from "./language";

enum GenderEnum {
  male,
  female,
  none,
}

export class Gender {
  private gender: GenderEnum;
  constructor(isMale: boolean | undefined, isFemale: boolean | undefined) {
    this.gender = this.parseGender(isMale, isFemale);
  }

  toString(language?: LanguageEnum) {
    switch (language) {
      case LanguageEnum.indonesian:
        return this.toStringIndo(this.gender);
      case LanguageEnum.english:
      default:
        return this.toStringEng(this.gender);
    }
  }

  private toStringEng(gender: GenderEnum) {
    switch (gender) {
      case GenderEnum.male:
        return "Mr ";
      case GenderEnum.female:
        return "Ms ";
      case GenderEnum.none:
      default:
        return "";
    }
  }

  private toStringIndo(gender: GenderEnum) {
    switch (gender) {
      case GenderEnum.male:
        return "Pak ";
      case GenderEnum.female:
        return "Bu ";
      case GenderEnum.none:
      default:
        return "";
    }
  }

  private parseGender(
    isMale: boolean | undefined,
    isFemale: boolean | undefined
  ) {
    let gender = GenderEnum.none;
    if (isMale && !isFemale) {
      gender = GenderEnum.male;
    } else if (!isMale && isFemale) {
      gender = GenderEnum.female;
    }
    return gender;
  }
}
