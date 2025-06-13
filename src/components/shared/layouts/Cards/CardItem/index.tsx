import { SquareRoundedChevronRight } from "@assets/Icons/black/SquareRoundedChevronRight";
import { DotsOptions } from "@components/shared/others/DotsOptions";
import { CardItemProps } from "../type";
import i18n from "@configs/i18n";

export function CardItem({
  dotsActions,
  foot = {
    items: [],
  },
  createdAt,
  link,
  description,
  alert,
}: CardItemProps) {
  return (
    <div className="card-item flex flex-col justify-between w-full md:w-[32%] bg-white p-6 mr-2 my-2">
      <div className="w-full">
        <div className="card-header flex justify-between">
          <div>
            <span className="py-1 px-8 bg-green rounded-md inline-block"></span>
          </div>
          <div>
            <DotsOptions actions={dotsActions} />
          </div>
        </div>
        <div className="card-body mt-2">
          <div className="time mb-2">
            <span className="text-xs">{createdAt ?? "00/00/0000"}</span>
          </div>
          <div>
            <p className="font-bold line-clamp-3">{description}</p>
          </div>
          <div className="mt-1">
            <span className="text-xs line-clamp-1">{alert}</span>
          </div>
        </div>
      </div>
      <div className="card-foot mt-6">
        <div className="flex justify-between">
          <div>{foot.items.map((item) => item)}</div>
          <div>
            <a href={link} className="flex items-center cursor-pointer">
              <span className="font-bold mr-2">{i18n(`Words.edit`)}</span>
              <SquareRoundedChevronRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
