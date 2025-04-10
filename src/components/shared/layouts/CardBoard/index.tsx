import useWindow from "@hooks/useWindow";
import { CardBoardProps } from "./types";

export function CardBoard({ viewLimit, items }: CardBoardProps) {
  const { screenType } = useWindow();
  return (
    <div className="w-full">
      <div className="flex flex-wrap w-full justify-between">
        {items.map((item, index) => (
          <div
            key={`card_${index}`}
            className="bg-white px-6 py-4 rounded-xl"
            style={{
              width: screenType === "DESKTOP" ? `${90 / viewLimit}%` : "100%",
            }}
          >
            <div className="mb-2">{item.icon}</div>
            <div className="mb-2">
              <p className="text-xs">{item.title}</p>
            </div>
            <div>
              <p className="font-semibold">{`${item?.prefix ?? ""}${
                item?.value ?? 0
              }${item?.suffix ?? ""}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
