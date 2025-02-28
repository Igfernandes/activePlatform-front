import { useState } from "react";
import { useTableContext } from "../../../contexts/Table";

export function usePagination() {
  const { handleChangePagination, pagination, tRows } = useTableContext();
  const arrowStyled =
    "bg-primary border-secondary border-2 px-2 text-center py-1 hover:bg-hover-secondary";
  const amountGroups = (pagination.amount ?? 0) / pagination.max;

  const [displayedGroupPage, setDisplayedGroupPage] = useState<number>(1);
  const [displayedPages, setDisplayedPages] = useState<Array<number>>([]);

  /**
   * Updates the list of displayed page numbers based on the selected group of pages.
   *
   * @param {number} nextGroupPage - The index of the next group of pages to display.
   * The function calculates the range of pages to be displayed based on the group's index
   * and the pagination settings.
   */
  const handleChangeDisplayedPages = (nextGroupPage: number) => {
    const pageNumbers = Array(pagination.amount)
      .fill(<></>)
      .map((value, index) => index + 1);

    const nextLastedElementDisplayed = nextGroupPage * pagination.max;

    setDisplayedPages(
      pageNumbers.slice(
        nextLastedElementDisplayed - pagination.max,
        nextLastedElementDisplayed
      )
    );
  };
  
  /**
   * Updates the currently active group of pages for pagination.
   *
   * @param {number} nextGroupPage - The new group index to be set.
   */
  const handleChangeDisplayedGroupPage = (nextGroupPage: number) => {
    setDisplayedGroupPage(nextGroupPage);
  };

  return {
    arrowStyled,
    amountGroups,
    displayedGroupPage,
    displayedPages,
    handleChangePagination,
    pagination,
    handleChangeDisplayedGroupPage,
    handleChangeDisplayedPages,
    tRows,
  };
}
