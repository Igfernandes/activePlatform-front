/**
 * Verifica se uma string é um JSON válido.
 *
 * @param {string} str - A string a ser validada como JSON.
 * @returns {boolean} Retorna `true` se a string for um JSON válido, caso contrário, retorna `false`.
 *
 * @example
 * isValidJSON('{"name": "Alice", "age": 25}');
 * // Retorna: true
 *
 * @example
 * isValidJSON('Invalid JSON');
 * // Retorna: false
 */
export function isValidJSON(str: string) {
  try {
    const parsed = JSON.parse(str);
    // Verifica se o resultado é um objeto ou array válido
    return typeof parsed === "object" && parsed !== null;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e: unknown) {
    return false;
  }
}

export function isEquals(data: unknown, ref: unknown) {
  return JSON.stringify(data) === JSON.stringify(ref);
}
