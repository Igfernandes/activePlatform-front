import { useEffect, useState } from "react";
import { HookTableDataProps } from "../type";
import { REGEXES } from "@constants/regexes";
import { TDataOptions } from "../presets/SmartTable/Tbody/TData/type";
import { useColumnMetrics } from "./useColumnMetrics";
import { useTableMetrics } from "./useTableMetrics";

export function useTableData<TableData extends Array<Record<string, unknown>>>({
  data,
  excludes,
  tHeads: { data: tHeadsData = [], widths },
}: HookTableDataProps<TableData>) {
  const [tHeads, setTHeads] = useState<string[]>([]);
  const { getCurrentWidthColumn, getTextSize, truncateTextToFit } =
    useColumnMetrics({ widths });
  const { getColumnContent, getTableElement } = useTableMetrics();

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

    const table = getTableElement(el);
    if (!table) return;

    const columnContent = getColumnContent(value);
    if (!columnContent) return;

    const currentWidthColumn = getCurrentWidthColumn(table, index);
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
