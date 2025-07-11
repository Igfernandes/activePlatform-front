import { FileSymlink } from "@assets/Icons/black/FileSymlink";
import { When } from "@components/utilities/When";
import { EntitiesShape } from "@services/Exports/Post/type";
import usePostExports from "@services/Exports/Post/usePost";
import { useState } from "react";

type Props = {
  in_ids: Array<number>;
  entity: EntitiesShape;
};

export function Shared({ entity, in_ids }: Props) {
  const { mutateAsync: postExport } = usePostExports();
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <div className="relative">
      <div
        className=" rounded-md cursor-pointer ml-2"
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
      >
        <FileSymlink className="hover:fill-red" />
        <When value={isShow}>
          <ul className="absolute z-50 bg-white p-4 left-0 shadow-lg rounded-md">
            <li
              onClick={() =>
                postExport({
                  entity,
                  in_ids,
                  type: "PDF",
                })
              }
              className="hover:text-red mt-1 font-semibold"
            >
              {"PDF"}
            </li>
            <li
              onClick={() =>
                postExport({
                  entity,
                  in_ids,
                  type: "EXCEL",
                })
              }
              className="hover:text-red mt-1 font-semibold"
            >
              {"EXCEL"}
            </li>
          </ul>
        </When>
      </div>
    </div>
  );
}
