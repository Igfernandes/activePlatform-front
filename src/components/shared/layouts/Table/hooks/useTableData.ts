import { useEffect, useState } from "react";
import { HookTableDataProps } from "../type";
import { REGEXES } from "@constants/regexes";
import { TDataOptions } from "../Tbody/TData/type";
import { useColumnMetrics } from "./useColumnMetrics";

export function useTableData<TableData extends Array<Record<string, unknown>>>({
  data,
  excludes,
  tHeads: { data: tHeadsData = [], widths },
}: HookTableDataProps<TableData>) {
  const [tHeads, setTHeads] = useState<string[]>([]);
  const { getCurrentWidthColumn, getTextSize, truncateTextToFit } =
    useColumnMetrics({ widths });

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

  /**
   * Calcula a largura da célula com base na tabela e no índice da coluna.
   *
   * @param {HTMLTableElement} table - A tabela onde a coluna está localizada.
   * @param {number} index - O índice da coluna na tabela.
   * @returns {number} - A largura da célula (em pixels).
   */
  const getCellWidth = (table: HTMLTableElement, index: number): number => {
    return getCurrentWidthColumn(table, index);
  };

  /**
   * Ajusta o conteúdo da célula com base na largura da coluna e no tamanho do texto.
   * Se o conteúdo for maior que a largura da célula, ele será truncado e "..." será adicionado.
   *
   * @param {HTMLTableCellElement} el - A célula da tabela onde o conteúdo será ajustado.
   * @param {string} content - O conteúdo da célula a ser exibido.
   * @param {number} columnWidth - A largura da coluna, usada para determinar se o texto precisa ser truncado.
   */
  const adjustCellContent = (
    el: HTMLTableCellElement,
    content: string,
    columnWidth: number
  ) => {
    const contentLength = getTextSize(content, el);

    if (
      columnWidth >= contentLength ||
      REGEXES.HAS_HTML_ELEMENT.test(content)
    ) {
      el.innerHTML = content;
    } else {
      el.innerHTML = truncateTextToFit(content, el, columnWidth);
    }
  };

  /**
   * Função principal para gerenciar o conteúdo das células da tabela. Ajusta o conteúdo da célula
   * de acordo com a largura da coluna, truncando o texto se necessário.
   *
   * @param {HTMLTableCellElement} el - A célula da tabela a ser ajustada.
   * @param {TDataOptions} options - As opções que incluem o valor da célula e o índice da coluna.
   */
  const handleManagerColumn = (
    el: HTMLTableCellElement,
    { value, index }: TDataOptions
  ) => {
    if (!el || widths.length === 0 || !value) return;

    const table = el.closest("table");
    if (!table) return;

    const columnContent = getColumnContent(value);
    if (!columnContent) return;

    const currentWidthColumn = getCellWidth(table, index);
    el.setAttribute("width", currentWidthColumn.toString());

    adjustCellContent(el, columnContent, currentWidthColumn);
  };

  // Gerenciamento das cabeçalhos da tabela
  useEffect(() => {
    if (data && data.length > 0) {
      // Se já temos dados em 'tHeadsData', vamos usá-los diretamente
      if (tHeadsData.length > 0) {
        return setTHeads(tHeadsData);
      }

      // Se não, criamos 'tHeads' com as chaves dos dados, excluindo as que estão em 'excludes'
      const keys = Object.keys(data[0]);
      setTHeads(keys.filter((key) => !excludes.includes(key)));
    }
  }, [data, excludes]);

  return {
    tHeads,
    handleManagerColumn,
  };
}
