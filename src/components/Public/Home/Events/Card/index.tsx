import { CalendarAccept } from "@assets/Icons/black/CalendarAccept";
import { CalendarExpired } from "@assets/Icons/black/CalendarExpired";
import { SafeImage } from "@components/shared/layouts/Image";
import { When } from "@components/utilities/When";
import i18n from "@configs/i18n";
import { ServicesShape } from "@type/Services";
import dayjs from "dayjs";
import Link from "next/link";
import { useCard } from "./hooks/useCard";

type Props = Pick<
  ServicesShape,
  "id" | "name" | "photo" | "snippet" | "realized_at" | "expired_at" | "has_available"
>;

export function Card({
  id,
  name,
  photo,
  realized_at,
  expired_at,
  snippet,
  has_available,
}: Props) {
  const { handleIsAvailableDate } = useCard();

  return (
    <div className="bg-white w-[95%] md:w-full mx-auto min-h-[400px] max-h-[400px] max-w-[300px] flex flex-col justify-between rounded-lg border-2 border-white shadow-sm shadow-white pb-3">
      <div>
        <div>
          <SafeImage
            src={photo}
            width={400}
            height={400}
            className="h-40 max-h-[600px] object-cover rounded-lg"
            alt="event"
            fallback="/imgs/illustration.png"
          />
        </div>
        <div className="px-3">
          <div className="mt-3">
            <h3 className="text-md text-red font-medium leading-4">{name}</h3>
          </div>
          <div className="border-t-2 border-zinc-200 pt-2 mt-3">
            <ul>
              <li className="my-2">
                <p className="text-xs flex">
                  <When value={!handleIsAvailableDate(realized_at, expired_at)}>
                    <CalendarAccept className="fill-slate-500 mr-2" />
                    <span className="font-semibold">Inscrições em: &nbsp;</span>
                    {dayjs(realized_at).format(i18n("Configs.format.datetime"))}
                  </When>
                  <When value={handleIsAvailableDate(realized_at, expired_at)}>
                    <CalendarAccept className="fill-slate-500 mr-2" />
                    <span className="font-semibold text-emerald-800">
                      Inscrições Abertas
                    </span>
                  </When>
                </p>
              </li>
              <When value={!!expired_at}>
                <li className="flex my-2">
                  <CalendarExpired className="fill-slate-500 mr-2" />
                  <p className="text-xs">
                    <span className="font-semibold">Encerramento em:</span>
                    &nbsp;
                    {dayjs(expired_at).format(i18n("Configs.format.datetime"))}
                  </p>
                </li>
              </When>
            </ul>
          </div>
          <div>
            <p
              className="line-clamp-3"
              dangerouslySetInnerHTML={{
                __html: snippet ?? "",
              }}
            />
          </div>
        </div>
      </div>
      <div className="px-3 mt-5">
        <When value={handleIsAvailableDate(realized_at, expired_at) && has_available}>
          <Link
            href={id > 0 ? `/services/?key=${id}` : "#"}
            className={`block ${id > 0 ? "bg-red" : "bg-disabled"
              }  text-white p-2 text-center rounded-md`}
          >
            <span>{"Inscrever-se"}</span>
          </Link>
        </When>
        <When value={!handleIsAvailableDate(realized_at, expired_at)}>
          <p
            className={`block bg-disabled text-white p-2 text-center rounded-md`}
          >
            <span>{"Em breve"}</span>
          </p>
        </When>
        <When value={!has_available}>
          <p
            className={`block bg-disabled text-white p-2 text-center rounded-md`}
          >
            <span>{"Vagas Esgotadas"}</span>
          </p>
        </When>
      </div>
    </div>
  );
}
