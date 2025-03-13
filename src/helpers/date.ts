export const handleMaskDate = (event: React.ChangeEvent<HTMLInputElement>) => {
  let value = event.target.value.replace(/\D/g, ""); // Remove tudo que não for número

  if (value.length > 2) {
    value = value.slice(0, 2) + "/" + value.slice(2);
  }
  if (value.length > 5) {
    value = value.slice(0, 5) + "/" + value.slice(5, 9);
  }

  event.target.value = value;
};

export function isMonthValid(month: number) {
  return month > 0 && month <= 12;
}

export function isDayValid(day: number) {
  return day > 0 && day <= 31;
}
