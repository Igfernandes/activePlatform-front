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

export const getMaskDate = (event: React.ChangeEvent<HTMLInputElement>) => {
  let value = event.target.value.replace(/\D/g, ""); // Remove tudo que não for número

  if (value.length > 2) {
    value = value.slice(0, 2) + "/" + value.slice(2);
  }
  if (value.length > 5) {
    value = value.slice(0, 5) + "/" + value.slice(5, 9);
  }

  return value;
};

export const handleMaskDatetime = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  const value = event.target.value.replace(/\D/g, ""); // Remove tudo que não for número
  let datetime = "";

  if (value.length <= 2) {
    datetime = value;
  } else if (value.length <= 4) {
    datetime = value.slice(0, 2) + "/" + value.slice(2);
  } else if (value.length <= 8) {
    datetime =
      value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4);
  } else {
    datetime =
      value.slice(0, 2) +
      "/" +
      value.slice(2, 4) +
      "/" +
      value.slice(4, 8) +
      " " +
      value.slice(8, 10) +
      ":" +
      value.slice(10, 12);
  }

  event.target.value = datetime;
};

export const handleMaskTime = (event: React.ChangeEvent<HTMLInputElement>) => {
  let value = event.target.value.replace(/\D/g, ""); // Remove tudo que não for número

  if (value.length > 2) {
    value = value.slice(0, 2) + ":" + value.slice(2.4);
  }

  event.target.value = value;
};

export function isMonthValid(month: number) {
  return month > 0 && month <= 12;
}

export function isDayValid(day: number) {
  return day > 0 && day <= 31;
}

export const getFormattedDatetime = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  const value = event.target.value.replace(/\D/g, ""); // Remove tudo que não for número
  let datetime = "";

  if (value.length <= 2) {
    datetime = value;
  } else if (value.length <= 4) {
    datetime = value.slice(0, 2) + "/" + value.slice(2);
  } else if (value.length <= 8) {
    datetime =
      value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4);
  } else {
    datetime =
      value.slice(0, 2) +
      "/" +
      value.slice(2, 4) +
      "/" +
      value.slice(4, 8) +
      " " +
      value.slice(8, 10) +
      ":" +
      value.slice(10, 12);
  }

  return datetime;
};

export function getYearsOld(birthdate: string) {
  const hoje = new Date();
  const nascimento = new Date(birthdate);

  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();
  const hasNewYearByDate = mes === 0 && hoje.getDate() < nascimento.getDate();

  if (mes < 0 || hasNewYearByDate) {
    idade--;
  }

  return idade;
}
