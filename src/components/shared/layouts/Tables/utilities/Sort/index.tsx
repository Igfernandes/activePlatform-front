import { SortAscendingLetters } from "@assets/Icons/black/SortAscendingLetters";
import i18n from "@configs/i18n";
import { useSort } from "./hooks/useSort";
import { ArrowDown } from "@assets/Icons/black/ArrowDown";

export function Sort() {
  const { handleChangeSort, sort } = useSort();

  return (
    <div className="flex cursor-pointer" onClick={handleChangeSort}>
      <p className="mr-2">{i18n("words.list_from_a_to_z")}</p>
      <ArrowDown
        className="mr-[-9px]"
        style={{
          transform: `rotateZ(${sort?.type == "DESC" ? "180deg" : "0deg"})`,
          marginTop: sort?.type == "DESC" ? `-4px` : "0px",
        }}
      />
      <SortAscendingLetters />
    </div>
  );
}
