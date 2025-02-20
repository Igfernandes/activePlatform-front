import { useEffect, useState } from "react";
import { HookTableDataProps } from "../type";
import { REGEXES } from "@constants/regexes";
import { TDataOptions } from "../Tbody/TData/type";

export function useTableData<TableData extends Array<Record<string, unknown>>>({
  data,
  excludes,
  tHeads: { data: tHeadsData = [], widths },
}: HookTableDataProps<TableData>) {
  const [tHeads, setTHeads] = useState<string[]>([]);

  // Função otimizada para calcular a largura da coluna
  const getCurrentWidthColumn = (table: HTMLTableElement, index: number) => {
    const totalWidth = widths.reduce((acc, width) => acc + width, 0);
    const columnWidthPercentage = (widths[index] / totalWidth) * 100;
    const currentTableWidth = table.clientWidth;

    return (currentTableWidth / 100) * columnWidthPercentage;
  };

  // Função para gerenciar o conteúdo das células da tabela
  const handleManagerColumn = (
    el: HTMLTableCellElement,
    { value, index }: TDataOptions
  ) => {
    if (!el || widths.length === 0 || !value) return;

    const table = el.closest("table");
    if (!table) return;

    // Certificar que 'value' não é um tipo inválido
    if (["object", "function"].includes(typeof value)) return;

    const columnContent = value.toString();
    const contentLength = columnContent.length * 10;
    const currentWidthColumn = getCurrentWidthColumn(table, index);

    el.setAttribute("width", currentWidthColumn.toString());

    // Ajustar a visualização do conteúdo da célula
    if (
      currentWidthColumn >= contentLength ||
      REGEXES.HAS_HTML_ELEMENT.test(columnContent)
    )
      return;

    el.innerHTML = columnContent.substring(0, currentWidthColumn / 10) + "...";
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
