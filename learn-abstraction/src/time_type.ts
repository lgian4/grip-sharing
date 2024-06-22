import { LanguageEnum } from "./language";

export enum TimeTypeEnum {
  morning,
  afternoon,
  evening,
  night,
  none,
}

export class TimeType {
  private timeType: TimeTypeEnum;
  constructor(
    isMorning?: boolean,
    isAfternoon?: boolean,
    isEvening?: boolean,
    isNight?: boolean
  ) {
    this.timeType = this.parseTimeType(
      isMorning,
      isAfternoon,
      isEvening,
      isNight
    );
  }

  toString(language?: LanguageEnum) {
    switch (language) {
      case LanguageEnum.indonesian:
        return this.toStringIndo(this.timeType);
      case LanguageEnum.english:
      default:
        return this.toStringEng(this.timeType);
    }
  }

  private toStringEng(timeType: TimeTypeEnum) {
    switch (timeType) {
      case TimeTypeEnum.morning:
        return "Good morning ";
      case TimeTypeEnum.afternoon:
        return "good afternoon ";
      case TimeTypeEnum.evening:
        return "good evening ";
      case TimeTypeEnum.night:
        return "good night ";
      case TimeTypeEnum.none:
      default:
        return "wassup ";
    }
  }

  private toStringIndo(timeType: TimeTypeEnum) {
    switch (timeType) {
      case TimeTypeEnum.morning:
        return "Selamat pagi ";
      case TimeTypeEnum.afternoon:
        return "Selamat siang ";
      case TimeTypeEnum.evening:
        return "Selamat sore ";
      case TimeTypeEnum.night:
        return "Selamat malam ";
      case TimeTypeEnum.none:
      default:
        return "Halo ";
    }
  }

  private parseTimeType(
    isMorning?: boolean,
    isAfternoon?: boolean,
    isEvening?: boolean,
    isNight?: boolean
  ) {
    let timeType = TimeTypeEnum.none;
    if (isMorning && !isAfternoon && !isEvening && !isNight) {
      timeType = TimeTypeEnum.morning;
    } else if (!isMorning && isAfternoon && !isEvening && !isNight) {
      timeType = TimeTypeEnum.afternoon;
    } else if (!isMorning && !isAfternoon && isEvening && !isNight) {
      timeType = TimeTypeEnum.evening;
    } else if (!isMorning && !isAfternoon && !isEvening && isNight) {
      timeType = TimeTypeEnum.night;
    }

    return timeType;
  }
}
