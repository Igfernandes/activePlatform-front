import { REGEXES } from "@constants/regexes";

export function hasMinLength(minLength: number, word: string): boolean {
  return word.length >= minLength;
}

export function hasMaxLength(maxLength: number, word: string): boolean {
  return word.length > maxLength;
}

export function hasSomeLetterLowercase(word: string): boolean {
  return REGEXES.HAS_LETTER_LOWERCASE.test(word);
}

export function hasSomeLetterUppercase(word: string): boolean {
  return REGEXES.HAS_LETTER_UPPERCASE.test(word);
}

export function hasSomeNumber(word: string): boolean {
  return REGEXES.HAS_NUMBER.test(word);
}

export function hasSomeSpecialCharacter(word: string): boolean {
  return REGEXES.HAS_SPECIAL_CHARACTER.test(word);
}

