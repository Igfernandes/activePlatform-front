import i18n from "@configs/i18n";

export function translateOrFallback(word: string): string {
  return `${i18n(`words.${word}`)}`.includes("[")
    ? word
    : i18n(`words.${word}`);
}
