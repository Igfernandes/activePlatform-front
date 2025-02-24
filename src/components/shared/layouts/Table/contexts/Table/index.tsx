import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  FilterCallback,
  TableContextData,
  TableData,
  TableDataShape,
} from "./types";
import { useTableRules } from "../../hooks/useTableRules";
import { usePaginationRules } from "../../utilities/Pagination/hooks/usePaginationRules";
import { useSortRules } from "../../utilities/Sort/hooks/useSortRules";

export const TableContext = createContext({} as TableContextData);

const TableProvider = ({
  children,
  sort: sortInstance,
  pagination: paginationInstance,
  data,
  excludes,
}: TableData) => {
  const [tRows, setTRows] = useState<Array<unknown[]>>([]);
  const [paginatedTRows, setPaginatedTRows] = useState<Array<unknown[]>>([]);

  // Hooks para manipulação dos dados da tabela
  const { handleSortTData, getTRows, paginateData } = useTableRules({ data });
  const { sort, handleChangeSort } = useSortRules({ sortInstance });
  const { pagination, handleChangePagination } = usePaginationRules({
    paginationInstance,
    tRows,
  });

  // Estados locais
  const [hasEvent, setHasEvent] = useState<boolean>(false);
  const [filters, setFilters] = useState<Record<string, FilterCallback>>({});

  // Atualiza os filtros
  const handleChangeFilters = (callback: Record<string, FilterCallback>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...callback,
    }));
  };

  // Aplica os filtros aos dados
  const handleFilteredData = (data: TableDataShape) => {
    return Object.values(filters).reduce((filteredData, filter) => {
      return filter(filteredData);
    }, data);
  };

  // Atualiza as linhas da tabela
  const handleChangePaginedTRows = (rows: Array<unknown[]>) => {
    setPaginatedTRows(rows);
  };

  // Atualiza o estado de evento
  const handleChangeEvent = (isEvent: boolean) => {
    setHasEvent(isEvent);
  };

  /**
   * Atualiza os dados sempre que houver mudanças nos filtros, ordenação ou paginação
   */
  useEffect(() => {
    const sortedData = handleSortTData(sort);
    const filteredData = handleFilteredData(sortedData);
    const newRows = getTRows(filteredData, excludes);
    setTRows(newRows);
    const paginatedRows = paginateData(newRows, pagination);

    handleChangePaginedTRows(paginatedRows);
    setHasEvent(false);
  }, [sort?.type, pagination.current, data, hasEvent]);

  // Memoização das propriedades do contexto
  const contextValue = useMemo(
    () => ({
      sort,
      handleChangeSort,
      pagination,
      handleChangePagination,
      paginatedTRows,
      tRows,
      filters,
      handleChangeFilters,
      handleChangeEvent,
    }),
    [sort, pagination, tRows, filters]
  );

  return (
    <TableContext.Provider value={contextValue}>
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;

// Hook para acessar o contexto
export const useTableContext = () => useContext(TableContext);
