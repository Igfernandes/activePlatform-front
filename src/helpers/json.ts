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
  } catch (e: unknown) {
    console.log(e);
    return false;
  }
}
