import { useState } from "react";
import { useTableContext } from "../../../contexts/Table";

export function usePagination() {
  const { handleChangePagination, pagination, tRows, amountRegisters } = useTableContext();
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
    const MAX_NUMBERS_PAGE = 3;

    const nextLastedElementDisplayed = nextGroupPage * MAX_NUMBERS_PAGE;

    setDisplayedPages(
      pageNumbers.slice(
        nextLastedElementDisplayed - MAX_NUMBERS_PAGE,
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
    amountRegisters
  };
}
