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
  e.target.value = getNumberFormatted(e.target.value);
}

export function getNumberFormatted(number?: string) {
  if (!number) return "";

  let value = number.replace(/\D/g, "");

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

  return value.slice(0, 16);
}

export function handleMaskCPF(e: React.ChangeEvent<HTMLInputElement>) {
  e.target.value = getCPFFormatted(e.target.value);
}

export function getCPFFormatted(cpf: string = ""): string {
  const digits = cpf.replace(/\D/g, ""); // Remove tudo que não for dígito

  return digits
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})\.(\d{3})(\d)/, ".$1.$2-$3")
    .replace(/(-\d{2})\d+?$/, "$1"); // Limita em 11 dígitos formatados
}
