export function useTableMetrics() {
  const getTableElement = (tdElement: HTMLTableCellElement) => {
    return tdElement.closest("table");
  };
  /**
   * Obtém o conteúdo da coluna, garantindo que não seja um tipo inválido.
   *
   * @param {unknown} value - O valor da célula da tabela.
   * @returns {string | null} - O conteúdo da coluna como string ou null se o valor for inválido.
   */
  const getColumnContent = (value: unknown): string | null => {
    if (["object", "function"].includes(typeof value)) return null;
    return value?.toString() || null;
  };

  return {
    getColumnContent,
    getTableElement,
  };
}
