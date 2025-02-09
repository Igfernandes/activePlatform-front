export function useButton() {
  /**
   * @function isBtnSubmit
   * - Verifica se o botão atual está configurado para ser do tipo submissão.
   *
   * @param {string} type O tipo do botão, sendo permitido apenas "button", "reset" ou "submit"
   * @returns {boolean} A resposta sobre ser ou não botão do tipo submit.
   */
  const isBtnSubmit = (type: string = "") => {
    return type == "submit";
  };

  return {
    isBtnSubmit,
  };
}
