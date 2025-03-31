/**
 * @function getPayloadJSON
 * - Irá converter o objeto em uma string do tipo JSON.
 *
 * @param {object} data O objeto referente ao payload que será convertido.
 * @returns {string} payload O payload do tipo JSON.
 */
export function getPayloadJSON<PayloadShape>(data: PayloadShape): string {
  return JSON.stringify(data);
}

/**
 * @function getPayloadFormData
 * - Irá converter o objeto em uma instância do tipo FormData
 *
 * @param {object} data O objeto referente ao payload que será convertido.
 * @returns {string} payload O payload do tipo FormData.
 */
export function getPayloadFormData<PayloadShape extends object>(
  data: PayloadShape
): FormData {
  const payload = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (!value || value == "") return;

    payload.append(key, value);
  });

  return payload;
}
