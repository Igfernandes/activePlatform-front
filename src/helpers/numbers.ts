export function getOnlyNumberRange(value: number, start: number, end: number) {
  if (value <= start) return start;

  if (value >= end) return end;

  return value;
}

export const formatNumber = (num: number, length: number) =>
  num.toString().padStart(length, "0");
