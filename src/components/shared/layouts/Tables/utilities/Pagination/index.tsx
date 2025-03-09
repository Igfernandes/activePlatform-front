import { ArrowLeft } from "@assets/Icons/black/ArrowLeft";
import { ArrowRight } from "@assets/Icons/black/ArrowRight";
import { useEffect } from "react";
import { When } from "@components/utilities/When";
import { usePagination } from "./hooks/usePagination";

export function Pagination() {
  const {
    amountGroups,
    arrowStyled,
    displayedGroupPage,
    displayedPages,
    pagination,
    tRows,
    handleChangeDisplayedGroupPage,
    handleChangeDisplayedPages,
    handleChangePagination,
  } = usePagination();

  useEffect(() => {
    const nextGroupPage = Math.ceil(pagination.current / 3);

    handleChangeDisplayedPages(nextGroupPage);
    handleChangeDisplayedGroupPage(nextGroupPage);
  }, [pagination]);
  return (
    <div className="flex justify-between mt-3">
      <div>
        <p className="text-sm">{`Exibindo ${pagination.max} de ${tRows.length} resultados`}</p>
      </div>
      <div>
        <div className="flex justify-end">
          <div
            className={`${arrowStyled} rounded-l-md rounded-t-md cursor-pointer`}
            onClick={() => handleChangePagination(pagination.current - 1)}
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
                  onClick={() => handleChangePagination(value)}
                >
                  <span>{value}</span>
                </li>
              ))}
              <When value={(displayedGroupPage + 1) < amountGroups}>
                <li
                  key={`pagination_key_more`}
                  className={`px-2 hover:bg-rose-800 text-black hover:text-white cursor-pointer`}
                  onClick={() =>
                    handleChangePagination(
                      displayedGroupPage * pagination.max + 1
                    )
                  }
                >
                  <span>...</span>
                </li>
              </When>
            </ul>
          </div>
          <div
            className={`${arrowStyled} rounded-r-md rounded-b-md cursor-pointer`}
            onClick={() => handleChangePagination(pagination.current + 1)}
          >
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
