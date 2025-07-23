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

  let value = number.replace("+55", "").replace(/\D/g, "");

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

  return `+55 ${value.slice(0, 16)}`;
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

export function handleMaskCEP(e: React.ChangeEvent<HTMLInputElement>) {
  e.target.value = getCEPFormatted(e.target.value);
}

export function getCEPFormatted(cep: string = "") {
  let digits = cep.replace(/\D/g, ""); // Remove tudo que não for dígito

  if (digits.length > 5) {
    digits = digits.slice(0, 5) + "-" + digits.slice(5, 8);
  }

  return digits;
}

export function getMoneyBrFormatted(money: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(+money);
}

export const WppTextFormatter = {
  bold: (text: string) => `*${text}*`,
  italic: (text: string) => `_${text}_`,
  strikethrough: (text: string) => `~${text}~`,
  monospace: (text: string) => `\`\`\`${text}\`\`\``,

  // Combinando múltiplas formatações
  boldItalic: (text: string) => `_*${text}*_`,
  boldStrikethrough: (text: string) => `*~${text}~*`,
};

export function formatAllString(
  text: string,
  rules: Record<string, (text: string) => string>
) {
  let formattedText = text;
  Object.entries(rules).forEach(([index, callback]) => {
    if (!index) return;
    formattedText = callback(text);
  });

  return formattedText;
}
export function formatTemplate(
  template: string,
  replacements: Record<string, (text: string) => string>
) {
  // replacements: { chave: funçãoFormatacao }
  // exemplo: { nome: WppTextFormatter.bold }
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    if (replacements[key]) {
      return replacements[key](key);
    }
    return match;
  });
}
