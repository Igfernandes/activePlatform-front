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

export function capitalize(word: string) {
  return word
    .split(" ")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function handleMaskPhone(e: React.ChangeEvent<HTMLInputElement>) {
  let value = e.target.value;

  // Remover todos os caracteres não numéricos
  value = value.replace(/\D/g, "");

  // Adicionar a máscara conforme o número de dígitos
  if (value.length <= 1) {
    value = value.replace(/^(\d{2})/, "($1)");
  } else if (value.length <= 3) {
    value = value.replace(/^(\d{2})(\d{1})/, "($1) $2");
  } else if (value.length <= 7) {
    value = value.replace(/^(\d{2})(\d{1})(\d{1,4})/, "($1) $2 $3");
  } else {
    value = value.replace(/^(\d{2})(\d{1})(\d{1,4})(\d{1,4})/, "($1) $2 $3-$4");
  }

  e.target.value = value.slice(0, 16);
}
