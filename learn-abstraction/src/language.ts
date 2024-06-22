export enum LanguageEnum {
  indonesian,
  english,
}

export function parseLanguageEnum(lang?: string) {
  switch (lang) {
    case "indo":
      return LanguageEnum.indonesian;
    default:
      return LanguageEnum.english;
  }
}
