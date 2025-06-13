import i18n from "@configs/i18n";

export function translateOrFallback(word: string): string {
  return `${i18n(`Words.${word}`)}`.includes("[")
    ? word
    : i18n(`Words.${word}`);
}
