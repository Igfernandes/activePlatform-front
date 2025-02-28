import { TableDataShape } from "../contexts/Table/types";
import { PaginationShape } from "../utilities/Pagination/type";
import { SortShape } from "../utilities/Sort/type";

type Props = {
  data: Array<Record<string, unknown>>;
};

export function useTableRules({ data }: Props) {
  /**
   * Converte os dados em um formato de matriz de linhas, excluindo as chaves especificadas.
   *
   * A função recebe um array de objetos e um array de chaves a serem excluídas de cada objeto.
   * Para cada objeto, as chaves indicadas em `excludes` são removidas e os valores restantes
   * são transformados em uma matriz de valores, representando as linhas da tabela.
   *
   * @param {Array<Record<string, unknown>>} data - O array de objetos contendo os dados que serão convertidos.
   * @param {Array<string>} [excludes=[]] - O array de chaves que serão removidas de cada objeto.
   * @returns {Array<Array<unknown>>} - Uma matriz de linhas, onde cada linha é uma matriz de valores de objeto.
   */
  const getTRows = (
    data: Array<Record<string, unknown>>,
    excludes: Array<string> = []
  ): Array<Array<unknown>> => {
    const matrizValue = [] as Array<unknown[]>;

    data.forEach((item: Record<string, unknown>) => {
      for (const key of excludes) {
        delete item[key];
      }
      matrizValue.push(Object.values(item));
    });

    return matrizValue;
  };

  /**
   * Obtém os dados da página atual com base na paginação fornecida.
   *
   * A função recebe um array de dados e um objeto de paginação, retornando apenas os dados da página atual
   * de acordo com o número máximo de elementos por página e a página atual.
   *
   * @param {Array<unknown[]>} data - O array de dados a ser paginado.
   * @param {PaginationShape} pagination - O objeto de paginação que contém as informações da página atual
   * e o número máximo de elementos por página.
   * @returns {Array<unknown[]>} - Um array com os dados da página atual.
   */
  const getPaginatedData = (
    data: Array<unknown[]>,
    pagination: PaginationShape
  ): Array<unknown[]> => {
    const showMaxElement = pagination.max ?? 5;
    const lastElementPage = pagination.current * showMaxElement;
    const firstElementPage = lastElementPage - showMaxElement;

    return data.slice(firstElementPage, lastElementPage);
  };

  /**
   * Ordena os dados da tabela com base em uma chave específica e em uma direção de ordenação.
   *
   * A função recebe um objeto de ordenação, que especifica a chave (referência) dos dados e a direção (ASC ou DESC),
   * e retorna os dados ordenados conforme a direção especificada.
   *
   * @param {SortShape} sort - O objeto que define a referência para a chave de ordenação e a direção (ASC ou DESC).
   * @returns {TableDataShape} - Os dados ordenados conforme a chave e a direção fornecidas.
   */
  const sortTableData = (sort: SortShape): TableDataShape => {
    data.sort((a, b) => {
      const valueA = String(a[sort.reference]);
      const valueB = String(b[sort.reference]);

      return sort.type === "ASC"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    });

    return data;
  };

  return {
    getPaginatedData,
    getTRows,
    sortTableData,
  };
}
