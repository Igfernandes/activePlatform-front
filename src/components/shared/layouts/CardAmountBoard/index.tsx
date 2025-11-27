import useWindow from "@hooks/useWindow";
import { CardAmountBoardProps } from "./types";
import { Skeleton } from "@components/utilities/Skeleton";

export function CardAmountBoard({
  viewLimit,
  items,
  isLoading,
}: CardAmountBoardProps) {
  const { screenType } = useWindow();
  return (
    <Skeleton
      isLoading={!items || !!isLoading}
      settings={{
        type: "boxes",
        amount: Math.min(items.length, viewLimit),
      }}
    >
      <div className="w-full">
        <div className="flex flex-wrap w-full justify-around">
          {items.map((item, index) => (
            <div
              key={`card_${index}`}
              className="bg-white px-6 py-4 rounded-xl min-w-48 my-2"
              style={{
                width: screenType !== "MOBILE" ? `${90 / viewLimit}%` : "100%",
              }}
            >
              <div className="flex items-center mb-2">
                <div className="icon mr-2">
                  <div
                    className={`${item.background ?? "bg-blue"} p-2 rounded-md`}
                  >
                    {item.icon}
                  </div>
                </div>
                <div className="information">
                  <div className="title">
                    <p className="text-md">{item.title}</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-lg">{`${
                      item?.prefix ?? ""
                    }${item?.value ?? 0}${item?.suffix ?? ""}`}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Skeleton>
  );
}
