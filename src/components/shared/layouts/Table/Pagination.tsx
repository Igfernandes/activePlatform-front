import { ArrowLeft } from "@assets/Icons/black/ArrowLeft";
import { ArrowRight } from "@assets/Icons/black/ArrowRight";
import { PaginationShape } from "./type";
import { useEffect, useState } from "react";
import { When } from "@components/utilities/When";

type Props = {
  onPagination: (pageNumber: number) => void;
  pagination: PaginationShape;
};

export function Pagination({ onPagination, pagination }: Props) {
  const arrowStyled =
    "bg-primary border-secondary border-2 px-2 text-center pt-1 hover:bg-hover-secondary";
  const [displayedGroupPage, setDisplayedGroupPage] = useState<number>(1);
  const [displayedPages, setDisplayedPages] = useState<Array<number>>([]);
  const amountGroups = (pagination.amount ?? 0) / pagination.max;

  useEffect(() => {
    const pageNumbers = Array(pagination.amount)
      .fill(<></>)
      .map((value, index) => index + 1);

    const nextGroupPage = Math.ceil(pagination.current / (pagination.max ?? 0));

    const nextLastedElementDisplayed = nextGroupPage * pagination.max;

    setDisplayedPages(
      pageNumbers.slice(
        nextLastedElementDisplayed - pagination.max,
        nextLastedElementDisplayed
      )
    );

    setDisplayedGroupPage(nextGroupPage);
  }, [pagination]);

  return (
    <div className="flex justify-end">
      <div
        className={`${arrowStyled} rounded-l-md rounded-t-md cursor-pointer`}
        onClick={() => onPagination(pagination.current - 1)}
      >
        <ArrowLeft />
      </div>
      <div>
        <ul className=" text-white text-sm flex">
          {displayedPages.map((value, index) => (
            <li
              key={`pagination_key_${index}`}
              className={`${
                pagination.current == value
                  ? "bg-red text-white"
                  : "bg-tertiary text-black"
              } px-2 hover:bg-rose-800 hover:text-white cursor-pointer`}
              onClick={() => onPagination(value)}
            >
              <span>{value}</span>
            </li>
          ))}
          <When value={displayedGroupPage < amountGroups}>
            <li
              key={`pagination_key_more`}
              className={`px-2 hover:bg-rose-800 text-black hover:text-white cursor-pointer`}
              onClick={() =>
                onPagination(displayedGroupPage * pagination.max + 1)
              }
            >
              <span>...</span>
            </li>
          </When>
        </ul>
      </div>
      <div
        className={`${arrowStyled} rounded-r-md rounded-b-md cursor-pointer`}
        onClick={() => onPagination(pagination.current + 1)}
      >
        <ArrowRight />
      </div>
    </div>
  );
}
