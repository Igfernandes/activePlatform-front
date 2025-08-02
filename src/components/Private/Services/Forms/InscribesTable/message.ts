import i18n from "@configs/i18n";
import { ServicesShape } from "@type/Services";
import dayjs from "dayjs";

type Props = {
  service: ServicesShape;
  link: string;
  clientName: string;
};

export const getMessageConfirmation = ({
  service,
  link,
  clientName,
}: Props) => {
  return `Confirmação de Inscrição - ${service.name}

Olá, *${clientName}*!
Confirme a sua inscrição no link: ${link} 

${
  service.alerts
    ? `*Instruções:* \n ${service.alerts.replace(/<[^>]*>/g, "")}`
    : ""
}

*Data:* ${
    service.realized_at
      ? dayjs(service.realized_at ?? "").format(i18n("Configs.format.date"))
      : "Não definido"
  }
*Horário:* ${
    service.realized_at
      ? dayjs(service.realized_at ?? "", "YYYY-MM-DD HH:mm:ss").format("HH:mm")
      : "Não definido"
  }
*Local:* ${service.address ?? "Não definido"}

*Fique atento(a)* às nossas próximas mensagens com mais informações importantes.
Se precisar de qualquer ajuda, é só responder aqui! Estamos à disposição.

Até lá!
Equipe AGM
`.trim();
};
