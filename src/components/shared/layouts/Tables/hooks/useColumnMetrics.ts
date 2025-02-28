type Props = {
  widths: Array<number>;
};

export function useColumnMetrics({ widths }: Props) {
  /**
   * Trunca um texto para que ele se ajuste dentro de uma largura máxima (em pixels).
   * A função irá medir a largura do texto e cortá-lo progressivamente até que ele caiba no espaço disponível.
   * Se o texto for maior que a largura permitida, ele será cortado e um "..." será adicionado no final.
   *
   * @param {string} text - O texto a ser truncado.
   * @param {HTMLTableCellElement} el - A célula da tabela (TD ou TH) onde o texto será exibido.
   *                                   A largura da célula é usada para determinar o limite máximo de largura.
   * @param {number} maxWidth - A largura máxima (em pixels) disponível para o texto na célula.
   *
   * @returns {string} - O texto truncado, com "..." adicionado no final, caso o texto original exceda o limite.
   */
  function truncateTextToFit(
    text: string,
    el: HTMLTableCellElement,
    maxWidth: number
  ): string {
    const elementStyled = window.getComputedStyle(el);
    const fontSize = elementStyled.fontSize;
    const fontFamily = elementStyled.fontFamily.split(",")[0];

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return text;

    ctx.font = `${fontSize} ${fontFamily}`;

    let truncatedText = text;
    let textWidth = ctx.measureText(truncatedText).width;

    while (textWidth > maxWidth && truncatedText.length > 1) {
      truncatedText = truncatedText.substring(0, truncatedText.length - 1); // Remove um caractere
      textWidth = ctx.measureText(truncatedText + "...").width; // Mede novamente com "..."
    }

    return truncatedText + "...";
  }

  /**
   * Calcula a largura atual de uma coluna de uma tabela com base na largura total da tabela e nas porcentagens
   * definidas para as colunas.
   *
   * A função assume que a tabela foi dimensionada com base em larguras proporcionais (percentuais) das colunas.
   * A largura da coluna é calculada considerando a largura total da tabela e a proporção da coluna dentro dessa largura.
   *
   * @param {HTMLTableElement} table - A tabela onde a coluna está localizada. A largura da tabela é usada para calcular a largura da coluna.
   * @param {number} index - O índice da coluna cujo tamanho será calculado. O índice é usado para acessar a largura da coluna a partir do array `widths`.
   *
   * @returns {number} - A largura atual da coluna (em pixels), calculada com base na proporção da tabela e a largura total.
   */
  const getCurrentWidthColumn = (table: HTMLTableElement, index: number) => {
    const totalWidth = widths.reduce((acc, width) => acc + width, 0);
    const columnWidthPercentage = (widths[index] / totalWidth) * 100;
    const currentTableWidth = table.clientWidth;

    return (currentTableWidth / 100) * columnWidthPercentage;
  };
  /**
   * Calcula a largura do texto (em pixels) com base no estilo da célula da tabela fornecida.
   * A função utiliza o contexto de um canvas para medir a largura do texto renderizado com a fonte e tamanho especificados no estilo da célula.
   *
   * @param {string} text - O texto cuja largura será medida.
   * @param {HTMLTableCellElement} el - A célula da tabela (TD ou TH) que contém o texto. A fonte e o tamanho da célula são usados para calcular o tamanho do texto.
   *
   * @returns {number} - A largura do texto (em pixels) de acordo com o estilo da célula.
   */
  function getTextSize(text: string, el: HTMLTableCellElement): number {
    const elementStyled = window.getComputedStyle(el);
    const fontSize = elementStyled.fontSize;
    const fontFamily = elementStyled.fontFamily.split(",")[0];

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return 0;

    ctx.font = `${fontSize} ${fontFamily}, monospace`; // Adiciona fallback para números
    return ctx.measureText(text).width;
  }

  return {
    truncateTextToFit,
    getCurrentWidthColumn,
    getTextSize,
  };
}
