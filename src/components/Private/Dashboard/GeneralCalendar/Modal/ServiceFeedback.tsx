import i18n from "@configs/i18n";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { ServicesShape } from "@type/Services";
import Link from "next/link";

type Props = {
  services?: Array<ServicesShape>;
  date: string;
};

export function ServiceFeedback({ services, date }: Props) {
  const { services: servicesRoute } = privateRoutes;
  return (
    <>
      {services
        ?.filter((service) => service.realized_at === date)
        .map((service) => (
          <li key={service.id} className="bg-white px-2 rounded-md mb-2">
            <Link href={`${servicesRoute}/${service.id}`}>
              <span>{`${i18n("Words.event")}: ${
                service.name
              }`}</span>
            </Link>
          </li>
        ))}
    </>
  );
}
